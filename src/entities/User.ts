class User {
    id?: string;
    name: string;
    email: string;
    password: string;
    telefone: number;
    apelido: string;
    cep: number;
    task?: [];
    
  
    private constructor({ name, email, password, telefone, apelido, cep }: User) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.telefone = telefone;
        this.apelido = apelido;
        this.cep = cep;
        
     
    }
  
    static create({ name, email, password, telefone, apelido, cep }: User) {
      const user = new User({ name, email, password, telefone, apelido, cep});
      return user;
    }
  }
  
  export { User };