import React from "react";
import styled from "@emotion/styled";

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
    }
  }
`;
const Button = styled.div`
  color: #fff;
  border: none;
  background-color: grey;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
`;

const Todo = () => {
  return (
    <Container>
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <div className="content">
          <input type="checkbox" defaultChecked={false} />
          {todoData.titl}
          <Button>x</Button>
        </div>
      </div>
    </Container>
  );
};

export default Todo;
