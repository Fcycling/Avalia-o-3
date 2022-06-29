var sequelize = require("sequelize")

var conexao = new sequelize("servidoravaliacao","gustavo","12345678",{
    host: "servidoravaliacao.cysmzdamoc6d.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
})

conexao.authenticate().then(
    function(){
        console.log("Conectado ao banco com sucesso!")
    }
).catch(
    function(erro){
        console.log("Erro ao conectar com o banco: "+erro)
    }
)

module.exports = conexao