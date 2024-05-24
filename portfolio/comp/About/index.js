import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import { title, detail } from "@/utils/variables";
import Intro from "comp/Intro";

const Cont = styled.div`
display:flex;
flex-direction:column;
gap:0.5rem;
@media only screen and (max-width: 600px) {
gap:0rem;
}
`;
const Responsive = styled.div`
width:100%;
display:flex;
flex-direction:row;
@media only screen and (max-width: 1023px) {
flex-direction:column;
}
`;

const Row = styled.div`
width:100%;
display:flex;
flex-direction:row;
padding-bottom:0.5rem;
font-family:${(props)=>props.fm};
@media only screen and (max-width: 600px) {
flex-direction:column;
}
`;
const LeftCol = styled.div`
width:45%;
display:flex;
flex-direction:column;
@media only screen and (max-width: 1023px) {
width:100%;
}
`;
const RightCol = styled.div`
width:55%;
display:flex;
flex-direction:column;
@media only screen and (max-width: 1023px) {
  width:100%;
}
`;
const Col = styled.div`
display:flex;
flex-direction:column;
font-family:${(props)=>props.fm};
`;

const EduCol = styled.div`
display:flex;
flex-direction:column;
@media only screen and (max-width:600px){
  padding:0.8rem;
}
`;
const Title = styled.h3`
margin:0;
padding:1rem;
padding-left:0;
font-weight:400;
color:${(props)=>props.color};
`;
const SubTitle = styled.h4`
width:100px;
margin:0;
padding:0;
font-weight:300;
color:${(props)=>props.color};
@media only screen and (max-width: 600px){
  font-weight:400;
}
`;
const ParaCont = styled.div`
display:flex;
@media only screen and (max-width: 600px) {
display:flex;
flex-wrap:wrap;
flex-direction:row;
padding:0.3rem;
padding-left:0;
}
`;
const SkillCont = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
padding:0.3rem;
padding-left:0;
padding-right:1rem;
gap:0.5rem;
@media only screen and (max-width: 600px) {
flex-direction:row;
}
`;

const DevCont = styled.div`
display:flex;
flex-direction:column;
`;
const Para = styled.p`
margin:0;
padding:0;
font-weight:300;
padding-right:1rem;
color:${(props)=>props.color};
@media only screen and (max-width: 600px) {
 padding:0.3rem;
 padding-left:0;
 padding-right:0.8rem;
}
`;
const About = ({
content_fm,
basic_info,
nationality,
japan,
language,
japanese,
english,
chinese,
personality,
curiosity,
attentive,
supportive,
behavior,
detail_oriented,
enthusiatic,
collaborating,
dev_skill,
design_skill,
education,
edu_canada,
edu_japan,
bcit,
bcit_major,
kwu,
kwu_major
})=>{
  const { theme } = useTheme();
  return<Cont id="about">
    <Col fm={content_fm}>
        <Title color={title[theme]} >{basic_info}</Title>
      <Responsive>
      <LeftCol>
        <Row>
          <SubTitle color={title[theme]} >{nationality}</SubTitle>
          <ParaCont>
          <Para color={detail[theme]} >{japan}</Para>
          </ParaCont>
        </Row>
        <Row>
          <SubTitle color={title[theme]} >{language}</SubTitle>
          <ParaCont>
          <Para color={detail[theme]} >{japanese}</Para>
          <Para color={detail[theme]} >{english}</Para>
          <Para color={detail[theme]} >{chinese}</Para>
          </ParaCont>
        </Row>
      </LeftCol>
      <RightCol>
        <Row>
          <SubTitle color={title[theme]} >{personality}</SubTitle>
          <ParaCont>
          <Para color={detail[theme]} >{curiosity}</Para>
          <Para color={detail[theme]} >{attentive}</Para>
          <Para color={detail[theme]} >{supportive}</Para>
          </ParaCont>
        </Row>
        <Row>
          <SubTitle color={title[theme]} >{behavior}</SubTitle>
          <ParaCont>
          <Para color={detail[theme]} >{detail_oriented}</Para>
          <Para color={detail[theme]} >{collaborating}</Para>
          <Para color={detail[theme]} >{enthusiatic}</Para>
          </ParaCont>
        </Row>
      </RightCol>
      </Responsive>
    </Col>
    <Row fm={content_fm} style={{paddingTop:"1.5rem"}}>
      <Responsive>
      <DevCont style={{minWidth:"25%"}}>
          <Title color={title[theme]} >{dev_skill}</Title>
      <Row style={{paddingRight:"1.5rem"}}>
          <SkillCont>
            <Para color={detail[theme]} >HTML/CSS/Sass</Para>
            <Para color={detail[theme]} >JavaScript</Para>
            <Para color={detail[theme]} >React</Para>
            <Para color={detail[theme]} >Next.js</Para>
            <Para color={detail[theme]} >React Native</Para>
            <Para color={detail[theme]} >Expo</Para>
          </SkillCont>
          <SkillCont>
            <Para color={detail[theme]} >Node.js</Para>
            <Para color={detail[theme]} >MongoDB</Para>
            <Para color={detail[theme]} >Docker</Para>
            <Para color={detail[theme]} >Firebase</Para>
            <Para color={detail[theme]} >Github</Para>
            <Para color={detail[theme]} >VSCode</Para>
          </SkillCont>
      </Row>
      </DevCont>
      <DevCont style={{minWidth:"20%"}}>
      <Title color={title[theme]} >{design_skill}</Title>
      <SkillCont>
            <Para color={detail[theme]} >Figma</Para>
            <Para color={detail[theme]} >Adobe illustrator</Para>
            <Para color={detail[theme]} >Photoshop</Para>
            <Para color={detail[theme]} >After Effect</Para>
            <Para color={detail[theme]} >Premiere Pro</Para>
      </SkillCont>
      </DevCont>
      <DevCont style={{minWidth:"50%"}}>
      <Title color={title[theme]} >{education}</Title>
        <Col style={{paddingTop:"0.3rem"}}>
          <Row>
            <SubTitle color={title[theme]} style={{width:"100px", paddingRight:0, fontSize:14, paddingTop:"1px"}}>2020 - 2022: </SubTitle>
          <EduCol>
          <Para color={detail[theme]}>{edu_canada}</Para>
          <Title color={title[theme]} style={{padding:"0.5rem", paddingLeft:0}}>{bcit}</Title>
          <Para color={detail[theme]}>{bcit_major}</Para>
          </EduCol>
          </Row>
          <Row>
            <SubTitle color={title[theme]} style={{width:"100px", paddingRight:0, fontSize:14, paddingTop:"1px"}}>2015 - 2019: </SubTitle>
          <EduCol>
          <Para color={detail[theme]}>{edu_japan}</Para>
          <Title color={title[theme]} style={{padding:"0.5rem", paddingLeft:0}}>{kwu}</Title>
          <Para color={detail[theme]}>{kwu_major}</Para>
          </EduCol>
          </Row>
        </Col>
      </DevCont>
      </Responsive>
    </Row>
  </Cont>
}

export default About