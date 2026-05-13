import { getPopularArticle } from "@/Api/artigos"
import List from "../../components/List"
import Title from "@/app/components/Title"

export const dynamic = 'force-dynamic'

const ArtigosNovos = () => {
    const artigosNovos = getPopularArticle()
    return(
        <>
            <Title title={"Em Alta"}/>
            <List artigos={artigosNovos}></List>
        </>
    )
}
export default ArtigosNovos