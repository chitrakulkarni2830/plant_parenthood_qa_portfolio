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
