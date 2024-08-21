import react, {useState, useEffect} from "react";
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';
import {bg,detail,para,accentbg,navletter} from "@/utils/variables";
import { useTheme } from "@/utils/provider";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
const appear = keyframes`
from{
  opacity:0;
  top:50px;
}
to{
  opacity:1;
  top:0px;
}
`;
const Cont = styled.div`
display:flex;
flex-direction:column;
padding:1.1rem;
padding-left:0;
@media only screen and (max-width: 700px) {
  padding:0.5rem;
  padding-top:1.1rem;
  padding-left:0;
}
@media only screen and (max-width: 600px) {
padding:2.3rem;
padding-bottom:0;
}
`;
const Select = styled.div`
display: flex;
padding:0.4em 1em;
border-radius:8px;
align-items:center;
cursor: pointer;
justify-content:center;
color:${(props)=>props.color};
:hover{
  color:${(props)=>props.active};
  }
@media only screen and (max-width: 700px) {
    padding:0.4rem;
}
@media only screen and (max-width: 600px) {
  position: relative;
  animation:${appear} 1.5s ease-in;
}
`;

const Active = styled.p`
font-family:${(props)=>props.fm};
font-weight:300;
font-size: 14px;
letter-spacing:1px;
`;
const Options = styled.ul`
position: absolute;
padding:10px 25px;
border-radius:8px;
background:${(props)=>props.bg};
box-shadow: 0 0 3px ${(props)=>props.border};
top:4.5em;
@media only screen and (max-width: 600px) {
  position: relative;
  padding:10px;
  top:0.5em;
  display:flex;
  justify-content:center;
}
`;

const Option = styled.li`
display:flex;
height: 2em;
cursor: pointer;
padding: 0 1.3em;
border-radius:8px;
align-items: center;
font-family:${(props)=>props.fm};
font-size:14px;
letter-spacing:1px;
font-weight:300;
color:${(props)=>props.color};
:hover{
background:${(props)=>props.bg};
}
`;

const LanguageSwitcher2 = ({
  fm
}) =>{
  const { theme } = useTheme();
  const router = useRouter();
  const data = [{id:0, value:"en", label:"EN"},{id:1, value:"zh-Hant", label:"CH"},{id:2, value:"ja", label:"JP"}]
  const [active, setActive] = useState(data[0].label);
  const [open, setOpen] = useState(false);
  const OpenBox = () =>{
    if(open === false){
      setOpen(true)
    }else if(open === true){
      setOpen(false)
    }
  }
useEffect(()=>{
  if(typeof window !== 'undefined' && window.localStorage){
    let active = localStorage.getItem('active');
    setActive(active);
  }
},[])

  const handleChange = (e) =>{
    if(typeof window !== 'undefined' && window.localStorage){
      localStorage.setItem('active', e.target.innerHTML);
      setActive(e.target.innerHTML);
    }
    setOpen(false);
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      null,
   { locale: e.target.attributes[0].value },
    )
  }

  return (
    <Cont>
      <Select
      color={navletter[theme]}
      active={para[theme]}
      onClick={OpenBox}
      >
        <GrLanguage style={{marginRight:"0.8em"}}/>
        <Active fm={fm}>{active}</Active>
        <IoIosArrowDown style={{transform:open === true?"rotate(-180deg)":"", marginLeft:"0.8em"}}/>
      </Select>
      {open === true?
      <Options bg={bg[theme]} border={detail[theme]}>
        {data.map((item)=><Option value={item.value} onClick={handleChange} color={para[theme]}  bg={accentbg[theme]} fm={fm}>{item.label}</Option>)}
      </Options>:null}
    </Cont>
  );
}

export default LanguageSwitcher2;