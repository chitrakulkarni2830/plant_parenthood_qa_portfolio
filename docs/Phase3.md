# Phase 3: Database Integration & Validation

## Objective
Replace mocked backend data with a SQLite database holding the realistic dataset of 60-70 plants, focusing heavily on SQL validation testing.

## Scope
* SQLite setup and schema creation.
* Backend DB connection.
* [cite_start]SQL Validation testing[cite: 14, 15].

## Features
* Persistent data storage.
* Plant categories (Flowering, Fruits, Vegetables, Herbs, Indoor, Succulents).

## Learning Topics
* SQL constraints, relationships, and queries.
* Python `sqlite3` execution.

## Frontend Work
* UI updates to reflect database errors or slow loads.

## Backend Work
* Replace memory arrays/dicts with SQL executions in Flask routes.

## Testing Activities
* [cite_start]**Database Testing:** Validate Inserts, Updates, Deletes, Data Integrity, and Data Accuracy[cite: 14, 15].

## API Activities
* Ensure existing APIs correctly reflect database state and return 500s on DB failure.

## SQL Activities
* Implement `CREATE TABLE`, foreign keys (e.g., Categories table). Write complex validation queries.

## Playwright Activities
* *Future prep:* Consider database setup/teardown hooks for automation.

## Deliverables & GitHub Artifacts
* `schema.sql` file.
* Updated `app.py`.
* SQL Validation test suite documentation.

## Completion Criteria
* Database successfully populated with 60-70 realistic plants.
* [cite_start]SQL validation queries confirm data integrity[cite: 15].