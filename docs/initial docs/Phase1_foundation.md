# Phase 1: Foundation (Cross-Language Logic & Testing)

## Objective
Establish the foundational logic of Plant Parenthood by comparing Python (reference language) to JavaScript. [cite_start]The UI and API will be built side-by-side strictly to learn concepts and support our primary focus: testing.

## Scope
* Days 1-5 core logic implementations (JS Frontend, Python Backend).
* Foundational manual testing (50 test cases total).
* Dataset definition for 60-70 realistic plants.

## Features
* **Plant Roster:** Basic display of plant data.
* **Add Plant Tool:** Initial form handling.

## Learning Topics (Python vs JavaScript)
* **Syntax Comparison:** Python Lists/Dicts vs JS Arrays/Objects.
* **Control Flow:** Python `for`/`if` vs JS `for`/`if`.
* **Execution:** Python execution vs JS DOM manipulation.

## Daily Breakdown & Work
* **Day 1: Arrays, Loops, Conditional Statements**
    * *Frontend:* JS Arrays holding plant names; loops to render basic console/DOM output.
    * *Backend:* Python Lists holding identical mock data; `for` loops filtering data.
    * *Testing:* 10 Manual Test Cases (5 Positive, 3 Negative, 2 Edge).
* **Day 2: Functions & Objects**
    * *Frontend:* JS Objects detailing plant properties (e.g., watering frequency).
    * *Backend:* Python Dictionaries simulating the same dataset.
    * *Testing:* 10 Manual Test Cases.
* **Day 3: DOM Manipulation & Flask Setup**
    * *Frontend:* Connecting JS Objects to HTML elements.
    * *Backend:* Setting up basic Flask routes to return Python Dictionaries.
    * *Testing:* 10 Manual Test Cases.
* **Day 4: Events & Form Handling**
    * *Frontend:* JS event listeners for "Add Plant".
    * *Backend:* Flask route to accept POST request data.
    * *Testing:* 10 Manual Test Cases.
* **Day 5: Refactoring & Review**
    * *Frontend/Backend:* Code cleanup and alignment.
    * *Testing:* 10 Manual Test Cases. End-to-end review of the 50 TCs.

## Testing Activities
* Minimum 10 test cases daily (5 Positive, 3 Negative, 2 Edge). Target: 50 TCs.

## API Activities
* Draft initial structures for `GET /plants` and `POST /plants`.

## SQL Activities
* Define entities and basic relationships for the 60-70 plant dataset (Categories: Flowering, Fruits, Vegetables, Herbs, Indoor, Succulents).

## Playwright Activities
* *Future prep:* Identify UI elements that will require locators (IDs, data-testids).

## Deliverables & GitHub Artifacts
* `script.js` and `app.py` demonstrating equivalent logic.
* 50 documented manual test cases.

## Completion Criteria
* Python and JS code handle the same logic side-by-side.
* 50 manual test cases are written and executed against the basic UI/Backend.