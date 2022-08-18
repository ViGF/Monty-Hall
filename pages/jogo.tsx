import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from '../functions/portas'
import styles from '../styles/Jogo.module.css'

export default function Jogo() {
    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(true)

    const router = useRouter()

    useEffect(() => {
        fetchParametros()
    }, [])

    async function fetchParametros() {
        const resp = await fetch('/api/params')
        const parametros = await resp.json()

        const portas = parametros.qtdePortas
        const temPresente = parametros.portaComPresente

        const portasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >=1 && temPresente <= portas

        setValido(portasValidas && temPresenteValido)
        setPortas(criarPortas(portas, temPresente))
    }

    function renderizarPortas() {
        return valido && portas.map((porta) => {
            return <Porta
                key={porta.numero}
                value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas() : <h1>Valores Inválidos</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href='/'>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}