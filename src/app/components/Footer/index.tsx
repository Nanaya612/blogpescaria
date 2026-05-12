import Link from "next/link"
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <h3 className={styles.footer__contato}>Contatos</h3>
            <ul className={styles.footer__list}>
                <li><Link href="#" className={styles.footer__link}>Twitter/X</Link></li>
                <li><Link href="#" className={styles.footer__link}>YouTube</Link></li>
                <li><Link href="#" className={styles.footer__link}>Instagram</Link></li>
            </ul>
        </footer>
    )
}
export default Footer