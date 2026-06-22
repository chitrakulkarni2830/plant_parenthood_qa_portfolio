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
OPEN

### Target Fix: Objects Phase

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

### Linked Test Case

TC-006

### Type

Logic Defect

### Summary

Conditional recommendation logic executes outside the loop due to incorrect indentation.

### Description

The recommendation generation logic is placed outside the iteration block. As a result, the loop finishes execution first and only the final plant record is evaluated by the conditional statements.

### Steps To Reproduce

1. Execute plant_logic.py.
2. Observe the generated output.
3. Compare the number of recommendations against the number of plants in the dataset.

### Expected Result

A recommendation should be generated for every plant in the dataset.

### Actual Result

Only one recommendation is generated for the final plant in the dataset.

### Severity

High

### Priority

High

### Status

OPEN