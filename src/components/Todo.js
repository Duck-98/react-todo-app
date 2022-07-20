import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
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

const Todo = ({ title, completed }) => {
  return (
    <Container>
      <div className="content">
        <input type="checkbox" defaultChecked={completed} />
        {title}
        <Button>x</Button>
      </div>
    </Container>
  );
};

export default Todo;
