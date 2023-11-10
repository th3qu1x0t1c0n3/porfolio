
export interface IUser {
    id: number;
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
    email: string;
    username: string;
    password: string;

    constructor() {
        this.email = "";
        this.username = "";
        this.password = "";
    }

    public init(email: string, username: string, password: string) {
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public getEmail(): string {
        return this.email;
    }

}
export default GameUser;