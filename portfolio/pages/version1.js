import Head from 'next/head';
import styled from "styled-components";
import Nav from 'comp/Nav';
import Hero from 'comp/Hero';
import About from 'comp/About';
import Work from 'comp/Work';
import styles from '@/styles/Home.module.css';
import { useEffect, useState, useContext,useCallback } from "react";
import { useTheme } from "@/utils/provider";
import {bg, detail} from "@/utils/variables";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Contact from '@/comp/Contact';

const Cont = styled.div`
width:100vw;
height:100vh;

`;

const Scroll = styled.div`
width:100%;
position:relative;
top:88px;
background:${(props)=>props.bg};
@media screen and (min-width:1440px){
  display:flex;
  flex-direction:column;
  align-items:center;
}
`;
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
        <meta name="description" content="Chisaki Nakamura Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_header.svg" />
      </Head>
      <Cont>
      <Nav 
      handleColor={()=>onChangeColor()} 
      fm={t('FontFamily.Content')}
      />
      <Scroll bg={bg[theme]}>
      <Hero 
      id="/"
      fm={t('FontFamily.Header')} 
      parafm={t('FontFamily.Content')} 
      name={t('Hero.MyName')} 
      role={t("Hero.Role")}
      copy={t('Hero.Content')} />
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
      <Work
      fm={t('FontFamily.Content')}
      All={t('Work.All')}
      Design={t('Work.Design')}
      Development={t('Work.Development')}
      />
      <Contact
        fm={t('FontFamily.Header')} 
        parafm={t('FontFamily.Content')} 
        heading={t('Contact.Title')} 
        content={t('Contact.Content')} 
      />
      </Scroll>
      </Cont>
    </>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['en','zh-Hant','ja'])),
  },
}); 
export default Home;