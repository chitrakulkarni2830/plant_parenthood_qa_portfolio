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
Monstera: Thrives in bright indirect light.

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

Plant data is now stored using a single list of dictionaries. Each plant record contains its own name, category, and sunlight requirement, eliminating index synchronization risks.

### Status

PASS

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
Recommendations are generated successfully without runtime errors.

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

Frontend and backend generate identical recommendation messages.

### Status

PASS

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

Plant data is stored using a single array of objects. Each plant record contains its own name, category, and sunlight requirement, eliminating index synchronization risks.

### Status

PASS

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

---

### FTC-005

### Module

Frontend/Backend Parity

### Test Scenario

Verify frontend and backend contain identical plant datasets.

### Preconditions

Frontend and backend applications are available.

### Test Steps

1. Review frontend plantDatabase.
2. Review backend plant_database.
3. Compare total plant records.
4. Compare plant names across both datasets.

### Expected Result

Frontend and backend should contain identical plant records.

### Actual Result

Frontend and backend both contain 10 identical plant records. Dataset parity has been successfully restored.

### Status

PASS

### Linked Defect

FP-BUG-003

---

### TC-006

### Test Scenario

Verify search functionality returns plant details when a valid plant name is entered.

### Preconditions

Plant database contains Rose.

### Test Steps

1. Set user_input = "Rose".
2. Execute plant_logic.py.
3. Observe search results.

### Test Data

Rose

### Expected Result

Application displays:

🌸 Name: Rose

🪴 Category: Flowering Plants

☀️ Sunlight: Direct Sun

### Actual Result

Application displays correct plant details.

### Status

PASS

---

### TC-007

### Test Scenario

Verify application displays Plant Not Found when a non-existent plant name is entered.

### Preconditions

Plant database does not contain Dragon Fruit.

### Test Steps

1. Set user_input = "Dragon Fruit".
2. Execute plant_logic.py.
3. Observe search results.

### Test Data

Dragon Fruit

### Expected Result

Application displays:

🥺🌱 Plant Not Found

### Actual Result

Application displays:

🥺🌱 Plant Not Found

### Status

PASS

---

### TC-008

### Test Scenario

Verify search functionality handles lowercase input for an existing plant.

### Preconditions

Plant database contains Rose.

### Test Steps

1. Set user_input = "rose".
2. Execute plant_logic.py.
3. Observe search results.

### Test Data

rose

### Expected Result

Application should identify Rose and display plant details regardless of letter casing.

### Actual Result

Application identifies Rose and displays plant details regardless of letter casing.

### Status

PASS

---

### TC-009

### Test Scenario

Verify application displays welcome banner on startup.

### Expected Result

Application displays:

🌿 Welcome to Plant Parenthood 🌿

### Actual Result

Application displays welcome banner successfully.

### Status

PASS
---

## TC-010

### Module

Plant Count

### Test Scenario

Verify application displays total number of plants available in the database.

### Preconditions

Plant database contains 10 plant records.

### Test Steps

1. Execute plant_logic.py.
2. Observe application output.
3. Locate plant count section.

### Expected Result

Application displays:

🌱 Total Plants Available: 10

### Actual Result

🌱 Total Plants Available: 10

### Status

PASS

### Linked Defects

PP-BUG-007

PP-BUG-008


---

## TC-011

### Module

Plant Count

### Test Scenario

Verify plant count increases when a new plant record is added to the database.

### Preconditions

Plant database contains 10 plant records.

### Test Steps

1. Add a new plant record to the plant database.
2. Execute plant_logic.py.
3. Observe displayed plant count.

### Expected Result

Plant count increases by 1.

Example:

Previous Count: 10

Updated Count: 11

### Actual Result

Not Executed

### Status

NOT EXECUTED

---

## TC-012

### Module

Plant Count

### Test Scenario

Verify plant count decreases when a plant record is removed from the database.

### Preconditions

Plant database contains 10 plant records.

### Test Steps

1. Remove an existing plant record from the plant database.
2. Execute plant_logic.py.
3. Observe displayed plant count.

### Expected Result

Plant count decreases by 1.

Example:

Previous Count: 10

Updated Count: 9

### Actual Result

Not Executed

### Status

NOT EXECUTED

---

## TC-013

### Module

Plant Count

### Test Scenario

Verify displayed plant count matches the total number of plant records present in the database.

### Preconditions

Plant database contains 10 plant records.

### Test Steps

1. Open plant_database.
2. Count the total number of plant records.
3. Execute plant_logic.py.
4. Observe displayed plant count.
5. Compare displayed count with actual database count.

### Expected Result

Displayed plant count matches the total number of records present in the database.

Example:

Database Records: 10

Displayed Count: 10

### Actual Result

Not Executed

### Status

NOT EXECUTED

---

## TC-014

### Module

Plant Count

### Test Scenario

Verify application displays correct plant count when the database contains zero plant records.

### Preconditions

Plant database is empty.

Example:

plant_database = []

### Test Steps

1. Remove all plant records from the plant database.
2. Execute plant_logic.py.
3. Observe displayed plant count.

### Expected Result

Application displays:

🌱 Total Plants Available: 0

Application should execute successfully without errors.

### Actual Result

Not Executed

### Status

NOT EXECUTED