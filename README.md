# Richard Hanly — Developer Portfolio

A personal software development portfolio built with React, TypeScript, and Vite.

The portfolio showcases selected projects across full-stack development, backend engineering, cloud infrastructure, data applications, automation, systems reliability, and applied AI.

## Live Site

View the portfolio at [richardhanly.dev](https://richardhanly.dev).

## Featured Projects

### RotationLab

Full-stack NBA lineup and rotation analysis application built around Oklahoma City Thunder lineup data.

Features include:

- Five-man lineup comparison
- Advanced efficiency metrics
- Searchable lineup and player selection
- Lineup leaderboard
- Player replacement analysis
- Four-player core analysis
- NBA player headshots
- FastAPI analytics backend
- Automated API and analytics tests
- Vercel and Render deployment

**Stack:** React, TypeScript, Vite, Python, FastAPI, pandas, nba_api

### SortView — AMH Analytics Platform

Analytics and monitoring platform for automated material handling systems used in library operations.

The project combines log collection, backend processing, persistent storage, and an analytics dashboard for evaluating sorter activity and operational performance.

**Stack:** Python, FastAPI, Streamlit, PostgreSQL, Neon, Alembic

### Library AI Assistant

Retrieval-augmented generation application for querying document collections and reviewing supporting source passages.

**Stack:** Python, FastAPI, Streamlit, Chroma, OpenAI API

### FlowBoard

Kanban-style task management application built as a software engineering assessment.

Features include:

- Drag-and-drop task management
- Supabase persistence
- Anonymous authentication
- Row Level Security
- Labels
- Activity tracking
- Search and filtering
- Optimistic updates and rollback behavior

**Stack:** React, TypeScript, Supabase, PostgreSQL, dnd-kit

### NBA Player Performance Prediction

Basketball analytics application for exploring player statistics and generating regression-based performance forecasts.

**Stack:** Python, Streamlit, pandas, scikit-learn

### Cloud Reliability Lab

Cloud reliability and operations project built around a FastAPI service deployed to AWS EC2.

The project includes:

- nginx reverse proxy
- systemd service management
- CloudWatch monitoring
- Terraform
- Controlled failure scenarios
- Incident documentation
- Operational runbooks

**Stack:** AWS, Python, FastAPI, nginx, systemd, Terraform

### Poker Night Tracker

Web application for tracking poker sessions, player performance, historical results, and leaderboard statistics.

**Stack:** JavaScript, Google Apps Script, Google Sheets

## Project Walkthroughs

Several portfolio projects include recorded walkthroughs demonstrating the application and explaining the underlying architecture and technical decisions.

Current walkthroughs include:

- RotationLab
- FlowBoard
- SortView
- Library AI Assistant

Video files are stored in:

```text
public/videos/
```

## Technology Stack

### Languages

- TypeScript
- JavaScript
- Python
- Java
- Go

### Frontend

- React
- Vite
- HTML
- CSS
- Streamlit

### Backend

- FastAPI
- REST APIs
- Google Apps Script

### Data and Databases

- PostgreSQL
- Supabase
- Neon
- Chroma
- pandas

### Cloud and Infrastructure

- AWS
- EC2
- CloudWatch
- Terraform
- nginx
- Linux
- systemd

### Development Tools

- Git
- GitHub
- VS Code
- pytest
- Vercel
- Render

## Running Locally

Clone the repository:

```bash
git clone https://github.com/richardrhanly-us/Portfolio.git
cd Portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The local development URL will typically be:

```text
http://localhost:5173
```

## Production Build

Create a production build with:

```bash
npm run build
```

The generated build files will be written to:

```text
dist/
```

## Project Structure

```text
Portfolio/
├── public/
│   ├── images/
│   │   ├── flowboard.png
│   │   ├── library-ai-assistant.png
│   │   ├── NBA.PNG
│   │   ├── rotationlab.png
│   │   ├── sortview-dashboard.png
│   │   └── ...
│   ├── videos/
│   │   ├── FlowBoard-walkthrough.mp4
│   │   ├── libraryaiassistant-walkthrough.mp4
│   │   ├── rotationlab-walkthrough.mp4
│   │   ├── SortDemo.mp4
│   │   ├── sortview-walkthrough.mp4
│   │   └── ...
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## Portfolio Goal

This portfolio is intended to demonstrate practical software engineering across several areas:

- Full-stack application development
- Backend API development
- Data processing and analytics
- Cloud infrastructure
- Reliability engineering
- Database-backed applications
- Applied AI
- Automation
- Testing
- Deployment
- Technical communication

The projects emphasize complete workflows rather than isolated code samples, including problem definition, implementation, testing, deployment, documentation, and demonstration.

## Author

**Richard Hanly**

- GitHub: https://github.com/richardrhanly-us
- LinkedIn: https://www.linkedin.com/in/richardhanly/
