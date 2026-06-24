# Defect Log

## PP-BUG-001

### Linked Test Case

TC-001

### Type

Data Defect

### Summary

Tomato incorrectly categorized as Vegetable.

### Description

The sample dataset classifies Tomato under Vegetables instead of Fruits.

### Steps To Reproduce

1. Open plant dataset.
2. Locate Tomato record.
3. Check category.

### Expected Result

Tomato should belong to Fruits category.

### Actual Result

Tomato belongs to Vegetables category.

### Severity

Low

### Priority

Low

### Status

CLOSED

### Resolution

Updated Tomato category from Vegetables to Fruits.

---

## PP-BUG-002

### Linked Test Case

TC-002

### Type

Logic Defect

### Summary

Indirect light plants receive inaccurate care recommendations.

### Severity

Medium

### Priority

Medium

### Status

CLOSED

### Resolution:
Replaced generic placement advice with sunlight-specific care guidance.

---

## PP-BUG-003

### Linked Test Case

TC-003

### Type

Logic Defect

### Summary

Care recommendations do not identify which plant they belong to.

### Severity

Medium

### Priority

Medium

### Status

CLOSED

### Resolution:
Added plant name to recommendation output using index-based iteration.

---

## PP-BUG-004

### Linked Test Case

TC-004

### Type

Design Defect / Data Integrity Risk

### Summary

Parallel arrays may become unsynchronized and corrupt plant data relationships.

### Severity

High

### Priority

Medium

### Status

CLOSED

### Resolution

Replaced parallel arrays with a single list of dictionaries (plant_database). Each plant now stores its own name, category, and sunlight data within the same record, eliminating the risk of index mismatches and corrupted plant-care relationships.

---

##  PP-BUG-005

### Linked Test Case:
TC-005

### Type:
Logic Defect

### Summary:
current_plant variable referenced before definition.

### Severity:
High

### Priority:
High

### Status:
CLOSED

### Resolution:
Added index-based iteration to correctly access plant name and sunlight requirement simultaneously.

---

## PP-BUG-006

### Linked Test Case:

TC-006

### Type:

Logic Defect

### Summary:

Conditional recommendation logic executes outside the loop due to incorrect indentation.

### Description:

The recommendation generation logic is placed outside the iteration block. As a result, the loop finishes execution first and only the final plant record is evaluated by the conditional statements.

### Steps To Reproduce:

1. Execute plant_logic.py.
2. Observe the generated output.
3. Compare the number of recommendations against the number of plants in the dataset.

### Expected Result:

A recommendation should be generated for every plant in the dataset.

### Actual Result:

Only one recommendation is generated for the final plant in the dataset.

### Severity:

High

### Priority:

High

### Status:

CLOSED

### Resolution:

Moved conditional recommendation logic inside the loop so that every plant record is processed correctly.

--------------------------

## FP-BUG-001

### Linked Test Case

FTC-001

### Type

Parity Defect

### Summary

Frontend recommendation messages do not match backend recommendation messages.

### Description

The frontend implementation uses older recommendation wording while the backend implementation has already been updated with more accurate plant care guidance.

### Steps To Reproduce

1. Execute backend logic.
2. Execute frontend logic.
3. Compare recommendation outputs.

### Expected Result

Frontend and backend should produce identical recommendation messages.

### Actual Result

Frontend and backend produce different recommendation messages.

### Severity

Medium

### Priority

High

### Status

CLOSED

### Resolution

Updated frontend recommendation messages to match backend recommendation messages and maintain feature parity.

---

## FP-BUG-002

### Linked Test Case

FTC-004

### Type

Design Defect / Data Integrity Risk

### Summary

Parallel arrays may become unsynchronized and create incorrect plant-care relationships.

### Description

Frontend currently stores plant data in separate arrays. Future additions or modifications may cause index mismatches between datasets.

### Steps To Reproduce

1. Add a new plant to plantNames.
2. Do not add a corresponding sunlight requirement.
3. Execute recommendation logic.

### Expected Result

Every plant should always have matching sunlight data.

### Actual Result

Dataset synchronization depends entirely on matching indexes.

### Severity

Medium

### Priority

Medium

### Status

CLOSED

### Resolution

Replaced parallel arrays with a single array of objects (plantDatabase). Each plant now stores its own name, category, and sunlight requirement within the same record, eliminating the risk of index mismatches and incorrect plant-care relationships.

---

### FP-BUG-003

### Linked Test Case

FTC-005

### Type

Parity Defect

### Summary

Frontend and backend plant datasets were out of sync.

### Description

Five new plants (Money Plant, Tulsi, Mint, Jasmine, and Hibiscus) were added to the frontend plantDatabase but were not added to the backend plant_database. This caused frontend and backend datasets to diverge and broke feature parity.

### Steps To Reproduce

