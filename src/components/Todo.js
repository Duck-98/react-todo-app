import React from "react";
import styled from "@emotion/styled";

const TodoContainer = styled.div`
    .content {
      border-bottom: 1px #ccc dotted;
      text-decoration: none;
      padding: 10px;
    }
  }
`;
const TodoButton = styled.div`
  color: #fff;
  border: none;
  background-color: grey;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
`;

const Todo = ({ todoData, setTodoData }) => {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log(newTodoData);
    setTodoData(newTodoData);
  };
  console.log(todoData);
  const handleCompletedChange = (id) => {
    let newTodoData = todoData.filter((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };
  return (
    <TodoContainer>
      <div className="content" key={todoData.id}>
        <input
          type="checkbox"
          defaultChecked={todoData.completed}
          onChange={() => {
            handleCompletedChange(todoData.id);
          }}
        />
        {todoData.completed ? (
          <span className="line">{todoData.title}</span>
        ) : (
          <span>{todoData.title}</span>
        )}
        <TodoButton onClick={() => handleClick(todoData.id)}>x</TodoButton>
      </div>
    </TodoContainer>
  );
};

export default Todo;
