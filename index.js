const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando handlebatrs como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

// os arquivos publicos ficarao na pasta public
app.use(express.static("public"))

app.get('/',(requisicao, resposta) => {
    resposta.render('home')
})

app.listen(3000, () => {
    console.log("Servidor na porta 3000! ")
})