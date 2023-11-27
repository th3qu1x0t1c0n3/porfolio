import {serverInstance} from "../../App";
export interface IMessage {
    name: string;
    email: string;
    number: string;
    message: string;
}

export class PortfolioService {
    async message(message: IMessage): Promise<string> {
        return serverInstance.post('user/message', message)
            .then((response) => {
                return response.data;
            })
    }
}