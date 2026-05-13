import { getNewArticle } from "@/Api/artigos"
import List from "../../components/List"
import Title from "@/app/components/Title"

export const dynamic = "force-dynamic"

const ArtigosNovos = () => {
    const artigosNovos = getNewArticle()
    
    return(
        <>
            <Title title={"Novos Artigos"}/>
            <List artigos={artigosNovos}></List>
        </>
    )
}
export default ArtigosNovos