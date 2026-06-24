# PP-FEAT-006

# Partial Search Requirements

## Feature Overview

The application should allow users to search for plants using a partial plant name.

The application should display all plants whose names contain the entered search text.

---

## Search Logic

1. User enters a partial plant name.

2. The application loops through each plant in the plant database.

3. For every plant, compare the entered text with the plant name.

4. If the plant name contains the entered text:

   * Display the plant name.

5. Continue searching until all plant records have been checked.

6. If no matching plants are found:

   * Display:

     Oops! Plant Not Found

---

## Version 1 Constraints

* Search must be case-insensitive.
* Partial matching is supported.
* Multiple matching plants may be displayed.
* Search results display plant names only.
* Search should check for matches anywhere within the plant name.

---

## Example Searches

Input:

Ros

Output:

Rose

---

Input:

Mon

Output:

Monstera

---

Input:

Plant

Output:

Snake Plant

Money Plant

---

Input:

Aloe

Output:

Aloe Vera

---

Input:

xyz

Output:

Oops! Plant Not Found

---

## Acceptance Criteria

* Application successfully finds plants using partial text.
* Search is case-insensitive.
* Multiple matching plants are displayed.
* Invalid search values display Plant Not Found.
* Application continues searching until all plant records have been evaluated.
* Results are displayed consistently in frontend and backend implementations.
