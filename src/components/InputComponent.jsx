import { useState } from "react";

export default function InputComponent() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />

      <p>Teksten er: {text}</p>
    </>
  );
}
