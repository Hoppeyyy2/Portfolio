import Head from 'next/head';
import styled,{keyframes}from "styled-components";
import Nav from 'comp/Nav/index2';
import { useState } from "react";
import { useTheme } from "@/utils/provider";
import {accentbg,bg,para, product_title} from "@/utils/variables";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import WorkCategoryBox from '@/comp/WorkCategoryBox';
import WorkExplain from '@/comp/WorkExplain';
import { GrDocument } from "react-icons/gr";
import { FaUser } from "react-icons/fa6";
import { FaTag } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";

const Cont = styled.div`
width:100vw;
height:auto;
display:flex;
flex-direction:column;
background:${(props)=>props.bg};
`;
const NavCont = styled.div`
width:100%;
position:fixed;
top:0;
z-index:100;
background:${(props)=>props.bg};
@media only screen and (max-height: 580px) {
  height:15vh;
}
`;

const Slideshow = keyframes`
0% { 
  transform: translateX(0);
}

100% { 
  transform: translateX(-600%);
}
`;
const ImgCont = styled.div`
width:100vw;
height:65vh;
display:flex;
background:${(props)=>props.bg};
margin-top:5rem;
@media screen and (min-width: 601px) and (max-width:767px){
height:40vh;
}
@media only screen and (max-width: 600px) {
margin-top:6rem;
height:40vh;
}
@media only screen and (max-height: 580px) {
margin-top:5rem;
height:80vh;
}
`;

const Img = styled.img`
flex: 0 0 100%;
animation: ${Slideshow} 60s linear infinite;
`;

const AppImg = styled.img`
width:40%;
`;
const LaptopImg = styled.img`
width:90%;
@media only screen and (max-width: 600px) {
  width:90%;
  }
`;
const Article = styled.article`

`;

const Section = styled.section`
background:${(props)=>props.bg};
`;

