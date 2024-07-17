export interface IMessage {
    userid: string
    name: string
    email: string
    telephone: string
    message: string
}

export interface IMessageGet {
    error: string,
    data: IMessage[]
}

export class Message {
    userid: string
    name: string
    email: string
    phoneNumber: string
    message: string

    constructor(userid: string, name: string, email: string, phoneNumber: string, message: string) {
        this.userid = userid
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.message = message
    }

    reset() {
        this.userid = ""
        this.name = ""
        this.email = ""
        this.phoneNumber = ""
        this.message = ""
    }

    setUserId(userid: string) {
        this.userid = userid
    }
    setName(name: string) {
        this.name = name
    }
    setEmail(email: string) {
        this.email = email
    }
    setTelephone(telephone: string) {
        this.phoneNumber = telephone
    }
    setMessage(message: string) {
        this.message = message
    }
}