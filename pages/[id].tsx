import { useRouter } from 'next/router'
import { useState } from 'react';
import styles from '../styles/Gameroom.module.scss'
 
export default function Page() {
    const router = useRouter()
    const roomCode = router.query.id;
    const [gameStarted, setGameStarted] = useState(false);
    const [name, setName] = useState("");

    function handleNameChange(e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string },
        }
        setName(target.name.value.toUpperCase());
        // add name to list of players
    }

    if (name.length === 0) {
        return (
            <form className={styles.container} onSubmit={handleNameChange}>
                <p className={styles.title}>Name</p>
                <input id="name"  className={styles.input} maxLength={12} />
                <button className={styles.button}>
                    Continue
                </button>
            </form>
        )
    }

    if (gameStarted) {
        return (
            <div>
                <p>Room Code: {roomCode}</p>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <p>Room Code: {roomCode}</p>
                <p>Players Joined:</p>
                <p>{name}</p>
            </div>
        )
    }
}