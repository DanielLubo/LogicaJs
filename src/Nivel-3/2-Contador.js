//  Clase con valor interno, métodos incrementar(), decrementar(), reset()


class contador {
    constructor( num) {
        this.numero = num || 0;
    }

    incrementar( numIncremento = 1 ){
        this.numero = this.numero + numIncremento;
    }

    decrementar( numDecrementar = 1 ){
        this.numero =  this.numero - numDecrementar
    }

    reset(){
        this.numero = 0;
    }

    getInfo() {
        return this.numero;
    }
}

const numero = new contador(10);
console.log('Valor inicial:', numero.getInfo());

numero.incrementar(8);
console.log('incrementar: ', numero.getInfo());
