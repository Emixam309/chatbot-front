import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.box}>
        <div>Message 1</div>
        <div>Message 2</div>
        <div>Message 3</div>
          <input className={styles.input} type="text" placeholder="Posez votre question" />
          <button className={styles.button}>Envoyer</button>
      </div>
    </div>
  )
}