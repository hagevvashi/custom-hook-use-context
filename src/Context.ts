import React, { ReducerState, ReducerAction, Dispatch } from "react";
import { reducer } from "./ducks/Person";

export const PersonContext = React.createContext({
  state: {} as ReducerState<typeof reducer>,
  dispatch: (() => {}) as Dispatch<ReducerAction<typeof reducer>>
});
