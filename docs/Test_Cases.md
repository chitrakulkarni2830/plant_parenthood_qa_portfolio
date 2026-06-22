# Test Cases

## TC-001

### Module
Plant Dataset

### Test Scenario
Verify that Tomato is categorized correctly.

### Preconditions
Plant dataset is available.

### Test Steps

1. Open plant dataset.
2. Locate Tomato record.
3. Verify assigned category.

### Expected Result

Tomato should belong to Fruits category.

### Actual Result

Tomato belongs to Vegetables category.

### Status

FAIL

### Linked Defect

PP-BUG-001

### Actual Result

Tomato belongs to Fruits category.

### Status

PASS


---

## TC-002

### Module

Plant Care Recommendations

### Test Scenario

Verify that indirect light plants receive accurate care recommendations.

### Expected Result

Plants requiring "Indirect Light" should receive guidance specific to indirect light conditions.

### Actual Result

System displays "A shady corner is fine."

### Status

FAIL

### Linked Defect

PP-BUG-002

---

## TC-003

### Module

Plant Care Recommendations

### Test Scenario

Verify that care recommendations identify the associated plant.

### Expected Result

The output should include the plant name and recommendation.

Example:
Monstera → Bright indirect light recommended.

### Actual Result

Only generic recommendations are displayed.

### Status

FAIL

### Linked Defect

PP-BUG-003

---

## TC-004

### Module

Plant Data Integrity

### Test Scenario

Verify that plant information remains synchronized across all datasets.

### Expected Result

Each plant should always have a matching category and sunlight requirement.

### Actual Result

Parallel arrays create a risk of index mismatch and data corruption.

### Status

FAIL

### Linked Defect

PP-BUG-004

---
### Module:
Plant Care Recommendation

### Scenario:
Verify that recommendation logic executes successfully.

### Expected Result:
Recommendations are generated without runtime errors.

### Actual Result:
Application throws NameError because current_plant is undefined.

### Status:
FAIL

### Linked Defect:
PP-BUG-005