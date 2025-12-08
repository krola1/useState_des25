import { useState } from "react";
import TaskCard from "./TaskCard";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function InputComponent() {
  const [text, setText] = useState("");
  const [list, setList] = useLocalStorage("todolist", []);

  const handleAdd = () => {
    if (text.trim()) {
      ///sets list to previos list plus text
      setList((prev) => [...prev, { id: crypto.randomUUID(), title: text }]);
      setText("");
    }
  };

  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
      <button onClick={handleAdd}>add</button>

      {list.map((item) => (
        <TaskCard key={item.id} text={item.title} />
      ))}
    </>
  );
}
