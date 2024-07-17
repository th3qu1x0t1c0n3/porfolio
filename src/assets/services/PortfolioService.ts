import {serverInstance} from "../../App";
import {Message} from "../models/message";

export class PortfolioService {
    async message(message: Message): Promise<string> {
        const tmp = message;
        message.message = "Portfolio app:\n" + message.message;
        return serverInstance.post('api/v1/utils/contact', message)
            .then((response) => {
                return response.data;
            })
    }
}