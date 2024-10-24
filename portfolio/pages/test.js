import Head from 'next/head'
import styled from "styled-components"
import Nav from 'comp/Nav'
import styles from '@/styles/Home.module.css'

const Main = styled.div`
display: flex;
flex-direction: column;
padding:1.0rem;
min-height: 100vh;
background-color:#FFF4E3;
`

export default function Test() {
  return (
    <>
      <Head>
        <title>Chisaki Nakamura</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_pink.svg" />
      </Head>
      <Main>
      <Nav/>
      </Main>
    </>
  )
}
