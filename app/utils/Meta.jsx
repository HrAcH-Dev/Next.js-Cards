import Head from 'next/head'
import React from 'react'

export default function Meta({ title, description }) {
  return (
    <Head>
        <title>{title}</title>
        <meta
            name='description'
            content={description}
        />
        <link rel="icon" href="/favicon.ico" />    
    </Head>
  )
}
