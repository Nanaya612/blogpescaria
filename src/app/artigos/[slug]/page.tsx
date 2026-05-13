import { getArticleDetails, getArticles } from "@/Api/artigos"
import NotFound from "../../not-found"
import styles from "./DetalhesArtigo.module.css"
import Link from "next/link"

type Props = {
    params: Promise<{
        slug: string
    }>
}
export async function generateStaticParams() {
    const posts = getArticles()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

export const generateMetadata = async ({params}:Props) => {
    const {slug} = await params
    const Details =  getArticleDetails(slug)
    if(!Details)
        return NotFound()
    return {
        title: `${Details.title} | Blog Pesca`,
        description: Details.content
    }
}

const ContentArtigo = async({params}:Props) => {
    const {slug} = await params
    const Details =  getArticleDetails(slug)
    if(!Details)
        return NotFound()
    const {content, title, author, release_date} = Details

    return(
        <div className={styles.article}>
            <div className={styles.article__container}>
                <Link className={styles.article__link} href="/"><p className={styles.article__link_text}>Voltar</p></Link>
                <div className={styles.article__header}>
                    <p>{author}</p>
                    <p>{release_date[0]+'/'+release_date[1]+'/'+release_date[2]}</p>
                </div>
                <h2 className={styles.article__title}>{title}</h2>
                <p className={styles.article__content}>{content}</p>
            </div>
        </div>
    )
}
export default ContentArtigo