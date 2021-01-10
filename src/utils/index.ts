import type { Todo } from '../model';

export function compareDate(a: Todo, b: Todo) {
  return Date.parse(b._createdAt) - Date.parse(a._createdAt);
}
