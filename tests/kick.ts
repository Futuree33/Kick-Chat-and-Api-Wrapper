import Kick from "../src";
import {
    Message
} from "../src/Chat/Chat";

const kick = new Kick({
    chatroom: "",
    authorization: "",
    xsrfToken: "",
    cookie: ""
});


kick.chat.setPrefix("/")

function test(msg: Message) {
    msg.reply("Working!")
}


function time(msg: Message) {
    msg.reply(new Date().toLocaleTimeString())
}

kick.chat.registerCommands([
    {
        command: "test",
        callback: test
    },
    {
        command: "time",
        callback: time
    }
])

kick.chat.onMessage((msg) => {

})