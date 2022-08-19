import { useEffect, useState } from "react";
import Link from 'next/link'
import { useAppContext } from '../hooks/Context';

import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from '../functions/portas'
import styles from '../styles/Jogo.module.css'

export default function Jogo() {
    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(true)

    const context = useAppContext();

    useEffect(() => {
        const portas = context.params.qtdePortas
        const temPresente = context.params.temPresente

        const portasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >=1 && temPresente <= portas

        setValido(portasValidas && temPresenteValido)
        setPortas(criarPortas(portas, temPresente))
    }, [context])

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