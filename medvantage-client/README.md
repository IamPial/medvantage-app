# MedVantage

## AI-Powered Clinical Trial & Rare Disease Matching Platform

## Project Overview

MedVantage is a full-stack Agentic AI web application that helps
researchers publish clinical trials and assists patients or clinicians
in finding suitable trials using AI-powered matching.

> **Educational Disclaimer:** This application uses synthetic
> (fictional) clinical trial and patient data for demonstration purposes
> only. It does not provide medical advice or diagnosis.

------------------------------------------------------------------------

# Objectives

-   Build a production-ready full-stack application
-   Implement role-based authentication
-   Integrate Large Language Models (Gemini)
-   Demonstrate Agentic AI workflows
-   Provide a modern responsive UI

------------------------------------------------------------------------

# Technology Stack

## Frontend

-   Next.js 15
-   TypeScript
-   Tailwind CSS
-   HeroUI
-   React Hook Form
-   Native Fetch API
-   Framer Motion
-   Recharts

## Backend

-   Express.js
-   TypeScript
-   MongoDB
-   Better Auth
-   JWT Cookie Authentication
-   Multer
-   PDF Parser

## AI

-   Gemini API

------------------------------------------------------------------------

# User Roles

## Researcher

-   Register / Login
-   Google Login
-   Add Clinical Trial
-   Upload Protocol PDF
-   Manage Trials
-   View Dashboard

## Patient / Clinician

-   Register / Login
-   Create Medical Profile
-   Search Clinical Trials
-   Receive AI Recommendations
-   Chat with AI Assistant

------------------------------------------------------------------------

# Pages

## Public

-   Home
-   Explore Trials
-   Trial Details
-   About
-   Contact
-   Login
-   Register

## Protected

-   Dashboard
-   Add Trial
-   Manage Trials
-   Recommendations
-   AI Chat
-   Profile

------------------------------------------------------------------------

# Home Page Sections

1.  Navbar
2.  Hero
3.  Featured Clinical Trials
4.  Why MedVantage
5.  How AI Works
6.  Research Statistics
7.  Testimonials
8.  FAQ
9.  Footer

------------------------------------------------------------------------

# Core CRUD

Researchers can:

-   Create Clinical Trials
-   Read Trial Information
-   Update Trial Information
-   Delete Trials

Each trial contains:

-   Title
-   Disease
-   Description
-   Hospital
-   Country
-   Phase
-   Minimum Age
-   Maximum Age
-   Gender
-   Mutation
-   Exclusion Criteria
-   Image
-   Protocol PDF

------------------------------------------------------------------------

# AI Feature 1 --- Document Intelligence

Workflow:

Researcher → Upload PDF → PDF Parser → Gemini API → Extract structured
data → Auto-fill form → Save Trial

Gemini extracts:

-   Disease
-   Age Criteria
-   Gender
-   Mutation
-   Dosage
-   Secondary Endpoints
-   Exclusion Criteria

------------------------------------------------------------------------

# AI Feature 2 --- Smart Recommendation Engine

Workflow:

Patient → Create Medical Profile → Load Active Trials → Gemini compares
profile with all trials → Match Score → Recommendation

Example Output

-   Trial A --- 92% Match
-   Trial B --- 81% Match

Each recommendation includes:

-   Match Score
-   Reason
-   Missing Requirements
-   Eligibility Status

------------------------------------------------------------------------

# AI Chat Assistant

The chatbot understands application context.

Examples:

-   Am I eligible?
-   Explain this trial.
-   Explain EGFR mutation.
-   Suggest another trial.

Features:

-   Conversation History
-   Suggested Prompts
-   Typing Indicator

------------------------------------------------------------------------

# Dashboard

## Researcher

Cards

-   Total Trials
-   Active Trials
-   Published Trials
-   Patient Matches

Charts

-   Disease Distribution
-   Monthly Trial Uploads
-   Trial Status

## Patient

-   Medical Profile
-   Saved Trials
-   Recommendations
-   Recent Searches

------------------------------------------------------------------------

# Database Collections

-   users
-   trials
-   patientProfiles
-   recommendations
-   chatHistory

------------------------------------------------------------------------

# Development Roadmap

## Phase 1

-   Project Setup
-   Authentication
-   Home Page

## Phase 2

-   Trial CRUD
-   Trial Details

## Phase 3

-   Search
-   Filter
-   Pagination

## Phase 4

-   Dashboard
-   Charts

## Phase 5

-   AI Document Intelligence

## Phase 6

-   AI Recommendation Engine

## Phase 7

-   AI Chat Assistant
-   Testing
-   Deployment
-   README

------------------------------------------------------------------------

# Deployment

Frontend

-   Vercel

Backend

-   Vercel

Database

-   MongoDB Atlas

AI

-   Gemini API

------------------------------------------------------------------------

# Project Goal

Build a professional healthcare research platform demonstrating:

-   Full Stack Development
-   Secure Authentication
-   AI Integration
-   Agentic Workflows
-   Modern UI/UX
-   Clean Code Architecture
