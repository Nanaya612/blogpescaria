import Link from "next/link"
import styles from "./Header.module.css"


const Header = () => {
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.header__title}>Blog Pesca</Link>
            <nav className={styles.header__nav}>
                <Link className={styles.header__link} href='/'><p className={styles.header__link_text}>Inicio</p></Link>
                <Link className={styles.header__link} href='/artigos/em-alta'><p>Assuntos em Alta</p></Link>
                <Link className={styles.header__link} href='/artigos/novos'><p>Artigos Novos</p></Link>
            </nav>

        </header>
    )
}

export default Header