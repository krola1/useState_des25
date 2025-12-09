import { useState } from "react";

export default function ObjectState() {
  const [user, setUser] = useState({
    name: "Lars",
    age: 35,
    isAdmin: false,
  });

  const increaseAge = () => {
    setUser((prev) => {
      return { ...prev, age: prev.age + 1 };
    });
  };
  const setAdmin = () => {
    setUser((prev) => ({ ...prev, isAdmin: !prev.isAdmin }));
  };

  return (
    <>
      {user.isAdmin && <p>Is Admin!</p>}
      {user.isAdmin ? <p>Is admin</p> : <p>is not admin</p>}

      <p>{user.name}</p>
      <p>{user.age}</p>

      <button onClick={increaseAge}>Increase age</button>
      <button onClick={setAdmin}>Set admin</button>
    </>
  );
}
