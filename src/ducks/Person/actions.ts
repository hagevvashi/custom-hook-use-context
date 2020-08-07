import { UPDATE } from "./types";
import { Person } from "./model";

export const update = (
  value: Person
): {
  type: typeof UPDATE;
  value: Person;
} => ({
  type: UPDATE,
  value
});
