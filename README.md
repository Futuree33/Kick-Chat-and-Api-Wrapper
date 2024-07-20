# Kick-Chat-and-Api-Wrapper
A really nice kick wrapper with some api features added like send message and reply 



Connecting
```js
const kick = new Kick({
    chatroom: "", // the chatroom id of the kick chat you want to connect to 
    authorization: "", // your kick account authorization header
    xsrfToken: "", // your kick account csrf header
    cookie: "" // your kick cookie containing parts of the above and more
});
```

Commands

Prefix - You can set your command prefix using setPrefix
```js
kick.chat.setPrefix("?")
```

Registering Commands - You can set your command prefix using setPrefix

```js
kick.chat.registerCommands([
  {
    command: "hello", // the commands name, example "?hello
    callback: (msg) => msg.reply("Hello!") // the callback that will be called when the command is sent into chat
  }
])
```

On Message

```js
kick.chat.onMessage((msg) => {
  console.log(msg)
})
```
  
