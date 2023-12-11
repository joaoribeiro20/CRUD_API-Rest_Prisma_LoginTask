class Task {
  id?: string;
  title: string;
  description: string;
  categories: string;
  statu?: boolean;
  authorId: string;
  tasks?: []

  private constructor({  title, description, categories, statu, authorId }: Task) {
      this.title = title;
      this.description = description;
      this.categories = categories;
      this.statu = statu;
      this.authorId = authorId;
    };
  

  static create({ title, description, categories, statu, authorId }: Task) {
    const task = new Task({ title, description, categories, statu, authorId });
    return task;
  }
}

export { Task };