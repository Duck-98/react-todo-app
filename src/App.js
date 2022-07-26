import React, { useState } from "react";
import styled from "@emotion/styled";
import Todo from "./components/Todo";
import Form from "./components/Form";

const Container = styled.div`
  margin: auto;
  max-width: 600px;
  .todoBlock {
    padding: 30px;
    margin-top: 50px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: -9px 17px 13px rgb(0 0 0 / 16%);

    .content {
      border-bottom: 1px #ccc dotted;
      text-decoration: none;
      padding: 10px;
      .line {
        text-decoration: line-through;
      }
    }
  }
  form {
    display: flex;
    .input {
      flex: 10;
    }
  }
`;

const App = () => {
  const [todoData, setTodoData] = useState([
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
  ]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData([...todoData, newTodo]);
    console.log(newTodo);
  };

  return (
    <>
      <Container>
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          <Todo todoData={todoData} setTodoData={setTodoData} />
          <Form setValue={setValue} value={value} handleSubmit={handleSubmit} />
        </div>
      </Container>
    </>
  );
};

export default App;
