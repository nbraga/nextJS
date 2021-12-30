import Link from "next/link"
import styles from '../styles/Layout.module.css'


export default function Layout(props){
    return(
        <div className={styles.layout}>
            <div className=>

            </div>
            <Link href="/">Voltar</Link>
            {props.children}
        </div>
    )
}