import React, { FC, useContext } from "react";
import { update } from "../ducks/Person";
import { PersonContext } from "../Context";
import { usePerson } from "../hooks/Person";

export const DisplayPerson: FC = () => {
  const { state } = useContext(PersonContext);

  return (
    <div>
      <p>{state.id}</p>
      <p>{state.name}</p>
      <p>{state.age}</p>
    </div>
  );
};

export const UpdatePerson: FC = () => {
  const { tmpPerson, setTmpPerson, dispatch } = usePerson();
  return (
    <div>
      <p>
        <input
          type="text"
          value={tmpPerson.name}
          onChange={(e) => {
            setTmpPerson({ ...tmpPerson, name: e.currentTarget.value });
          }}
        />
      </p>
      <p>
        <input
          type="number"
          value={tmpPerson.age}
          onChange={(e) => {
            setTmpPerson({ ...tmpPerson, age: Number(e.currentTarget.value) });
          }}
        />
      </p>
      <button
        onClick={() => {
          dispatch(update(tmpPerson));
        }}
      >
        更新
      </button>
    </div>
  );
};
