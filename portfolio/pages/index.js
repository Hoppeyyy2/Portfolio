import Head from 'next/head';
import styled from "styled-components";
import Nav from 'comp/Nav';
import Hero from 'comp/Hero';
import About from 'comp/About';
import styles from '@/styles/Home.module.css';
import { useEffect, useState, useContext,useCallback } from "react";
import { useTheme } from "@/utils/provider";
import {bg} from "@/utils/variables";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const MainStructure = styled.div`
width:100vw;
display:flex;
flex-direction:column;
position:relative;
top:89px;
box-sizing: border-box;
background:${(props)=> props.bg};
padding:3rem 6rem;
@media only screen and (max-width: 600px) {
  padding:3rem;
}
`

const Home =() =>{
  const [color, setColor] = useState(true);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation('common');


  const onChangeColor = () => {
  
    if(color === false){
      setTheme(theme === "dark" ? "light":"dark");
      setColor(true);
    }else if(color === true){
      setTheme(theme === "dark" ? "light":"dark");
      setColor(false);
    }
  };

  return (
    <>
      <Head>
        <title>Chisaki Nakamura</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_header.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans+TC:wght@100..900&display=swap" rel="stylesheet"/>
      </Head>
      <Nav handleColor={()=>onChangeColor()} fm={t('FontFamily.Content')}/>
      <Hero fm={t('FontFamily.Header')} parafm={t('FontFamily.Content')} heading={t('Hero.MyName')} content={t('Hero.Content')} text_content={t('Hero.Button_text')} Btnfm={t('FontFamily.Content')}/>
      <MainStructure bg={bg[theme]}>
      {/*---------------------------- Main Contents From Here ---------------------------*/}
      <About 
      content_fm={t('FontFamily.Content')}
      basic_info={t('About.Basic_Info')} 
      nationality={t('About.Nationality')}
      japan={t('About.Japan')}
      language={t('About.Language')}
      japanese={t('About.Japanese')}
      english={t('About.English')}
      chinese={t('About.Chinese')}
      personality={t('About.Personality')}
      curiosity={t('About.Curiosity')}
      attentive={t('About.Attentive')}
      supportive={t('About.Supportive')}
      behavior={t('About.Behavior')}
      detail_oriented={t('About.Detail_oriented')}
      enthusiatic={t('About.Enthusiatic')}
      collaborating={t('About.Collaborating')}
      dev_skill={t('About.Dev_Skill')}
      design_skill={t('About.Design_Skill')}
      education={t('About.Education')}
      edu_canada={t('About.Edu_canada')}
      edu_japan={t('About.Edu_japan')}
      bcit={t('About.Bcit')}
      bcit_major={t('About.Bcit_major')}
      kwu={t('About.Kwu')}
      kwu_major={t('About.Kwu_major')}
      />

      {/*---------------------------- Main Contents Finish Here ---------------------------*/}

      </MainStructure>
    </>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['en','zh-Hant','ja'])),
  },
}); 
export default Home;