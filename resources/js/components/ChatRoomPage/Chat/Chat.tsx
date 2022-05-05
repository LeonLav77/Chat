import React, { useState } from "react";
import "../../../../css/ChatRoomPage.css";
import Axios from "axios";
export const Chat = () => {
    const [messageText, setMessageText] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
    function register(){
        Axios.post("http://127.0.0.1:8000/auth/register", {
            name: "test",
            password: "testtess",
            password_confirmation: "testtess",
            email: "test@gmail.com",
        }).then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        });
    };
    function login(){
        Axios.post("http://127.0.0.1:8000/auth/login", {
            password: "testtess",
            email: "test@gmail.com",
        }).then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        });
    };
    function logout(){
        Axios.post("http://127.0.0.1:8000/auth/logout").then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        });
    };
    function sendMessage(message: string) {
        console.log(message);
        // ajax call to send message to server
        Axios.post("http://127.0.0.1:8000/api/sendMessage", {
            message: message
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };
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
                            sendMessage(messageText);
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
            <div>
                {/* button that call function register */}
                <button onClick={() => {
                    // call function register
                    register();
                }}>
                    Register
                </button>
            </div>
            <div>
                {/* button that call function register */}
                <button onClick={() => {
                    // call function register
                    login();
                }}>
                    login
                </button>
            </div>
            <div>
                {/* button that call function register */}
                <button onClick={() => {
                    // call function register
                    logout();
                }}>
                    logout
                </button>
            </div>
        </div>
    );
};