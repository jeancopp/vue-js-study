import FotoModel from './FotoModel.js';

export default class CasdastroFotoService{

    constructor(args){
        this.foto = args.foto;
        this.listagem = args.listagem;
    }

    init(context){
        if(this.foto && this.foto.id){
            this.listagem.retornar(this.foto.id, f => context.foto = new FotoModel(f))
        }
        this.http = context.$http;
    }
    salvar(foto){
        let ehAtualizacao = foto._id;
        let uri = `http://localhost:3000/v1/fotos/${ehAtualizacao ? foto._id : "" }`
        return ehAtualizacao ? this.http.put(uri, JSON.stringify(foto) ) : this.http.post(uri, JSON.stringify(foto) );
    }

}