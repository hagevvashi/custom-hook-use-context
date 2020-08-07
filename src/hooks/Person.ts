import { useContext, useState } from "react";
import { PersonContext } from "../Context";

export const usePerson = () => {
  const {
    state: { id, name, age },
    dispatch
  } = useContext(PersonContext);

  const [tmpPerson, setTmpPerson] = useState({ id, name, age });
  return { tmpPerson, setTmpPerson, dispatch };
};
