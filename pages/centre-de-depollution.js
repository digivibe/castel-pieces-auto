import { useEffect } from 'react'
import { useRouter } from 'next/router'

const CentreDeDepollution = () => {
    const router = useRouter()

    useEffect(() => {
        router.replace('/centre-de-depollution.html')
    }, [router])

    return null
}

export default CentreDeDepollution