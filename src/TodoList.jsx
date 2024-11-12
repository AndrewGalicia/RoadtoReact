const todoList = [
    {id: 1, title: "buy milk"},
    {id: 2, title: "wash car"},
    {id: 3, title: "walk dog"},
    
  ]

const TodoList = () => (
    <ul>
        {todoList.map(todoList => (
          <li key={todoList.id}>{todoList.id}</li>,
          <li>{todoList.title}</li>
        ) )}
      </ul>
)

export default TodoList 