import { Article } from "@/types/types"
import res from "./artigos.json"

export const getArticles = () => {
    const dados = res
    return dados
}
export const getArticleDetails = (slug:string) =>{
    const dados = res
    const dadosFiltrados = dados.find((dado:Article) => dado.slug == slug)
    return dadosFiltrados
}
export const getPopularArticle = () =>{
    const dados = res
    const dadosFiltrados = dados.filter((dado:Article) => dado.popular == true)
    return dadosFiltrados
}
export const getNewArticle =  () =>{
    const dados = res
    const dadosFiltrados = dados.filter((dado: Article) => {
        const indexMonth = dado.release_date[1];
        const indexYear = dado.release_date[2];
        const today = new Date();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        return indexMonth >= month-2 && indexMonth <= month && indexYear == year;
});

    return dadosFiltrados
}