import styled  from "styled-components";

/* Main Section */

export const ScrollSection = styled.section`
  font-family: 'Nanum Gothic', sans-serif;
  padding-top: 50vh;

  h1 {
    font-size: 3rem ;
    text-align: center; 
    font-weight: 800 ;
  }

  .desc1 {
    padding: 0 1rem;
    font-size: 1rem;
    color: #888;

    strong {
      margin-right: .2em;
      float: left;
      font-size: 2rem;
      color: #d4d4d4;
    }
  }

  .desc2 {
    font-size: 1.8 rem;
  }
`;

export const MainMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  height: 3em;
  font-size: 1.5rem;
  background: rgba(0, 0, 0, 0.3);

  p {
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
  }
    
  small {
    text-align: center;
    display: block;
    margin-bottom: 1em;
    font-size: .8rem;
   }
`;

export const DescMessage = styled.div`
  font-weight: bold;
  width: 50%;
`;

export const MidMeessage = styled.p`
  padding: 0 1rem;
  font-size: 1.5rem;
  color: #999 ;
  line-height: 1.3;

  strong {
    color: #d4d4d4;
  }
`;

export const Pin = styled.div`
  width: 1px;
  height: 100px;
  background: #d4d4d4;
`;

export const CanvasCaption = styled.p`
  padding: 0 1rem;
  font-size: .8rem;
  color: #999;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  background: slateblue;
`;