import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import { tabline , detail, tabbg, title } from "@/utils/variables";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Cont = styled.div`
width:100%;
`;

const NewTabs = styled(Tabs)`
font-family:${(props)=>props.fm};
color:${(props)=>props.color};
font-weight:300;
`;

const NewTabList = styled(TabList)`
border-bottom: 1px solid ${(props)=>props.line};
margin: 0 0 3rem;
padding: 0;
@media only screen and (max-width: 600px) {
 display:flex;
 justify-content:space-between;
}
`;

const NewTab = styled(Tab)`
display:inline-block;
border:1px solid transparent;
border-bottom:none;
position: relative;
list-style:none;
padding: 0.8rem 2rem;
cursor: pointer;

&.react-tabs__tab--selected {
  background: ${(props)=>props.bg};
  border-color: ${(props)=>props.line};
  color:${(props)=>props.color};
  font-weight:400;
  border-radius: 5px 5px 0 0;
}

:focus{
  outline: none;
}
@media only screen and (max-width: 600px) {
  padding: 0.8rem 1.3rem;
}
`;

const TabCont = ({
fm,
All,
Design,
Development
}) =>{
  const { theme } = useTheme();
  return<Cont>
  <NewTabs 
  defaultIndex={0} 
  onSelect={(index) => console.log(index)}
  fm={fm}
  color={detail[theme]}
  >
    <NewTabList
    line={tabline[theme]}
    >
      <NewTab 
      bg={tabbg[theme]}
      line={tabline[theme]}
      color={title[theme]}
      >{All}</NewTab>
      <NewTab
      bg={tabbg[theme]}
      line={tabline[theme]}
      color={title[theme]}
      >{Design}</NewTab>
      <NewTab
      bg={tabbg[theme]}
      line={tabline[theme]}
      color={title[theme]}
      >{Development}</NewTab>
    </NewTabList>
    <TabPanel>
        <p>All Content</p>
    </TabPanel>
    <TabPanel>
        <p>Design Content</p>
    </TabPanel>
    <TabPanel>
        <p>Development Content</p>
    </TabPanel>
  </NewTabs>
  </Cont>
}

export default TabCont