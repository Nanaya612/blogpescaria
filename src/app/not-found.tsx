import Link from "next/link"
import styles from "./not-found.module.css"


const NotFound = () =>{
    return(
        <div className={styles.notfound}>
            <div className={styles.notfound__container}>
                <h1>Ops! Pagina ou Artigo não encontrado por gentileza tente outra hora!</h1>
                <Link className={styles.notfound__link} href="/"><p className={styles.notfound__link__text}>Voltar para Pagina Inicial</p></Link>
            </div>
        </div>
    )
}

export default NotFound