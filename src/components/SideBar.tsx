import styles from "../styles/components/SideBar.module.css"

export function SideBar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBarContent}>
                <div className={styles.sideBarContentTitle}>
                    <img src="icons/pokeball.png" alt=""/>
                    <h3><strong>PokeDex</strong></h3>
                </div>
                <div className={styles.sideBarContentButtons}>
                    <button type="button">Kanto</button>
                    <button type="button">Johto</button>
                    <button type="button">Hoenn</button>
                </div>
                <div className={styles.listPokemons}>
                    <ul>
                        <li>#1 Bulbasaur</li>
                        <li>#2 Ivysaur</li>
                        <li>#3 Venosaur</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}