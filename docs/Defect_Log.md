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

Frontend and backend plant datasets are out of sync.

### Description

Five new plants (Money Plant, Tulsi, Mint, Jasmine, and Hibiscus) were added to the frontend plantDatabase but were not added to the backend plant_database. This causes frontend and backend datasets to diverge and breaks feature parity.

### Steps To Reproduce

1. Add five new plants to frontend/plant_logic.js.
2. Do not add the same plants to backend/plant_logic.py.
3. Execute both applications.

### Expected Result

Frontend and backend should contain identical plant datasets.

### Actual Result

Frontend contains 10 plants while backend contains only 5 plants.

### Severity

Medium

### Priority

Medium

### Status

OPEN
