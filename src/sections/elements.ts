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

  .description {
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
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
  }
`;

export const DescMessage = styled.div``;

export const MidMeessage = styled.p``;

export const Pin = styled.div``;

export const CanvasCaption = styled.p``;

export const Footer = styled.footer``;