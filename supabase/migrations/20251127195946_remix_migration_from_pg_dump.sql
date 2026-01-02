CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



SET default_table_access_method = heap;

--
-- Name: blog_posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.blog_posts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    slug text NOT NULL,
    title text NOT NULL,
    excerpt text NOT NULL,
    content text NOT NULL,
    author text NOT NULL,
    author_bio text,
    date timestamp with time zone DEFAULT now(),
    category text NOT NULL,
    tags text[] DEFAULT '{}'::text[],
    read_time integer DEFAULT 5,
    cover_image_url text,
    cover_image_alt text,
    meta_title text,
    meta_description text,
    meta_keywords text[],
    og_image_url text,
    status text DEFAULT 'draft'::text,
    published_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    language text DEFAULT 'tr'::text NOT NULL,
    CONSTRAINT blog_posts_status_check CHECK ((status = ANY (ARRAY['draft'::text, 'published'::text, 'archived'::text]))),
    CONSTRAINT valid_language CHECK ((language = ANY (ARRAY['tr'::text, 'de'::text])))
);


--
-- Name: blog_posts blog_posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blog_posts
    ADD CONSTRAINT blog_posts_pkey PRIMARY KEY (id);


--
-- Name: blog_posts blog_posts_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blog_posts
    ADD CONSTRAINT blog_posts_slug_key UNIQUE (slug);


--
-- Name: blog_posts unique_slug_language; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blog_posts
    ADD CONSTRAINT unique_slug_language UNIQUE (slug, language);


--
-- Name: idx_blog_posts_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_blog_posts_language ON public.blog_posts USING btree (language);


--
-- Name: idx_blog_posts_published_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_blog_posts_published_at ON public.blog_posts USING btree (published_at DESC);


--
-- Name: idx_blog_posts_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_blog_posts_slug ON public.blog_posts USING btree (slug);


--
-- Name: idx_blog_posts_slug_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_blog_posts_slug_language ON public.blog_posts USING btree (slug, language);


--
-- Name: idx_blog_posts_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_blog_posts_status ON public.blog_posts USING btree (status);


--
-- Name: idx_blog_posts_status_language; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_blog_posts_status_language ON public.blog_posts USING btree (status, language);


--
-- Name: blog_posts Anyone can read published posts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can read published posts" ON public.blog_posts FOR SELECT USING ((status = 'published'::text));


--
-- Name: blog_posts Service can insert posts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Service can insert posts" ON public.blog_posts FOR INSERT WITH CHECK (true);


--
-- Name: blog_posts Service can update posts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Service can update posts" ON public.blog_posts FOR UPDATE USING (true);


--
-- Name: blog_posts; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


