'use client';
import { useState, useEffect } from "react"
import Spinner from "./Spinner";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await fetch('/api/messages');

                if (res.status === 200){
                    const data = await res.json;
                    setMessages(data);
                }
            } catch(err) {
                console.log('Error fetching messages: ', err);
            } finally {
                setLoading(false);
            }
        }

        getMessages();
    },[]);

  return (
    <div>Messages</div>
  )
}

export default Messages