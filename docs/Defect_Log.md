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

OPEN

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

OPEN

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

### Target Fix: Objects Phase

---

Type:
Logic Defect

Summary:
current_plant variable referenced before definition.

Severity:
High

Priority:
High

Status:
OPEN