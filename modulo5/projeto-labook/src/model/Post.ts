export enum POST_ROLE {
  NORMAL = 'NORMAL',
  EVENT = 'EVENT',
}

export class Post {
  constructor(
      private id: string,
      private photo: string,
      private description:string,
      private creationDate: Date,
      private type: POST_ROLE, 
      private criadorId_post : string
  ) {}
  
  public getId(): string {
    return this.id;
  }
  
  public getPhoto(): string {
      return this.photo;
  }

  public getDescription(): string {
      return this.description;
  }

  public getCreationDate(): Date {
    return this.creationDate
  }

  public getType(): POST_ROLE {
    return this.type;
  }

 public getCriadorIdPost():string {
  return this.criadorId_post;
 }
  
} 
//   //Cria um objeto de transferência de dados possibilitando a comunicação entre as camadas com um objeto fixo