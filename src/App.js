import React from "react";
import styled from "@emotion/styled";
import Todo from "./components/Todo";

const Container = styled.div`
  background-color: aliceblue;
`;

const App = () => {
  const todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: true,
    },
    {
      id: "3",
      title: "운동하기",
      completed: false,
    },
  ];
  return (
    <>
      <Container>
        <Todo tododata={todoData} />
      </Container>
    </>
  );
};

export default App;
