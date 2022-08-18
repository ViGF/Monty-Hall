import styles from '../styles/Cartao.module.css'

interface CartaoProps {
    bgColor?: string
    children?: JSX.Element
}

export default function Cartao({ bgColor, children }: CartaoProps) {
    return (
        <div
            className={styles.cartao}
            style={{
                backgroundColor: bgColor ?? '#fff'
            }}
        >
            { children }
        </div>
    )
}