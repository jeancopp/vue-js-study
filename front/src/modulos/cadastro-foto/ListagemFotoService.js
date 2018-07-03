export default class ListagemFotoService{

    constructor($http){
        this._http = $http;
    }

    listar(callback){
        this._http.get("http://localhost:3000/v1/fotos")
            .then( r => r.json() )
            .then( callback )
            .catch( e => console.log(e) );
    }

    retornar(id, callback){
        this._http.get(`http://localhost:3000/v1/fotos/${id}`)
            .then( r => r.json() )
            .then( callback )
            .catch( e => console.log(e) );  
    }
};