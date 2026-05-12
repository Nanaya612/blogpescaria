import { Article } from "@/types/types"


export const getArticles = async() => {
    const res = await fetch(process.env.API_URL+'/artigos.json')
    const dados = await res.json()
    return dados
}
export const getArticleDetails = async (id:number) =>{
    const res =  await fetch(process.env.API_URL+'/artigos.json')
    const dados = await res.json()
    const dadosFiltrados = await dados.find((dado:Article) => dado.id == id)
    return dadosFiltrados
}
export const getPopularArticle = async () =>{
    const res =  await fetch(process.env.API_URL+'/artigos.json')
    const dados = await res.json()
    const dadosFiltrados = await dados.filter((dado:Article) => dado.popular == true)
    return dadosFiltrados
}
export const getNewArticle = async () =>{
    const res =  await fetch(process.env.API_URL+'/artigos.json')
    const dados = await res.json()
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