import React, { useState } from "react";
import "../../../../css/ChatRoomPage.css";

export const Chat = () => {
    const [messageText, setMessageText] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
    return (
        <div className="chat_container">
            <div
                className="chat_input_wrapper"
                style={{
                    width: "90%",
                    height: 50,
                    backgroundColor: "smokewhite",
                    borderRadius: 15,
                    marginInline: "auto",
                    alignSelf: "flex-end",
                }}
            >
                <div
                    className="chat_input"
                    style={{ display: "flex", position: "relative", zIndex: 2 }}
                >
                    <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        style={{ width: "80%" }}
                    />
                    <button
                        style={{ width: "20%" }}
                        onClick={() => {
                            if (messageText === "") return;
                            setMessages((oldMessages) => [
                                ...oldMessages,
                                messageText,
                            ]);
                            setMessageText("");
                        }}
                    >
                        Send
                    </button>
                </div>
                <div
                    className="messages_container"
                    style={{
                        width: "90%",
                        height: "85%",
                        backgroundColor: "white",
                        position: "absolute",
                        top: "5%",
                        left: "5%",
                        zIndex: 0,
                        overflowY: "scroll",
                    }}
                >
                    {messages.map((message, id) => {
                        return <h1 key={id}>{message}</h1>;
                    })}
                </div>
            </div>
        </div>
    );
};