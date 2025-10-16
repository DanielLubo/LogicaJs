import { User } from "./user.model.js";

export class UserService {
    constructor() {
        this.users = [];
    }

    registerUser(email, userName, password){
        const exists = this.users.find(user => user.email === email);
        if(exists){
            throw new Error('El email ya se encuentra registrado.');
        }

        const newUser = new User (email, userName, password);
        this.users.push(newUser);
        return newUser.infoUser;
    }

    loginUser(email, password){
        const findUser = this.users.find(user => user.email === email);
        if(!findUser || !findUser.checkPassword(password)){
            throw new Error('Email o Contrasena no validos.');
        }
        return 'Inicio de sesion exitoso';
    }

    findUser(email){
        const findUser = this.users.find(user => user.email === email);
        if(!findUser){
            throw new Error('No se ha encontrado al usuario.')
        }
        return findUser;
    }

    updateEmail(email, newEmail){
        const emailExist = this.users.some(user => user.email === newEmail);

        if(emailExist){
            throw new Error('El nuevo Email ya esta en uso');
        }

        const userToUpdate = this.findUser(email);
        userToUpdate.email = newEmail;
        return userToUpdate.infoUser;
    }

    updateUserName(email, newUserName){
        const nameIsTaken = this.users.some(
            user => user.userName === newUserName && user.email !== email
        );

        if(nameIsTaken){
            throw new Error('El nuevo nombre de usuario ya esta en uso');
        }

        const userToUpdate = this.findUser(email);
        userToUpdate.userName = newUserName;
        return userToUpdate.infoUser;
    }

    updatePassword(email, newPassword){
        const userToUpdate = this.findUser(email);

        if(userToUpdate.checkPassword(newPassword)){
            return userToUpdate.infoUser;
        }

        userToUpdate.password = newPassword;
        return userToUpdate.infoUser;
    }
}