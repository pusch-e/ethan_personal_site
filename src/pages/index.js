import React from 'react';
import Landing from './home';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ethan Pusch Home</title>
      </Head>
      <Landing />
    </div>
  )
}

