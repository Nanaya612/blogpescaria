import { getPopularArticle } from "@/Api/artigos"
import List from "../../components/List"
import Title from "@/app/components/Title"

export const revalidate = 120;

const ArtigosNovos = async() => {
    const artigosNovos = await getPopularArticle()
    return(
        <>
            <Title title={"Em Alta"}/>
            <List artigos={artigosNovos}></List>
        </>
    )
}
export default ArtigosNovos