import os
import json
import time
from typing import List, Dict
import tenacity
from google import genai
from google.genai import types

# --- 0. Configuration & Environment ---
# Ensure API key is set in environment: GOOGLE_API_KEY
client = genai.Client()

# Model Definitions (Strict adherence to Rule 4 & 6)
# Generator can be fast/cheap. Critic/Optimizer MUST be frontier.
MODEL_GENERATOR = "gemini-2.5-flash"
MODEL_CRITIC = "gemini-2.5-pro" # Using 2.5 Pro as it's the current stable frontier for reasoning
MODEL_OPTIMIZER = "gemini-2.5-pro"

# Project Context
TECH_STACK = """
- Frontend: Astro (SSG & SSR hybrid, ViewTransitions, React components)
- Hosting/CI: Netlify (Edge Functions, _redirects, netlify.toml)
- Version Control: GitHub (Actions, branch protection)
- Backend/DB: Supabase (PostgreSQL, Row Level Security, Storage, Edge Functions via Deno)
- Automation: n8n (Webhooks, API integrations)
- Project Paradigm: B2B Programmatic SEO (pSEO) with dynamic sitemaps and large static builds.
"""

TARGET_ERROR_COUNT = 50

# --- 1. Agents (Executor, Scorer, Optimizer) ---

@tenacity.retry(wait=tenacity.wait_exponential(multiplier=1, min=4, max=10), stop=tenacity.stop_after_attempt(3))
def call_generator(prompt: str) -> str:
    """The Executor: Generates potential errors based on the master prompt."""
    print("🤖 Generator runs...")
    response = client.models.generate_content(
        model=MODEL_GENERATOR,
        contents=prompt,
        config=types.GenerateContentConfig(
            temperature=0.8, # Higher temp for brainstorming edge cases
        )
    )
    return response.text

@tenacity.retry(wait=tenacity.wait_exponential(multiplier=1, min=4, max=10), stop=tenacity.stop_after_attempt(3))
def call_critic(generated_content: str) -> Dict:
    """The Scorer: Evaluates the generated errors using a strict rubric."""
    print("⚖️ Critic evaluates...")
    
    evaluation_prompt = f"""
    Evaluate the following generated list of tech stack errors against the required constraints.
    
    Context: The user needs highly specific, obscure edge-case errors that happen when connecting Astro, Netlify, Supabase, and n8n.
    
    Constraints:
    1. Are the errors TOO GENERIC? (e.g., "500 Internal Server Error", "Syntax Error"). Generic errors score 0.
    2. Are the errors SPECIFIC to the stack? (e.g., "Netlify _redirects conflicting with Astro's trailingSlash config").
    3. Are there duplications?
    
    Rate the content from 0 to 10.
    10 = Extremely specific, highly plausible edge cases that seasoned devs miss.
    0 = Basic, generic web dev errors.
    
    Return ONLY a JSON object with this structure:
    {{
        "score": <int between 0-10>,
        "feedback": "<detailed string explaining why the score was given and what to improve>"
    }}
    
    Generated Content to evaluate:
    {generated_content}
    """
    
    response = client.models.generate_content(
        model=MODEL_CRITIC,
        contents=evaluation_prompt,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            temperature=0.0
        )
    )
    try:
        return json.loads(response.text)
    except json.JSONDecodeError:
        print("⚠️ Critic failed to return valid JSON.")
        return {"score": 0, "feedback": "CRITICAL FAILURE: Critic did not return valid JSON."}

@tenacity.retry(wait=tenacity.wait_exponential(multiplier=1, min=4, max=10), stop=tenacity.stop_after_attempt(3))
def call_optimizer(current_prompt: str, critic_feedback: str, generated_content: str) -> str:
    """The Optimizer: Rewrites the master prompt to fix the Critic's complaints."""
    print("🧠 Optimizer rewrites prompt...")
    
    optimization_prompt = f"""
    You are an expert Prompt Engineer. Your goal is to rewrite the Master Prompt so the Generator produces better results.
    
    Current Master Prompt:
    {current_prompt}
    
    Previous Output (Failed to get a high score):
    {generated_content[:500]}... (truncated)
    
    Critic's Feedback:
    {critic_feedback}
    
    Task: Rewrite the Master Prompt to explicitly forbid the mistakes identified by the Critic and to force the Generator to create deeper, more specific tech stack errors. 
    Output ONLY the new Master Prompt string. Do not wrap in markdown code blocks.
    """
    
    response = client.models.generate_content(
        model=MODEL_OPTIMIZER,
        contents=optimization_prompt,
        config=types.GenerateContentConfig(
            temperature=0.2
        )
    )
    return response.text.strip("`").removeprefix("markdown\n").removeprefix("text\n")

# --- 2. The Main Autoresearch Loop ---

def run_autoresearch_loop(iterations: int = 3):
    print(f"🚀 Starting Autoresearch Loop (Max Iterations: {iterations})")
    
    # Initial Master Prompt
    master_prompt = f"""
    Generate a list of 10 highly specific, obscure technical errors, edge cases, or configuration pitfalls that occur when combining the following tech stack:
    {TECH_STACK}
    
    Format each error as:
    **[Component] Issue Name:** Detailed description of how the tools interact to cause the failure.
    """
    
    best_score = -1
    best_content = ""
    history = []
    
    for i in range(iterations):
        print(f"\n--- Iteration {i+1}/{iterations} ---")
        
        # 1. Generate
        try:
            generated_content = call_generator(master_prompt)
        except Exception as e:
            print(f"❌ Generator failed: {e}")
            break
            
        # 2. Evaluate
        try:
            eval_result = call_critic(generated_content)
        except Exception as e:
            print(f"❌ Critic failed: {e}")
            break
            
        score = eval_result.get("score", 0)
        feedback = eval_result.get("feedback", "No feedback provided.")
        
        print(f"📊 Score: {score}/10")
        print(f"💬 Feedback: {feedback}")
        
        # Track history
        history.append({
            "iteration": i + 1,
            "prompt": master_prompt,
            "score": score,
            "feedback": feedback
        })
        
        if score > best_score:
            best_score = score
            best_content = generated_content
            
        # 3. Stop or Optimize
        if score >= 9:
            print("✅ Success! High score achieved.")
            break
            
        if i < iterations - 1:
            # 4. Synthesize new prompt
            try:
                master_prompt = call_optimizer(master_prompt, feedback, generated_content)
                print(f"🔄 New Prompt Generated (length: {len(master_prompt)})")
            except Exception as e:
                print(f"❌ Optimizer failed: {e}")
                break
                
    # Save results
    print("\n💾 Saving results...")
    with open("best_errors.md", "w", encoding="utf-8") as f:
        f.write(f"# Autoresearch Best Output (Score: {best_score}/10)\n\n")
        f.write(best_content)
        
    with open("loop_history.json", "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2)
        
    print(f"🎉 Loop finished. Best score: {best_score}. Results saved to autoresearch_stack/ directory.")

if __name__ == "__main__":
    # N=2 for testing the loop mechanics rapidly as per Protocol Rule 3
    run_autoresearch_loop(iterations=2)
