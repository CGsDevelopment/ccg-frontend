import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.scss';

function App() {
    const router = useRouter();
    const [roomCode, setRoomCode] = useState("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRoomCode(e.target.value.toUpperCase());
    }

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        e.preventDefault();
        if (e.nativeEvent.submitter === null) {
            return console.warn("Submitter is null");
        }
        switch (e.nativeEvent.submitter.id) {
            case "join":
                // check if room exists
                // ## code here ##
                // go to room
                router.push(`/${roomCode}`);
                break;
            case "create":
                // check if room exists
                // create room if none exists
                router.push(`/TEMP`);
                break;
        }
    }

    return (
        <div className={styles.container}>
            <title>Coup</title>
            <h1 className={styles.title}>
                Coup
            </h1>
            <form className={styles.body} onSubmit={handleSubmit}>
                <input className={styles.input} maxLength={4} value={roomCode} onChange={handleInputChange} />
                <button id="join" className={styles.button} disabled={roomCode.length !== 4}>
                    Join Room
                </button>
                <button id="create" className={styles.button}>
                    Create Room
                </button>
            </form>
        </div>
    );
}
 
export default App;