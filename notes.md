# Data Modeling Notes

## Requirements

Build an application that allows people to create a competition that others can join.
- Winning is based on points, which are earned by setting behavior goals, then meeting the goals.
- Participants can set and change goals at any time
- Participants record values daily.
- Points calculation is based on recorded values compared to the goals set *at the time the values are recorded*
- Participants keep track of :
  * oz. of water drunk vs goal
  * Hours of sleep vs goal
  * Minutes of exercise vs goal
  * Fat grams eaten vs goal
  * Protein grams eaten vs goal
  * Carbohydrate grams eaten vs goal
  * Steps taken vs goal

## Notes from Sean's lecture

Strive for a database that matches the [Third Normal Form](https://support.microsoft.com/en-us/help/283878/description-of-the-database-normalization-basics)

While this is desirable, it is not always practicle.

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.
For the `zoos` the client wants to record:
- name.
- address.
For the `animals` the client wants to record:
- name.
- species.
- list of all the zoos where they have resided.
Determine the database tables necessary to track this information.
Label any relationships between table.
