import styled  from "styled-components";

/* Main Section */

export const MainContainer = styled.main<{ currentScene: number}>`
  .section-${props => props.currentScene} {
    .sticky-elem {
      display: block;
    }
  }

`;

export const ScrollSection = styled.section`
  font-family: 'Nanum Gothic', sans-serif;
  padding-top: 50vh;

  h1 {
    font-size: 3rem ;
    text-align: center; 
    font-weight: 800 ;

    @media (min-width: 1024px) {
      font-size: 7vw;
    }
  }

  .sticky-elem {
    display: none;
    position: fixed;
    left: 0;
    width: 100%;
  }

  .desc1 {
    padding: 0 1rem;
    font-size: 1rem;
    color: #888;
    max-width: 1000px;
    margin: 0 auto;

    strong {
      margin-right: .2em;
      float: left;
      font-size: 2rem;
      color: #d4d4d4;
    }

    @media (min-width: 1024px) {
      font-size: 1.2rem;

      strong {
        font-size: 3.6rem;
      }
    }
  }

  .desc2 {
    font-size: 1.8rem;

    @media (min-width: 1024px) {
     font-size: 5.2vw;

     small {
       font-size: 2.3vw;
       font-weight: bolder;
     }
    }
  }
`;

export const MainMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 35vh;
  margin: 5px 0;
  height: 3em;
  font-size: 1.5rem;
  opacity: 0;

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

   @media (min-width: 1024px) {
     font-size : 2vw;
    }
`;

export const DescMessage = styled.div`
  font-weight: bold;
  width: 50%;
  top: 10%;
  left: 40%;

  @media (min-width: 1024px) {
    width: 20%;
    top: 20%;
    left: 53%;
  }
`;

export const MidMeessage = styled.p`
  padding: 0 1rem;
  font-size: 1.5rem;
  color: #999 ;
  line-height: 1.3;
  max-width: 1000px;
  margin: 0 auto;

  strong {
    color: #d4d4d4;
  }

  @media (min-width: 1024px) {
     font-size : 2.8vw;
  }
`;

export const Pin = styled.div`
  width: 1px;
  height: 100px;
  background: #d4d4d4;
`;

export const CanvasCaption = styled.p`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  font-size: .8rem;
  color: #999;

  @media (min-width: 1024px) {
    font-size : 1.2rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  background: slateblue ;
`;