# Phase 1: Foundation

## Objective
Establish the basic project folder structure, build a simple HTML/JS frontend, set up a minimal Python Flask backend, and start practicing manual testing fundamentals.

## Deliverables
* Project folder structure
* Basic HTML/CSS/JS frontend ("Plant Parenthood" UI)
* Minimal Python Flask server serving the UI

## Features
* **Home Page:** Displays a welcome message and a static list of plants.
* **Add Plant Form:** A simple HTML form to add a new plant (Fields: Plant Name, Species, Watering Frequency).

## Learning Topics
* **JavaScript Basics:** Arrays, Loops, Conditions, Functions, Objects, DOM Basics, Events.
* **Backend Basics:** Creating a Python virtual environment and simple Flask routes.
* **Testing Basics:** Writing simple, clear manual test cases for visible UI elements.

## Daily Breakdown
* **Day 1:** Project setup. Create `index.html` and `style.css` for the Add Plant form. Write 5 test cases for UI layout and visibility.
* **Day 2:** JS Basics (Variables, DOM). Add JS to read form inputs. Write 5 test cases for form field validation (e.g., empty fields).
* **Day 3:** JS Events (Clicks, Form Submission). Add JS logic to display a success message when the form is submitted. Write 5 test cases for button interactions and success messages.
* **Day 4:** Python Setup. Create `app.py` and a basic Flask server. Write 5 test cases for expected server behavior/errors.
* **Day 5:** Connect Flask to serve the HTML frontend. Write 5 test cases for the end-to-end flow of loading the app.

## Test Case Goals
* Total: 25 manual test cases.
* Focus: Visible UI elements, input validation, and basic user flow.

## API Goals
* `GET /api/health`: Create one simple API endpoint that returns `{ "status": "Plant Parenthood backend is alive!" }`.

## SQL Goals
* *Theory only for now:* Draft a basic SQL `CREATE TABLE` statement mentally for the "Plants" table. (No database integration yet).

## Playwright Goals
* Install Playwright into the project.
* Write a single, simple script to navigate to the local Flask server and assert the page title is "Plant Parenthood".

## Completion Criteria
* Flask server runs on local machine without errors.
* Accessing `http://localhost:5000` loads the frontend UI.
* 25 manual test cases are documented.
* Playwright is installed and the basic title-check test passes.