const Col_Left = styled.div`
width:70%;
display:flex;
flex-direction:column;
padding:2rem;
@media screen and (min-width: 601px) and (max-width:767px){
  padding-right:0;
  width:65%;
  }
@media only screen and (max-width: 600px) {
  width:100%;
  padding:1rem;
  padding-top:2rem;
}
  @media only screen and (max-height: 580px) {
    width:100%;
    padding:1rem;
    padding-top:2rem;
}
`;
const Col_Right = styled.div`
width:30%;
display:flex;
flex-direction:column;
padding:2rem;
background:${(props)=>props.bg};
@media (min-width: 768px) and (max-width: 1080px) {
padding-left:0;
}
@media screen and (min-width: 601px) and (max-width:767px){
padding-left:0;
width:35%;
}
@media only screen and (max-width: 600px) {
  width:100%;
  padding:1rem;
}
  @media only screen and (max-height: 580px) {
    width:100%;
    padding:1rem;
}
`;
const Row = styled.div`
width:100%;
display:flex;
flex-direction:row;
@media only screen and (max-width: 600px) {
  flex-direction:column;
}
  @media only screen and (max-height: 580px) {
  flex-direction:column;
}
`;
const Col = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`;
const Title = styled.h1`
margin:0;
padding:0;
font-family:${(props)=>props.fm};
color:${(props)=>props.color};
font-weight:200;
opacity:0.7;
font-size:54px;
@media screen and (min-width: 601px) and (max-width:767px){
  font-size:44px;
}
@media only screen and (max-width: 600px) {
  font-size:44px;
}
@media only screen and (max-height: 580px) {
  padding:0rem 1rem;
  font-size:44px;
}
`;
const Video = styled.iframe`
border:none;
width:95%;
height:100%;
@media only screen and (max-width: 600px) {
min-width:320px;
height:250px;
}
@media only screen and (max-height: 580px) {
  height:280px;
}
`;
const Rooma = ({

})=>{
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
  return<>
        <Head>
        <title>Chisaki Nakamura</title>
        <meta name="description" content="Chisaki Nakamura Work2_Rooma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_header.svg" />
      </Head>
      <Cont  bg={accentbg[theme]}>
        <NavCont bg={accentbg[theme]}>
            <Nav 
              handleColor={()=>onChangeColor()} 
              fm={t('FontFamily.Content')}
              WorkActive="work"
            />
        </NavCont>
        <ImgCont bg={bg[theme]}>
          <Img src="/rooma_home.svg"/>
          <Img src="/rooma_task.svg"/>
          <Img src="/rooma_chat.svg"/>
          <Img src="/rooma_member.svg"/>
          <Img src="/rooma_community.svg"/>
          <Img src="/rooma_setting.svg"/>
        </ImgCont>
        <Article>
          <Section>
            <Row>
              <Col_Left>
                <Title fm={t('FontFamily.WorkTitle')} color={product_title[theme]}>Rooma</Title>
                <Video 
                src="https://www.youtube-nocookie.com/embed/wYbSRaiWKOw?si=tSTidSyBIXbMm3_b?autoplay=1&showinfo=0&loop=1&rel=0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen/>
              </Col_Left>
              <Col_Right>
              <WorkCategoryBox
              icon={<GrDocument color={para[theme]}/>}
              fm={t('FontFamily.Content')}
              color={para[theme]}
              text={t('WorkCategory.Project_Type')}
              width="170px"
              BxColor="#D9E1E8"
              box_text={t('WorkCategory.Project_Text2')}
              display="none"
              />
             <WorkCategoryBox
              icon={<FaUser color={para[theme]}/>}
              fm={t('FontFamily.Content')}
              color={para[theme]}
              text={t('WorkCategory.My_Role')}
              width="170px"
              BxColor="#D3DDFF"
              box_text={t('WorkCategory.My_Role_Text')}
              BxColor2="#D3EAFF"
              box_text2={t('WorkCategory.My_Role_Text2')}
              />
              <WorkCategoryBox
              icon={<FaTag color={para[theme]}/>}
              fm={t('FontFamily.Content')}
              color={para[theme]}
              text={t('WorkCategory.Stack')}
              width="170px"
              BxColor="#EAF0F5"
              box_text={t('WorkCategory.Stack2')}
              BxColor2="#EAF0F5"
              box_text2={t('WorkCategory.Stack3')}
              />
              <WorkCategoryBox
              icon={<IoTimeOutline color={para[theme]}/>}
              fm={t('FontFamily.Content')}
              color={para[theme]}
              color2={para[theme]}
              text={t('WorkCategory.Year')}
              width="220px"
              BxColor=""
              box_text={t('WorkCategory.Period2')}
              display="none"
              />
              </Col_Right>
            </Row>
          </Section>
          <Section bg={bg[theme]} style={{padding:"2rem"}}>
              <WorkExplain
                width="70%"
                fm={t('FontFamily.Content')}
                color={para[theme]}
                title="Overview"
                contents={t('Rooma.Overview1')}
                contents2={t('Rooma.Overview2')}
                />
          </Section>
          <Section style={{padding:"2rem"}}>
              <WorkExplain
                width="70%"
                fm={t('FontFamily.Content')}
                color={para[theme]}
                title="Background"
                contents={t('Rooma.Background1')}
                contents2={t('Rooma.Background2')}
                />
          </Section>
          <Section bg={bg[theme]} style={{padding:"2rem"}}>
              <WorkExplain
                width="70%"
                fm={t('FontFamily.Content')}
                color={para[theme]}
                title="Problems"
                contents={t('Rooma.Problems1')}
                ParaBox_display="none"
                Ul_display="block"
                item1={t('Rooma.Problems_item1')}
                item2={t('Rooma.Problems_item2')}
                item3={t('Rooma.Problems_item3')}
                item4={t('Rooma.Problems_item4')}
                />
          </Section>
          <Section style={{padding:"2rem"}}>
            <Row>
            <Col>
            <WorkExplain
                width="100%"
                fm={t('FontFamily.Content')}
                color={para[theme]}
                title="User Personas"
                ParaBox_display="none"
                Ul_display="none"
                />
            <LaptopImg src="/rooma_persona1.svg"/>
            </Col>
            <Col style={{justifyContent:"space-between"}}>
            <WorkExplain
                width="70%"
                fm={t('FontFamily.Content')}
                color={para[theme]}
                title=""
                ParaBox_display="none"
                Ul_display="none"
                line_display="none"
                />
             <LaptopImg src="/rooma_persona2.svg"/>
            </Col>
            </Row>
          </Section>
          <Section bg={bg[theme]} style={{padding:"2rem"}}>
          <WorkExplain
                width="70%"
                fm={t('FontFamily.Content')}
                color={para[theme]}
                title="Solutions"
                contents={t('Rooma.Solutions1')}
                ParaBox_display="none"
                Ul_display="block"
                item1={t('Rooma.Solutions_item1')}
                item2={t('Rooma.Solutions_item2')}
                item3={t('Rooma.Solutions_item3')}
                item4={t('Rooma.Solutions_item4')}
                />
          </Section>
          <Section style={{padding:"2rem"}}>
            <Col>
            <WorkExplain
                width="100%"
                fm={t('FontFamily.Content')}
                color={para[theme]}
                title="Style Guide"
                ParaBox_display="none"
                Ul_display="none"
                />
            <LaptopImg src="/rooma_style_guide.svg"/>
          </Col>
          </Section>
          <Section bg={bg[theme]} style={{padding:"2rem"}}>
          <Col>
          <LaptopImg src="/rooma_login.svg"/>
          <LaptopImg src="/rooma_signup.svg"/>
          <LaptopImg src="/rooma_join.svg"/>
          <LaptopImg src="/rooma_profile.svg"/>
          <LaptopImg src="/rooma_pickup_color.svg"/>
          </Col>
          </Section>
          <Section bg={bg[theme]} style={{padding:"2rem"}}>
          <Col>
          <LaptopImg src="/rooma_home.svg"/>
          <LaptopImg src="/rooma_task.svg"/>
          <LaptopImg src="/rooma_chat.svg"/>
          <LaptopImg src="/rooma_member.svg"/>
          <LaptopImg src="/rooma_community.svg"/>
          <LaptopImg src="/rooma_setting.svg"/>
          </Col>
          </Section>
          <Section style={{padding:"2rem"}}>
            <Row>
            <Col>
            <WorkExplain
                width="70%"
                fm={t('FontFamily.Content')}
                color={para[theme]}
                title="App Design"
                ParaBox_display="none"
                Ul_display="none"
                />
            <AppImg src="/rooma_app.svg"/>
            </Col>
            <Col style={{justifyContent:"space-between"}}>
            <WorkExplain
                width="70%"
                fm={t('FontFamily.Content')}
                color={para[theme]}
                title="Website Design"
                ParaBox_display="none"
                Ul_display="none"
                />
             <LaptopImg src="/rooma_desktop.svg"/>
            </Col>
            </Row>
          </Section>
          <Section bg={bg[theme]} style={{padding:"2rem"}}>

          </Section>
        </Article>
      </Cont>
  </>
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['en','zh-Hant','ja'])),
  },
}); 
export default Rooma