1. Add five new plants to frontend/plant_logic.js.
2. Do not add the same plants to backend/plant_logic.py.
3. Execute both applications.

### Expected Result

Frontend and backend should contain identical plant datasets.

### Actual Result

Frontend contained 10 plants while backend contained only 5 plants.

### Severity

Medium

### Priority

Medium

### Status

CLOSED

### Resolution

Added the missing plant records (Money Plant, Tulsi, Mint, Jasmine, and Hibiscus) to the backend plant_database, restoring frontend/backend dataset parity.

---

### PP-BUG-005

### Linked Test Case

TC-008

### Type

Validation Defect

### Summary

Search functionality is case-sensitive and fails to identify valid plant names entered in lowercase.

### Description

The search feature performs an exact string comparison between user_input and plant["name"].

When a user enters "rose" instead of "Rose", the application fails to locate the existing plant and incorrectly displays Plant Not Found.

### Steps To Reproduce

1. Set user_input = "rose".
2. Execute plant_logic.py.
3. Observe search results.

### Expected Result

Application should locate Rose and display plant details regardless of letter casing.

### Actual Result

Application displays:

🥺🌱 Plant Not Found

### Severity

Low

### Priority

Medium

### Status

CLOSED

### Resolution

Updated plant search logic to perform case-insensitive comparison using lower() on both user input and plant name values.

---

### FP-BUG-004

### Status

CLOSED

### Resolution

Updated frontend search comparison to perform case-insensitive matching using toLowerCase() on both plant name and user input.

---

## PP-BUG-007

### Linked Test Case

TC-010

### Type

Logic Defect

### Summary

Plant Count feature does not execute because the function is never called.

### Description

The Plant Count function was implemented successfully but was not invoked anywhere in the application flow. As a result, the feature never executed and plant count information was not displayed to the user.

### Steps To Reproduce

1. Implement plant_count() function.
2. Do not call the function.
3. Execute plant_logic.py.

### Expected Result

Application displays total plant count.

Example:

🌱 Total Plants Available: 10

### Actual Result

Plant Count output is not displayed.

### Severity

Medium

### Priority

Medium

### Status

CLOSED

### Resolution

Added explicit function call:

plant_count()

after function definition.

---

## PP-BUG-008

### Linked Test Case

TC-010

### Type

Logic Defect

### Summary

Plant Count function recursively calls itself.

### Description

The function invocation was placed inside the plant_count() function body. This causes the function to repeatedly call itself instead of terminating normally.

### Steps To Reproduce

1. Implement plant_count() function.
2. Add plant_count() inside the function body.
3. Execute plant_logic.py.

### Expected Result

Function executes once and displays plant count.

### Actual Result

Function repeatedly calls itself, creating recursion and preventing normal execution.

### Severity

High

### Priority

High

### Status

CLOSED

### Resolution

Moved plant_count() invocation outside the function definition and executed it only once after function declaration.

---

## FP-BUG-005

### Linked Test Case

TC-014

### Type

Parity Defect

### Summary

Frontend and backend Plant Not Found messages do not match.

### Description

When a plant search returns no results, the backend displays:

🥺🌱 Oops! Plant Not Found

while the frontend displays:

🥺🌱 Plant Not Found

This creates inconsistent user experience across platforms.

### Steps To Reproduce

1. Set plant database to empty.
2. Execute backend application.
3. Execute frontend application.
4. Compare Plant Not Found messages.

### Expected Result

Frontend and backend should display identical Plant Not Found messages.

### Actual Result

Frontend and backend display different messages.

### Severity

Low

### Priority

Low

### Status

CLOSED

### Resolution

Updated frontend Plant Not Found message to match backend output.

Backend:
🥺🌱 Oops! Plant Not Found

Frontend:
🥺🌱 Oops! Plant Not Found

Frontend/backend parity successfully restored.

---

## FP-BUG-006

### Linked Test Case

TC-018

### Type

Logic Defect

### Summary

Search functions reference incorrect input variables.

### Description

The Search By Name, Search By Category and Search By Sunlight features were updated to use dedicated input variables:

* plantNameInput
* categoryInput
* sunlightInput

However, the search logic continued referencing userInput during comparisons.

As a result, search functionality referenced an incorrect variable and returned incorrect results.

### Steps To Reproduce

1. Set:

   plantNameInput = "rose"

2. Execute Search By Name.

3. Set:

   categoryInput = "Flowering Plants"

4. Execute Search By Category.

5. Set:

   sunlightInput = "Direct Sun"

6. Observe search results.

### Expected Result

Each search feature should use its corresponding input variable and return accurate search results.

### Actual Result

Search functions reference userInput instead of their dedicated input variables.

### Severity

High

### Priority

High

### Status

CLOSED

### Resolution

Updated search functions to use:

* plantNameInput
* categoryInput
* sunlightInput

Search functionality now returns correct results for all search features.
