import * as React from "react";
import "./styles.css";
import { reducer, Person } from "./ducks/Person";
import { PersonContext } from "./Context";
import { UpdatePerson, DisplayPerson } from "./components/Person";

export default function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    new Person(1, "John", 19)
  );
  return (
    <PersonContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <DisplayPerson />
        <UpdatePerson />
      </div>
    </PersonContext.Provider>
  );
}
