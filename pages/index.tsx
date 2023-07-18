import head from 'next/head';
import styles from '../styles/Home.module.scss';

function App() {
    return (
        <div className={styles.container}>
            <title>Coup</title>
            <h1 className={styles.title}>
                Coup
            </h1>
            <body className={styles.body}>
                <input className={styles.input} />
                <div className={styles.button}>
                    <p className={styles.buttonText}>Join Room</p>
                </div>
                <div className={styles.button}>
                    <p className={styles.buttonText}>Create Room</p>
                </div>
            </body>
        </div>
    );
}
 
export default App;