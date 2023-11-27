import {serverInstance} from "../../App";
import {Message} from "../models/message";

export class PortfolioService {
    async message(message: Message): Promise<string> {
        return serverInstance.post('user/message', message)
            .then((response) => {
                return response.data;
            })
    }
}