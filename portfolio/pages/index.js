import Head from 'next/head';
import styled from "styled-components";
import Nav from 'comp/Nav/index2';
import Hero from 'comp/Hero/index2';
import About from 'comp/About/index2';
import Work from 'comp/Work/index2';
import Img from 'comp/Img';
import { useEffect, useState, useRef} from "react";
import { useTheme } from "@/utils/provider";
import {accentbg} from "@/utils/variables";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Loading from '@/comp/Loading';
import { motion, AnimatePresence, LayoutGroup} from "framer-motion";
import ContactBtn from '@/comp/Button/ContactBtn';


const Cont = styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
background:${(props)=>props.bg};
overflow-y:hidden;
`;
const NavCont = styled.div`
width:100%;
height:10%;
@media only screen and (max-height: 580px) {
  height:15%;
   }
`;
const MainCont = styled.article`
width:100%;
height:70%;
overflow-y:scroll;
scroll-snap-type:y mandatory;
::-webkit-scrollbar {
  display: none;
}
@media only screen and (max-height: 580px) {
 height:85%;
  }
`;
const Scroll = styled.section`
height:100%;
scroll-snap-align:start;
display:flex;
justify-content:center;
`;
const ImgCont = styled.div`
height:20%;
display:flex;
align-items:flex-end;
@media only screen and (max-height: 580px) {
  display:none;
  }
`;
const Motion = styled(motion(ImgCont))``;
const Home =() =>{

  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef();

  useEffect(() => {
        //create new instance and pass a callback function
        observer.current = new IntersectionObserver((entries)=>{
          console.log("this is entries",entries);
          const visibleSection = entries.find((entry)=>entry.isIntersecting)?.target;
          if(visibleSection){
            console.log("this is visible section",visibleSection);
            console.log(visibleSection.id);
            setActiveSection(visibleSection.id);
          }
        },{root:document.querySelector("article"),threshold:[0.5,0.5,0.5,0.5]});
          //console.log(observer.current);
    
        //Get custom attribute data-section from all sections
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
              observer.current.observe(section);
            });
        //Cleanup function to remove observer
            return () => {
              sections.forEach((section) => {
                observer.current.unobserve(section);
              });
            };

      loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);



      
  console.log("active section", activeSection);

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
      <LayoutGroup>
      <AnimatePresence>
        {loading ? (
        <motion.div key='loader'>
        <Cont  bg={accentbg[theme]}>
            <Loading setLoading={setLoading} layoutId='main-image'/>
        </Cont>
        </motion.div>):(
        <Cont  bg={accentbg[theme]}>
          <NavCont>
            <Nav 
              handleColor={()=>onChangeColor()} 
              fm={t('FontFamily.Content')}
              AboutActive={activeSection}
              WorkActive={activeSection}
              ContactActive={activeSection}
            />
          </NavCont>
          <MainCont id="scrollArea">
            <Scroll id="home">
              <Hero
              fm={t('FontFamily.Header')} 
              parafm={t('FontFamily.Content')} 
              name={t('Hero.MyName')} 
              role={t("Hero.Role")}
              copy={t('Hero.Content')} 
            />
            </Scroll>
            <Scroll id="about" style={{display:"flex",flexDirection:"column"}}>
                <About
                fm={t('FontFamily.Header')} 
                pb="1rem"
                parafm={t('FontFamily.Content')} 
                title={t('About.title')}
                subtitle={t("About.subtitle")}
                subtitle2={t("About.subtitle2")}
                subtitle3={t("About.subtitle3")}
                para={t('About.para')} 
                para2={t('About.para2')}
                para3={t('About.para3')}
                />
            </Scroll>
            <Scroll id="work">
              <Work
                fm={t('FontFamily.Header')} 
                parafm={t('FontFamily.Content')} 
                title={t('Work.Title')}
              />
            </Scroll>
            <Scroll id="contact" style={{flexDirection:"column"}}>
              <Hero
              fm={t('FontFamily.Header')} 
              parafm={t('FontFamily.Content')} 
              name={t('Contact.Title')} 
              copy={t('Contact.Content')} 
              />
              <ContactBtn
               fm={t('FontFamily.Content')} 
              />
            </Scroll>
          </MainCont>
          {!loading && (<Motion
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            layoutId='main-image'>
            <Img/>
            </Motion>)}
        </Cont>
        )}
      </AnimatePresence>
      </LayoutGroup>
    </>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['en','zh-Hant','ja'])),
  },
}); 
export default Home;