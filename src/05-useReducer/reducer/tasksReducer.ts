import * as z from "zod/v4"

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


interface TaskState {
  todos: Todo[],
  length: number,
  completed: number,
  pending: number,
}

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean()
})

const TasksStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),

})

export const getTaskInitialState = (): TaskState => {
  const localState = localStorage.getItem('tasks-state');
  if (!localState) {
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    }
  }
  // validadacion

  const result = TasksStateSchema.safeParse(JSON.parse(localState));
  if(result.error){
    console.log(result.error)
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    }
  }
    

  return result.data
}


export type TaskAction =
  | { type: 'ADD_TODO', payload: string }
  | { type: 'TOGGLE_TODO', payload: number }
  | { type: 'DELETE_TODO', payload: number }

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.length + 1,
        pending: state.pending + 1,
      };
    }

    case 'DELETE_TODO': {
      const updateTodos = state.todos.filter((todo) => todo.id !== action.payload)
      return {
        ...state,
        todos: updateTodos,
        length: updateTodos.length,
        completed: updateTodos.filter((todo) => todo.completed).length,
        pending: updateTodos.filter((todo) => !todo.completed).length,
      }
    }

    case 'TOGGLE_TODO': {

      const updateTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
      return {
        ...state,
        todos: updateTodos,
        completed: updateTodos.filter((todo) => todo.completed).length,
        pending: updateTodos.filter((todo) => !todo.completed).length,
      }
    }
    default: return state

  }


}