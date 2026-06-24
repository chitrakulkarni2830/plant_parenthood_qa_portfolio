# Search Feature Requirements

## Feature ID

PP-FEAT-002

## Feature Name

Search Plant By Name

## Feature Overview

The application should allow users to search for a plant by name and retrieve its details from the plant database.

## Functional Requirements

### FR-001

The application shall accept a plant name as input.

### FR-002

The application shall search the plant database for a matching plant name.

### FR-003

The application shall compare the entered plant name against plant records stored in the database.

### FR-004

If a matching plant is found, the application shall display:

* Plant Name
* Category
* Sunlight Requirement

### FR-005

The application shall stop searching after finding the first matching record.

### FR-006

If no matching plant exists in the database, the application shall display:

Plant Not Found

## Search Logic

1. User enters a plant name.
2. Application loops through plant records.
3. Application compares the entered plant name with each plant record.
4. If a match is found:

   * Display plant details.
   * Stop searching.
5. If no match is found:

   * Display Plant Not Found.

## Version 1 Constraints

* Search shall use exact matching.
* Partial search is not supported.
* Search results shall display:

  * Plant Name
  * Category
  * Sunlight Requirement

## Acceptance Criteria

### AC-001

Existing plants can be found successfully.

### AC-002

Non-existing plants return Plant Not Found.

### AC-003

Search stops after finding the first match.

### AC-004

Plant details are displayed correctly.

### AC-005

Search functionality shall support case-insensitive matching.


---


# Category Search Feature Requirements

## Feature ID

PP-FEAT-004

## Feature Name

Search Plants By Category

## Feature Overview

The application should allow users to search for plants using a category name and display all matching plants available in the plant database.

## Functional Requirements

### FR-001

The application shall accept a category name as input.

### FR-002

The application shall search all plant records in the database for matching categories.

### FR-003

The application shall display all plant names belonging to the selected category.

### FR-004

The application shall support multiple matching results.

### FR-005

The application shall perform case-insensitive category matching.

Examples:

Flowering Plants = flowering plants

Indoor Plants = indoor plants

### FR-006

The application shall support singular and plural category names.

Examples:

Flowering Plant = Flowering Plants

Herb = Herbs

Indoor Plant = Indoor Plants

### FR-007

If no matching category exists, the application shall display:

🥺🌱 Oops! Plant Not Found

## Output Requirements

Example Input:

Flowering Plants

Example Output:

🌸 Matching Plants Found 🌸

🌸 Rose

🌸 Jasmine

🌸 Hibiscus

🌸 Marigold

## Version 1 Constraints

* Search results shall display plant names only.
* Category details shall not be displayed.
* Sunlight requirements shall not be displayed.
* Search shall return all matching plants.

## Acceptance Criteria

### AC-001

Valid categories return all matching plants.

### AC-002

Multiple matching plants are displayed correctly.

### AC-003

Search is case-insensitive.

### AC-004

Singular and plural category names return identical results.

### AC-005

Invalid categories return Plant Not Found.

### AC-006

Frontend and backend produce identical search results.



---



# PP-FEAT-005

# Search By Sunlight Requirements

## Feature Overview

The application should allow users to search for plants based on their sunlight requirements.

The application should display all plants matching the selected sunlight type.

---

## Search Logic

1. User enters a sunlight requirement.

2. The application loops through each plant in the plant database.

3. For every plant, compare the plant sunlight requirement with the entered sunlight requirement.

4. If a match is found:

   * Display the plant name.

5. Continue searching until all plant records have been checked.

6. If no matching plants are found:

   * Display:

     Oops! Plant Not Found

---

## Version 1 Constraints

* Search must be case-insensitive.
* Exact sunlight matching only.
* Partial sunlight searches are not supported.
* Multiple matching plants may be displayed.
* Search results display plant names only.

---

## Supported Sunlight Types

* Direct Sun
* Indirect Light
* Low Light

---

## Acceptance Criteria

* Plants with matching sunlight requirements are displayed.
* Multiple matching plants are displayed successfully.
* Search is case-insensitive.
* Invalid sunlight requirements display Plant Not Found.
* Application continues searching until all plant records have been evaluated.
