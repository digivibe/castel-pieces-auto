import { useRouter } from 'next/router'
import Head from 'next/head'
import { APP_NAME } from '@/data/config'
import { article } from '@/data/article'
import Theme2 from '@/layouts/Theme2'
import Article from '@/components/Article'

export default function ArticlePage({ foundArticle }) {
    const router = useRouter()
    const { slug } = router.query

    if (!router.isFallback && !slug) {
        return <div>Loading...</div>
    }

    if (!foundArticle) {
        return (
            <>
                <Head>
                    <title>404 - Page Not Found</title>
                </Head>
                <div>404 - Page Not Found</div>
            </>
        )
    }

    return (
        <>
            <Theme2>
                <Head>
                    <title>{`${foundArticle.title} - ${APP_NAME}`}</title>
                </Head>
                <Article data={foundArticle} />
            </Theme2>
        </>
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