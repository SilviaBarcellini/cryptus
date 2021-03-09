import { useState } from "react";
import styled from "styled-components";

const Welcome = styled.h1`
  color: hotpink;
`;

const Input = styled.input`
  border: 2px solid black;
  border-radius: 1em;
  padding: 1em 2em;
  background-color: black;
  font-size: 1em;
  width: 100%;
  color: hotpink;
  margin-bottom: 0.5em;
`;

const SubmitButton = styled.button`
  border: 2px solid black;
  border-radius: 1em;
  padding: 1em 2em;
  background-color: hotpink;
  font-size: 1em;
  font-weight: bolder;
  width: 100%;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  padding: 2em;
  display: grid;
  place-items: center;
`;

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
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Welcome>Welcome to Cryptus!!!</Welcome>
          <Input
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
      </Container>
    </>
  );
}
