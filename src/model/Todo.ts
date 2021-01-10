import { v4 as uuidv4 } from 'uuid';

class Todo implements Todo {
  public readonly id: string = uuidv4();
  public readonly _createdAt: string = new Date().toISOString();
  public readonly _updatedAt: string = new Date().toISOString();
  public completed: boolean = false;
  constructor(public content: string) {}
}

export default Todo;
