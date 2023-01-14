import Meta from '@/app/utils/Meta'
import CradItem from '@/app/cards/CradItem'

export default function Home({ cards }) {

  return (
    <>
      <Meta title='Home' description='Page description' />
      <main className='w-1/4 mx-auto mt-20'>
        {cards.map(elem => <CradItem key={elem._id} card={elem} />)}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/cards')
  const cards = await response.json()

  return {
    props: { 
      cards
    },
    revalidate: 10,
  }
}
