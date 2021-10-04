import Head from 'next/head'
import { useRouter } from "next/dist/client/router"
import Header from "../components/Header"
import SearchReasults from "../components/SearchReasults"
import { API_KEY, CONTEXT_KEY } from "../keys"

const search = ({ results }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>
            
            <Header />
            <SearchReasults results={results} />
        </>
    )
}

export default search


export async function getServerSideProps(context) {
    const startIndex = context.query.start || '0';

    const data = await fetch (
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());

    return {
        props: {
            results: data
        }
    }
}