import { useRouter } from "next/router"


export default function Card({ card }) {
  const router = useRouter()
  return (
    <div className="mx-auto w-[200px] mt-20">
        <button className="absolute left-[1%] top-[1%] text-blue-400 w-[5%] h-[10%] bg-black rounded-full" onClick={() => router.push('/')}>
            Back
        </button>
        <p>{card._id}</p>
        <p>{card.number}</p>
        <p className='mb-[40px]'>{card.balance}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:3000/api/cards')
    const cards = await response.json()

    const paths = cards.map(elem => ({params: {id: elem._id}}))

    return {paths, fallback: 'blocking'}
}

export const getStaticProps = async ({ params }) => {
    console.log(params)
    const response = await fetch(`http://localhost:3000/api/cards/${params.id}`)
    const card = await response.json()

    return {
        props: {
            card
        },
        revalidate: 10
    }
}


