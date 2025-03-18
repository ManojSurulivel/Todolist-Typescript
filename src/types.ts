// src/types.ts
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export type AddTodo = (text: string) => void;
  export type ToggleTodo = (id: number) => void;
  export type DeleteTodo = (id: number) => void;