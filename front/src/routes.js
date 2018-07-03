
import Home from "./modulos/compartilhados/Home";
import CadastroFoto from "./modulos/cadastro-foto/CadastroFoto";
import CadastroFotoFormulario from "./modulos/cadastro-foto/CadastroFotoFormulario"

export const routes = [
    { "name":"inicial", "path" : "/" , "component" : Home, "desc" : "Pagina Inicial", show : true}
   ,{ "name":"cadastro-foto", "path" : "/cadastros/foto" , "component" : CadastroFoto, "desc" : "Cadastro de Fotos", show : true}
   ,{ "name":"cadastro-foto-nova", "path" : "/cadastro/foto/novo" , "component" : CadastroFotoFormulario, "desc" : "Cadastro de Fotos", show : false}
   ,{ "name":"cadastro-foto-alterar", "path" : "/cadastro/foto/:id"  , "component" : CadastroFotoFormulario, "desc" : "Cadastro de Fotos", show : false}
];