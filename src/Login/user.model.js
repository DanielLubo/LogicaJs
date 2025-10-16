import { v4 as uuid } from "uuid";

export class User {
    #id;
    #email;
    #userName;
    #password;

    constructor( email, userName, password){
        this.#id = uuid();
        this.#email = email;
        this.#userName = userName;
        this.#password = password;
    }

    /**
     * Verificar si la contrasena ingresada por el usuario coincide con la contrasena almacenada
     * @param {String} inputPassword - Contrasena ingresada por el Usuario
     * @returns {Boolean} - True si la contrasena es correcta, false en caso contrario.
     */
    checkPassword( inputPassword ){
        return inputPassword === this.#password;
    }

    get email(){
        return this.#email;
    }

    get userName(){
        return this.#userName;
    }

    get infoUser(){
        return {
            id: this.#id,
            email: this.#email,
            userName: this.#userName,
        }
    }

    set userName( newUserName ){
        if(newUserName.length < 3){
            throw new Error('El nombre de usuario debe tener al menos 3 caracteres.');
        }
        this.#userName = newUserName;
    }

    set email( newEmail ){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(newEmail)){
            throw new Error('Formato de email no valido.');
        }
        this.#email = newEmail;
    }

    set password( newPassword ){
        if(newPassword.length < 5){
            throw new Error('La nueva contrasena debe tener al menos 5 caracteres.');
        }
        this.#password = newPassword;
    }
}
