import { Article } from "@/types/types"
import Link from "next/link"
import styles from "./Articles.module.css"

type Props = {
    artigo:Article
}

const Articles = ({artigo}:Props) => {
   const {author, content, id, release_date, title} = artigo
   const resume = content.length > 201 ? `${content.substring(0,200)}...` : content;
    
    return(
        <li key={id} className={styles.article}>
            <Link className={styles.article__link} href={'/artigos/'+id}>
                <div>
                    <h1 className={styles.article__title}>{title}</h1>
                    <p className={styles.article__description}>{resume}</p>
                </div>
                <div className={styles.article__footer}>
                    <p>Por: {author}</p>
                    <p>{release_date[0]+'/'+release_date[1]+'/'+release_date[2]}</p>
                </div>
            </Link>
        </li>
    )
}
export default Articles