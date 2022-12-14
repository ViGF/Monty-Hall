import Head from 'next/head';
import Link from 'next/link'
import { useState } from 'react';
import { useAppContext } from '../hooks/Context';

import Cartao from "../components/Cartao";
import EntradaNumerica from '../components/EntradaNumerica';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [temPresente, setTemPresente] = useState(1)

  const context = useAppContext();

  function enviarParametros() {
    context.setParams({qtdePortas, temPresente})
  }

  return (
    <div className={styles.home}>
      <Head>
        <title>Monty Hall</title>
        <meta name="description" content="Monty Hall, jogo das portas. Escolha a quantidade de portas e uma delas para possuir o presente" />
      </Head>
      <div>
        <Cartao bgColor='#c0392c'>
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text='Qtde Portas?'
            value={qtdePortas}
            onChange={novaQtde => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
      <Cartao>
          <EntradaNumerica text='Porta com Presente:'
            value={temPresente}
            onChange={novaPortaComPresente => setTemPresente(novaPortaComPresente)}
          />
        </Cartao>
        <Cartao bgColor='#28a085'>
          <Link href='/jogo'>
            <button onClick={enviarParametros} className={styles.link}>Iniciar</button>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
