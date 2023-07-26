import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

// import * as io from 'socket.io-client';

// const socket = io.connect('http://localhost:3001');

export default function GameRoom() {
    const router = useRouter();
    const [room, setRoom] = useState("");

    const joinRoom = () => {
        if (room !== '') {
            // check with database if room is created or not
            router.push(`/gameroom/${room}`);
        }
    }

    return (
        <>
            <h1>Welcome to Coup Card Game!</h1>
            <input placeholder="Room Number..."
                onChange={(e) => {
                    setRoom(e.target.value);
                }} />
            <button onClick={joinRoom}>Join</button>
        </>
    );
}