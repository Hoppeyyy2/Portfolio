import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import { navletter} from "@/utils/variables";

const Cont = styled.div`
width:100%;
display:flex;
flex-direction:column;
overflow-y:scroll;
overflow-x:hidden;
-webkit-overflow-scrolling: touch;
&::-webkit-scrollbar {
  display: none;
}
@media screen and (min-width:1440px){
}
@media (min-width: 768px) and (max-width: 1024px) {

}
@media screen and (min-width: 601px) and (max-width:767px){

}
`;

const CardCont = styled.div`
width:100%;
display:inline-block;
flex-direction:column;
justify-content:left;
align-items:center;
padding:2rem;
padding-left:0;
@media (min-width: 768px) and (max-width: 1080px) {
  display:flex;
  flex-direction:row;
}
@media screen and (min-width: 601px) and (max-width:767px){
  padding:1rem;
}
@media only screen and (max-width: 600px) {
  padding-right:0;
}
@media screen and (max-height: 580px) {
  display:flex;
  flex-direction:row;
}
@media only screen and (max-height: 380px) {
  padding-top:1rem;
}
:hover{
  opacity:70%;
}

`;

const Img = styled.img`
width:100%;
text-align:center;
object-fit:contain;
@media (min-width: 768px) and (max-width: 1080px) {
width:50%;
}
@media screen and (max-height: 580px) {
  width:50%;
}
`;

const Col = styled.div`
width:100%;
display:flex;
flex-direction:column;
padding:0.5rem;
padding-left:0;
padding-top:0;
@media (min-width: 768px) and (max-width: 1080px) {
  padding-left:2rem;
}
@media screen and (max-height: 580px) {
  padding-left:2rem;
}
`;

const Row = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:0.5rem;
padding-left:0;
@media screen and (min-width: 601px) and (max-width:767px){
  padding:0rem;
}
@media only screen and (max-width: 600px) {
  padding-top:0;
  }
@media screen and (max-height: 580px) {
  flex-direction:row;
  padding-bottom:0.5rem;
}
`;
const Title = styled.h4`
padding-top:0rem;
padding-left:0.3rem;
font-family:${(props)=>props.fm};
color:#111A36;
font-weight:300;
font-size:20px;
@media only screen and (max-width: 600px) {
  padding-top:0.5rem;
  }
`;


const Para = styled.p`
font-family:${(props)=>props.fm};
font-weight:300;
font-size:16px;
opacity:0.7;
color:${(props)=>props.color};
padding-left:0.3rem;
`;
const WorkCard = ({
parafm,
src,
name,
time,
type,
onClick=()=>{},
})=>{
  const { theme } = useTheme();
  //const data = [{id:data_id, category:category,type:type,name:name,img:img_src}]
  const fake_data = [{id:1,time:"2022",name:"Guessfit",type:"UI UX Design | Frontend Development",img:"/guessfit_hero.svg"},{id:2,time:"",name:"Example 2",type:"",img:"https://placecats.com/300/200"},{id:3,time:"",name:"Example 3",type:"",img:"https://placecats.com/300/200"}]
  return<Cont>
      <CardCont onClick={onClick}>
        <Img src={src}/>
        <Col>
        <Row>
        <Title fm={parafm}>{name}</Title>
        <Para fm={parafm} color={navletter[theme]}>{time}</Para>
        </Row>
          <Para fm={parafm} color={navletter[theme]}>{type}</Para>
        </Col>
      </CardCont>
  </Cont>
}

export default WorkCard