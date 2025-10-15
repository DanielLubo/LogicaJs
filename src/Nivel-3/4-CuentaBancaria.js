// Propiedades: saldo. Métodos: depositar(), retirar(), consultarSaldo()

class CuentaBancaria {
    constructor(){
        this.saldo = 100000;
        this.tipoCuenta = 'Ahorros';
    }

    depositar(dinero){
        this.saldo += dinero;
        return ('Deposito realizado con exito');
    }

    retirar(dineroRetirar){
        if(this.saldo < dineroRetirar){
            throw new Error('Error: No hay fondos suficientes en la cuenta');
        } else {
            this.saldo -= dineroRetirar;
            return (`Retiro de $${dineroRetirar} realizado. Nuevo saldo: $${this.saldo}`);
        }
    }

    consultarSaldo(){
        return this.saldo;
    }
}