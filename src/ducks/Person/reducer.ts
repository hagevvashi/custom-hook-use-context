import { UPDATE } from "./types";
import { Person } from "./model";
import { update } from "./actions";

function assertNever(type: never): never {
  throw new Error(`Unexpected type: ${type}`);
}

export const reducer = (state: Person, action: ReturnType<typeof update>) => {
  const { type, value } = action;

  switch (type) {
    case UPDATE:
      return { ...state, ...value };

    default:
      return assertNever(type);
  }
};
