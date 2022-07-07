export enum POST_ROLE {
  NORMAL = 'NORMAL',
  EVENT = 'EVENT',
}
export class Post {
  constructor(
      private id: string,
      private photo: string,
      private description:string,
      private creationDate: string,
      private type:POST_ROLE, 
      private criadorId_post : string
  ) {}

  public getphoto(): string {
      return this.photo;
  }

  public getdescription(): string {
      return this.description;
  }

  public getcreationDate(): string {
      return this.creationDate;
  }

  public getType(): POST_ROLE {
    return this.type;
}
  
} 
//   //Cria um objeto de transferência de dados possibilitando a comunicação entre as camadas com um objeto fixo