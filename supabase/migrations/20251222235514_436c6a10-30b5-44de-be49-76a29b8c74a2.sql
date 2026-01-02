-- Create leads table for storing form submissions
CREATE TABLE public.leads (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT,
    source TEXT NOT NULL DEFAULT 'quick_analysis_modal',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow insert from anyone (public form)
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Only service role can read leads (for admin/backend access)
CREATE POLICY "Service role can read leads" 
ON public.leads 
FOR SELECT 
TO service_role
USING (true);

-- Add index on created_at for efficient querying
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);