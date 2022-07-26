import React, { useState } from "react";
import styled from "@emotion/styled";
import Todo from "./components/Todo";

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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

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
          {todoData.map((data) => (
            <Todo tododata={todoData} setTodoData={setTodoData} key={data.id} />
            /*
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
            */
          ))}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name={value}
              placeholder="할일을 입력해주세요."
              onChange={handleChange}
              className="input"
            />
            <input type="submit" value="입력" className="btn" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default App;
