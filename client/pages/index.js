import { useState } from "react";
import styles from "styled-components";

export default function Home() {
  const [passwordName, setPasswordName] = useState("");
  const [passwordDoc, setPasswordDoc] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await fetch(
      `http://localhost:3333/api/passwords/${passwordName}`
    );
    const passwordDoc = await result.json();
    setPasswordDoc(passwordDoc);
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={passwordName}
          onChange={(event) => setPasswordName(event.target.value)}
        />

        <SubmitButton type="submit">Send</SubmitButton>
      </form>
      {passwordDoc && (
        <>
          {passwordDoc.name} {passwordDoc.value}
        </>
      )}
    </>
  );
}
