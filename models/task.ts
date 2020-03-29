import { ITask } from '@/boundary/books/InOutType'
export default class Task implements ITask {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(id: number, title: string, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}