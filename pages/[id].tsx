import { useRouter } from 'next/router'
 
export default function Page() {
    const router = useRouter()

    return <p>Room Code: {router.query.id}</p>
}