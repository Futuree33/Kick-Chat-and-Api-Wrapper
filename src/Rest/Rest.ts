import ConnectionManager from "../ConnectionManger";
import {ChatMessage} from "../Chat/Chat";
import axios from "axios";

export default class Rest {

    private connectionManager: ConnectionManager;
    protected message: ChatMessage | undefined;

    constructor() {
        this.connectionManager = ConnectionManager.getInstance();
    }

    public async reply(content: string | number) {
        const data = this.connectionManager.getConnection()

        const response = await axios.post(`https://kick.com/api/v2/messages/send/${data.chatroom}`, {
            content: content,
            type: "reply",
            metadata: {
                original_message: {
                    id: this.message?.id,
                    content: this.message?.id
                },
                original_sender: {
                    id: this.message?.sender.id,
                    username: this.message?.sender.username
                }
            }
        }, {headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "en-US",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Content-Type": "application/json",
                "X-Socket-ID": "233801.296622",
                "Authorization": data.authorization,
                "X-XSRF-TOKEN": data.xsrfToken,
                "Origin": "https://kick.com",
                "Connection": "keep-alive",
                "Referer": "https://kick.com",
                "Cookie": data.cookie,
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Priority": "u=1",
                "TE": "trailers"
            }})

        console.log(response.data)
    }

    public async sendMessage(content: string) {
        const data = this.connectionManager.getConnection()

        await axios.post(`https://kick.com/api/v2/messages/send/${data.chatroom}`, {
            content: content,
            type: "message",
        }, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "en-US",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Content-Type": "application/json",
                "X-Socket-ID": "233801.296622",
                "Authorization": data.authorization,
                "X-XSRF-TOKEN": data.xsrfToken,
                "Origin": "https://kick.com",
                "Connection": "keep-alive",
                "Referer": "https://kick.com",
                "Cookie": data.cookie,
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Priority": "u=1",
                "TE": "trailers"
            }
        })

    }
}