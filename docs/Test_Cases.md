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

Plants requiring indirect light receive specific indirect-light recommendations.

### Status

PASS

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

Each recommendation now displays the associated plant name.

### Status

PASS

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

## TC-005

### Module:
Plant Care Recommendation

### Scenario:
Verify that recommendation logic executes successfully.

### Expected Result:
Recommendations are generated without runtime errors.

### Actual Result:
Application throws NameError because current_plant is undefined.

### Status:
PASS

### Linked Defect:
PP-BUG-005

---

## TC-006

### Module

Plant Care Recommendations

### Test Scenario

Verify that care recommendations are generated for every plant in the dataset.

### Preconditions

Plant dataset and sunlight requirements dataset contain matching records.

### Test Steps

1. Execute plant_logic.py.
2. Observe the generated recommendations.
3. Count the total recommendations displayed.

### Expected Result

A recommendation should be generated for every plant in the dataset.

Current dataset contains 5 plants.

Expected output count = 5 recommendations.

### Actual Result

A recommendation is successfully generated for every plant in the dataset.

### Status

PASS

### Linked Defect

PP-BUG-006

---------------------------

## FTC-001

### Module

Frontend Plant Care Recommendations

### Test Scenario

Verify that frontend recommendation messages match backend recommendation messages.

### Preconditions

Frontend and backend implementations are available.

### Test Steps

1. Execute backend logic.
2. Execute frontend logic.
3. Compare recommendation outputs.

### Expected Result

Frontend and backend should generate identical recommendation messages for the same plant and sunlight requirement.

### Actual Result

Frontend uses older recommendation messages while backend uses updated recommendation messages.

### Status

FAIL

### Linked Defect

FP-BUG-001

---

## FTC-002

### Module

Frontend Recommendation Output

### Test Scenario

Verify that recommendation output includes the associated plant name.

### Preconditions

Frontend recommendation logic is available.

### Test Steps

1. Execute frontend logic.
2. Review generated recommendations.

### Expected Result

Each recommendation should include the plant name.

Example:

Monstera: Thrives in bright indirect light.

### Actual Result

Plant names are correctly displayed with recommendations.

### Status

PASS

---

## FTC-003

### Module

Frontend Recommendation Logic

### Test Scenario

Verify that indirect-light plants receive indirect-light recommendations.

### Preconditions

Dataset contains plants requiring indirect light.

### Test Steps

1. Execute frontend logic.
2. Locate recommendation for Monstera.

### Expected Result

An indirect-light specific recommendation should be displayed.

### Actual Result

Indirect-light recommendation is generated.

### Status

PASS

---

## FTC-004

### Module

Frontend Data Integrity

### Test Scenario

Verify that plant datasets remain synchronized.

### Preconditions

Frontend uses parallel arrays.

### Test Steps

1. Review plantNames array.
2. Review sunlightRequirements array.
3. Verify matching records exist for all entries.

### Expected Result

Every plant should have a matching sunlight requirement.

### Actual Result

Parallel arrays create a future risk of dataset mismatch.

### Status

FAIL

### Linked Defect

FP-BUG-002

---

## FTC-005

### Module

Frontend Loop Execution

### Test Scenario

Verify that recommendations are generated for all plants.

### Preconditions

Frontend recommendation logic is available.

### Test Steps

1. Execute frontend logic.
2. Count generated recommendations.

### Expected Result

Five recommendations should be generated.

### Actual Result

Five recommendations are generated successfully.

### Status

PASS
