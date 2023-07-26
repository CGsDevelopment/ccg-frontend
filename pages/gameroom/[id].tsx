import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { GetStaticPaths, GetStaticProps } from 'next';

import * as io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

export default function Room() {
    const router = useRouter();
    const { id } = router.query;

    const [joined, setJoined] = useState(false);

    const [message, setMessage] = useState("");
    const [msgReceived, setMsgReceived] = useState("");

    useEffect(() => {
        if (!joined) {
            socket.emit("join_room", id);
            setJoined(true);
        }

        socket.on("receive_message", (data) => {
            setMsgReceived(data);
        })
    }, [socket]);

    const sendMessage = () => {
        socket.emit("send_message", {message, room: id});
        setMessage('');
    }

    return (
        <>
            <h1>Game Room: {id}</h1>
            <input placeholder='Message...' value={message} onChange={(e) => {
				setMessage(e.target.value);
			}} />
			<button onClick={sendMessage}>Send Message</button>
			<h1>Message: </h1>
			{msgReceived}
        </>
    )
}

// export const getStaticProps: GetStaticProps<{test:string}> = () =>{
//     return { props: {test:"sth"} };
// }

// export const getStaticPaths: GetStaticPaths = async () => {

//     return {
//         paths: [ {params: {id:'coup'}} ],
//         fallback: false
//     }
// }

// export async function getServerSideProps() {

// }

