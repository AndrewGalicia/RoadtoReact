import TodoListItem from "./TodoListItem"

const todoList = [
    {id: 1, title: "buy milk"},
    {id: 2, title: "wash car"},
    {id: 3, title: "walk dog"},
    
  ]

const TodoList = () => (
    <ul>
        {todoList.map(todoList => (
          <TodoListItem key={todoList.id} todo={todoList.title} />
        ) )}
      </ul>
)

export default TodoList 