function Pessoa() {
    this.idade = 0

    const self = this
    set4(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa
