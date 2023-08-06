import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import cardBack from '../public/card_back.png';
import styles from '../styles/Gameroom.module.scss';

interface Player {
    name: string;
    ready: boolean;
}
 
export default function Page() {
    const router = useRouter()
    const roomCode = router.query.id;
    const [gameStarted, setGameStarted] = useState(false);
    const [name, setName] = useState("");
    const [players, setPlayers] = useState<Player[]>([]) // temp object to fill UI

    const selfInfo = players.find(value => value.name === name);

    useEffect(() => {
        if (localStorage.player_name !== undefined) {
            // fetch existing players data from server
            setName(localStorage.player_name);
            setPlayers([{ name: localStorage.player_name, ready: false }]);
        }
    }, []);

    function handleNameChange(e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string },
        }
        const newName = target.name.value.toUpperCase();
        localStorage.setItem("player_name", newName);
        setName(newName);
        setPlayers((state) => {
            const newState = [...state, { name: newName, ready: false }];
            return newState;
        })
        // add name to list of players
    }

    function updateReadyStatus() {
        setPlayers((oldPlayers) => {
            const newPlayers = [...oldPlayers];
            if (selfInfo !== undefined) {
                selfInfo.ready = !selfInfo.ready;
            }
            return newPlayers;
        })
        // temp fix to test UI, later only setGameStarted after detecting all players are ready
        setPlayers((state) => {
            const newState = [
                ...state, 
                { name: "MARIO", ready: true },
                { name: "BETTY", ready: true },
                { name: "DAVID", ready: true },
                { name: "APRIL", ready: true },
            ];
            return newState;
        })
        setGameStarted(true);
    }

    if (selfInfo === undefined) {
        return (
            <form className={styles.lobbyContainer} onSubmit={handleNameChange}>
                <p className={styles.title}>Name</p>
                <input id="name" className={styles.input} maxLength={12} />
                <button type="submit" className={styles.button}>
                    Continue
                </button>
            </form>
        )
    }

    if (!gameStarted) {
        return (
            <div className={styles.lobbyContainer}>
                <p>Room Code: {roomCode}</p>
                <p>Players Joined:</p>
                {players.map((player, index) => (
                    <p key={index}>{player.name} - {players[index].ready ? "Ready" : "Not Ready"}</p>
                ))}
                <button className={styles.button} onClick={updateReadyStatus}>
                    {selfInfo?.ready ? "Ready" : "Not Ready"}
                </button>
            </div>
        )
    } else {
        return (
            <div className={styles.gameroomContainer}>
                <nav className={styles.navbar}>
                    <p className={styles.navbarItemContainer}>Rules</p>
                    <div style={{ flex: 1 }} />
                    <p className={styles.navbarItemContainer}>Room Code: {roomCode}</p>
                </nav>
                
                <div className={styles.playersContainer}>
                    {players.map((player, index) => (
                        player.name !== name ? <PlayerInfo key={index} player={player} /> : null
                    ))}
                </div>

                {/* <div className={styles.deckContainer}>
                    <p style={{ paddingLeft: 5, marginBottom: 10 }}>Deck:</p>
                    <Image src={cardBack} width={150} height={210} alt="Card back" />
                </div> */}

                <div className={styles.selfContainer}>
                    <div className={styles.selfInfoContainer}>
                        <p>Not your turn yet. Chill!</p>
                        <p>{selfInfo.name}</p>
                        <p>Coins: 2</p>
                        <Image className={styles.cardBack} src={cardBack} width={100} height={140} alt="Card back" />
                        <Image className={styles.cardBack} src={cardBack} width={100} height={140} alt="Card back" />
                        <p>Your last action:</p>
                        <p>Nothing</p>
                    </div>
                    <div className={styles.actionsContainer}>
                        <h3>General Actions</h3>
                        <p className={styles.actionButton}>$ Income: +1 coin</p>
                        <p className={styles.actionButton}>$ Foreign Aid: +2 coins</p>
                        <p className={styles.actionButton}>$ Coup: -7 coins</p>
                    </div>
                    <div className={styles.actionsContainer}>
                        <h3>Character Actions</h3>
                        <p className={styles.actionButton}>Tax: +3 coins</p>
                        <p className={styles.actionButton}>Exchange: Swap 2 cards</p>
                        <p className={styles.actionButton}>Assassinate :knife:</p>
                        <p className={styles.actionButton}>Steal :hand:</p>
                    </div>
                </div>
            </div>
        )
    }
}

function PlayerInfo({ player }: { player: Player }) {
    return (
        <div className={styles.playerInfoContainer}>
            <p>Chilling or Plotting?</p>
            <p>{player.name}</p>
            <p>Coins: 2</p>
            <Image className={styles.cardBack} src={cardBack} width={50} height={70} alt="Card back" />
            <Image className={styles.cardBack} src={cardBack} width={50} height={70} alt="Card back" />
            <p>Last player action:</p>
            <p>Nothing</p>
        </div>
    )
}