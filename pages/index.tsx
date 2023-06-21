import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import { GradientBackgroundCon } from '@/components/QouteGenerator/QouteGeneratorElements'



export default function Home() {
  return (
    <>
      <Head>
        <title>Inspirational Qoute Generator</title>
        <meta name="description" content="A fun project to generate qoutes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        
      </GradientBackgroundCon>
    </>
  )
}
