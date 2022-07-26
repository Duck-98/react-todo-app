import React from "react";

const Form = ({ setValue, value, handleSubmit }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
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
    </>
  );
};

export default Form;
