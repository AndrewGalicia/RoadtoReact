import React from "react";

const AddTodoForm = (props) => {
  // Add the handleAddTodo function
  const handleAddTodo = (event) => {
    // Prevent the default form submit behavior
    event.preventDefault();

    // Retrieve the value of the title element
    const todoTitle = event.target.title.value;

    props.onAddTodo(todoTitle)

    // Reset the form to clear the input field
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input name="title" id="todoTitle" type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
