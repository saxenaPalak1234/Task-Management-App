import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    // --------Add Todo -----------
    addTodo: (state, action) => {
      console.log(action.payload);
      const taskId = nanoid();
      const { taskName} =
        action.payload;

      const newTask = {
        id: taskId,
        taskName,
      };

      return {
        ...state,
        todos: [...state.todos, newTask],
      };
    },

    //---------Remove Todo ---------
    deleteTodo: (state, action) => {
      const UpdatedTodo = state.todos.filter((Item) => {
        return Item.id !== action.payload;
      });
      return {
        ...state,
        todos: UpdatedTodo,
      };
    },

    //-------Edit Todo -----------
    editTodo: (state, action) => {
      console.log(state);
      const { id, data } = action.payload;
      const updatedTodo = state.todos.map((item) => {
        return item.id === id ? { ...item, taskName: data } : item;
      });
      return {
        ...state,
        todos: updatedTodo,
      };
    },
      
      //-------Toggle -----------
    toggleTodoStatus: (state, action) => {
      const { id } = action.payload; 
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted, 
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    },
    
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodoStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
