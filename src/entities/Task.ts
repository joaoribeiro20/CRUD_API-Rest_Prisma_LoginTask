class Task {
  id?: string;
  title: string;
  description: string;
  categories: string;
  status: number;
  authorId: string;

  private constructor({  title, description, categories, status, authorId }: Task) {
      this.title = title;
      this.description = description;
      this.categories = categories;
      this.status = status;
      this.authorId = authorId;
    };
  

  static create({ title, description, categories, status, authorId }: Task) {
    const user = new Task({ title, description, categories, status, authorId });
    return user;
  }
}

export { Task };