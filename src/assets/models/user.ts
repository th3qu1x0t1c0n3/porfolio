
export interface IUser {
    id: number;
    username: string;
    token: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserRegister {
    email: string;
    username: string;
    password: string;
}

export interface IGameUser {
    email: string;
    username: string;
    password: string;
}

class GameUser implements IGameUser {
    isLogged: boolean;
    email: string;
    username: string;
    password: string;

    constructor() {
        this.isLogged = false;
        this.email = "";
        this.username = "";
        this.password = "";
    }

    public init(email: string, username: string, password: string) {
        this.isLogged = true;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
export default GameUser;