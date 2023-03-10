import React from 'react'
import Link from 'next/link'

export default function CradItem({ card }) {
  return (
    <div className='text-white w-[200px] mx-auto '>
        <Link href={`/card/${card._id}`}>
            <div>Current Balance</div>
            <div>{card._id}</div>
            <div>{card.balance}</div>
            <div className='mb-[40px]'>{card.number}</div>
        </Link>
    </div>
  )
}
