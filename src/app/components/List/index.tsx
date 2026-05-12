import { Article } from "@/types/types"
import Articles from "../Articles"
import styles from "./List.module.css"

type Props = {
    artigos: Article[]
}

const List = ({artigos}:Props) => {
    
    return(
        <ul className={styles.list}>
            {artigos?.map(artigo => <Articles key={artigo.id} artigo={artigo}/>)}
        </ul>
    )
}

export default List