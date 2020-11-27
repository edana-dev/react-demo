import React, {ChangeEvent, useState} from "react";

export interface MessageListProps {
    messages: string[];
}

const MessageList = (props: MessageListProps = {messages: []}) => {
    props = props || []
    return (
        <ul>
            {props.messages.map(m => (
                <li>{m}</li>
            ))}
        </ul>
    )
}

const ChatApp = () => {
    const initialMessages: string[] = [];
    const [messages, setMessages] = useState(initialMessages);
    const [text, setText] = useState("");
    const onInput = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    const onSend = () => {
        let ms = [...messages, text];
        setMessages(ms)
    }
    return (
        <div>
            <MessageList messages={messages}/>
            <div>
                <input value={text} onChange={onInput} onSubmit={onSend}/>
                <button onClick={onSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatApp;