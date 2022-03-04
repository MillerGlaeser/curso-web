function tratarErroELancar(erro) {
    // throw new Error('...')
    //throw 10
    // throw time
    // throw 'mensagens'
    throw{
        nome: erro.name, 
        msg: erro.massage, 
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
         tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}
const obj = { nome: "Roberto"}
imprimirNomeGritado(obj)