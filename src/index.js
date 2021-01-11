import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ethan Pusch Home</title>
      </Head>
      <Home />
    </div>
  )
}

