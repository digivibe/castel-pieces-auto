import { useRouter } from 'next/router'
import { article } from '@/data/article'
import Article from '@/components/Article'

export default function ArticlePage() {
    const router = useRouter()
    const { slug } = router.query

    if (!router.isFallback && !slug) {
        return <div>Loading...</div>
    }

    const foundArticle = article.find(item => item.slug === slug)

    if (!foundArticle) {
        return <div>Article not found</div>
    }

    return (
        <div className="article-page-container">
            <Article title={foundArticle.title} />
        </div>
    )
}

export async function getStaticPaths() {
    const paths = article.map(item => ({
        params: { slug: item.slug }
    }))

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const foundArticle = article.find(item => item.slug === params.slug)

    if (!foundArticle) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            foundArticle,
        },
    }
}