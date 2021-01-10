import type { Todo } from './index';
import axios from 'axios';

const todoFetcher = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

class TodoService {
  async fetchTodos(): Promise<Todo[] | Error> {
    try {
      const { data } = await todoFetcher({
        method: 'GET',
        url: '/todos',
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  async postTodo(payload: Todo): Promise<Todo | Error> {
    try {
      const { data } = await todoFetcher({
        method: 'POST',
        url: '/todos',
        data: payload,
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  async patchTodo(payload: Partial<Todo>) {
    try {
      const { data } = await todoFetcher({
        method: 'PATCH',
        url: `/todos/${payload.id}`,
        data: payload,
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  async removeTodo(payload: Partial<Todo>) {
    try {
      const { data } = await todoFetcher({
        method: 'DELETE',
        url: `/todos/${payload.id}`,
      });
      return data;
    } catch (error) {
      return error;
    }
  }
}

const todoService = new TodoService();

export default todoService;
