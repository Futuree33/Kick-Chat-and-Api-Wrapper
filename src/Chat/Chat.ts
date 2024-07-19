import Rest from "../Rest/Rest";
import Pusher from "pusher-js";
import ConnectionManager from "../ConnectionManger";

export type Callback = (message: Message) => void

export type ChatMessage = {
    id: string
    content: string,
    sender: {
        id: string,
        username: string,
    }
}

export class Message extends Rest {

    constructor(public message: ChatMessage) {
        super();
    }
}

export type Command = {
    command: string,
    callback: (message: Message) => void
}

export default class Chat {

    private pusher = new Pusher("32cbd69e4b950bf97679", {
        cluster: "us2",
    });

    private commands: Command[] = []
    private prefix: string = "?"
    private channel = this.pusher.subscribe(`chatrooms.${ConnectionManager.getInstance().getConnection().chatroom}.v2`)

    public onMessage(callback: Callback) {
        this.channel.bind("App\\Events\\ChatMessageEvent", (chatMessage: ChatMessage) => {
            const message = new Message(chatMessage);

            if (!chatMessage.content.startsWith(this.prefix)) {
                return callback(message);
            }

            for (let command of this.commands) {
                if (chatMessage.content.includes(this.prefix + command.command)) {
                    return command.callback(message)
                }
            }
        })
    }


    public onMessageDeleted(callback: Callback) {}

    public setPrefix(prefix: string): void {
        this.prefix = prefix
    }

    public registerCommands(commands: Command[]) {
        this.commands = commands
    }

}