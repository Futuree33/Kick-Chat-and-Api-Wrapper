import Chat from "./Chat/Chat";
import ConnectionManager, {Connection} from "./ConnectionManger";
import Rest
    from "./Rest/Rest";


export default class Kick {

    public chat: Chat;
    public rest: Rest;

    constructor(connection: Connection) {
        ConnectionManager.initialize(connection);
        this.chat = new Chat();
        this.rest = new Rest();
    }
}