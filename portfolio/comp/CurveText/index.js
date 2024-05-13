import ReactCurvedText from 'react-curved-text';
import React  from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css';
import useCursorHandlers from "../../hooks/useCursorHandlers";

const Cont = styled.div`
display:flex;
align-items:center;
justify-content:center;
opacity:0.7;
@media only screen and (max-width: 600px) {
  display:none;
  }
`;
const CurveText = ({
  handleColor=()=>{},
  Textcolor,
  Text,
}) => {
  const cursorHandlers = useCursorHandlers();
    return (
    <Cont onClick={handleColor} {...cursorHandlers} className="show-cursor">
      <ReactCurvedText
      width="180"
      height="180"
      cx="117"
      cy="117"
      rx="28"
      ry="28"
      startOffset="0"
      reversed={true}
      text={Text}
      textProps={{"style": {"fontSize": "14"}}}
      textPathProps={{"fill":Textcolor}}
      tspanProps={{"dy":"-14"}}
      ellipseProps={null}
      svgProps={{className:styles.rotating}}
    />
    </Cont>
    );
};

export default CurveText;