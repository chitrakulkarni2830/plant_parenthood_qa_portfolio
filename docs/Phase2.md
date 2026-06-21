# Phase 2: API Development & Postman Testing

## Objective
Build robust Flask APIs to serve the 60-70 plant dataset and thoroughly test them using Postman.

## Scope
* Develop RESTful endpoints for CRUD operations.
* [cite_start]API Testing focusing on positive, negative, edge cases, and status codes[cite: 13].

## Features
* Full Plant CRUD (Create, Read, Update, Delete).

## Learning Topics
* Python Flask routing and JSON handling.
* JS `fetch()` vs Python `requests`.
* REST Architecture.

## Frontend Work
* Refactor JS to fetch data from the new Flask APIs instead of hardcoded arrays.

## Backend Work
* Build `GET`, `POST`, `PUT`, `DELETE` endpoints for `/api/plants`.

## Testing Activities
* [cite_start]**API Testing:** For every API: Positive Tests, Negative Tests, Edge Cases, Status Code Validation, Response Validation[cite: 13].
* [cite_start]Log defects in JIRA including: Summary, Description, Steps, Expected Result, Actual Result, Severity, Priority[cite: 15].

## API Activities
* Implement full API suite for the Plant Roster.

## SQL Activities
* Draft the SQL queries (`SELECT`, `INSERT`, `UPDATE`, `DELETE`) needed for the APIs (executed in Python memory/mocks for now).

## Playwright Activities
* *Future prep:* Map out API mocking strategies for future automated tests.

## Deliverables & GitHub Artifacts
* Flask API endpoints code.
* Postman Collection exported to GitHub.

## Completion Criteria
* All APIs pass Postman testing criteria.
* Frontend dynamically loads data via `fetch()`.