export class Recipe {
    constructor(
        public id: string,
        public titulo : string,
        public descricao: string,
        public modo_de_preparo: string,
        public data_de_criacao: Date,
        public cadastro_id: string,
    ) {}

    public getId(): string {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getModo_de_Preparo(): string {
        return this.modo_de_preparo;
    }
    
    public getData_de_criacao(): Date {
        return this.data_de_criacao;
    }

    public getCadastro_id(): string {
        return this.cadastro_id;
    }

}