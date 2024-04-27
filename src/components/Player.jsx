import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(); //input is connected to this ref and the value from this useRef will always be an JavaScript object
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  //whenever ref changes the component does not re-execute but in case of state it re-executes
  //use the state when the value directly changes the UI don't use for behind the scenes, vise vera for ref and ref is also used to access dom elements
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''; // this should not be done in all cases which violates React rule of manuiplating dom ourselves, we should let react do it.
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
