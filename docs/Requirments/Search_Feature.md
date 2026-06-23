# Search Feature Requirements

## Feature Overview

The application should allow users to search for a plant by name and retrieve its details from the plant database.

## Search Logic

1. User enters a plant name to search.

2. The application loops through each plant in the plant database.

3. For every plant, compare the current plant name with the searched plant name.

4. If a match is found:

   * Display the plant name.
   * Display the plant category.
   * Display the sunlight requirement.
   * Stop searching.

5. If no match is found after checking all plants:

   * Display "Plant Not Found".

## Version 1 Constraints

* Search must be case-sensitive.
* Search must use exact matching.
* Partial matches are not supported.
* Search results should display:

  * Plant Name
  * Category
  * Sunlight Requirement

## Acceptance Criteria

* Existing plants can be found successfully.
* Non-existing plants return "Plant Not Found".
* Search stops after finding the first match.
* Plant details are displayed correctly.
