import styles from '../styles/pages/Home.module.css'

import {SideBar} from "../components/SideBar"
import Head from "next/head";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>PokeDex</title>
            </Head>

            <SideBar />
        </div>
    )
}
