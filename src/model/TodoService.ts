import type { Todo } from './index';
import axios from 'axios';
import { renderer } from '../index';

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
      renderer.createModal(
        `네트워크 에러입니다 다시 시도해주세요. 비동기처리 중 이슈에 대한 상태관리와 대응이 중요합니다. 이 고민에서 자연스럽게 redux-saga의 아이디어가 나오는 군요!`,
      );
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
