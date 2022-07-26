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
    let newTodoData = todoData.filter((todoData) => todoData.id !== id);
    console.log(newTodoData);
    setTodoData(newTodoData);
  };

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
    <>
      {todoData.map((data) => (
        <TodoContainer>
          <div className="content" key={data.id}>
            <input
              type="checkbox"
              defaultChecked={data.completed}
              onChange={() => {
                handleCompletedChange(data.id);
              }}
            />
            {data.completed ? (
              <span className="line">{data.title}</span>
            ) : (
              <span>{data.title}</span>
            )}
            <TodoButton onClick={() => handleClick(data.id)}>x</TodoButton>
          </div>
        </TodoContainer>
      ))}
    </>
  );
};

export default Todo;
