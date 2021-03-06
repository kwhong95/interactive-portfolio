import React, { useEffect, useRef, useState } from 'react';
import { 
  MainContainer,
  ScrollSection, 
  CanvasWrap,
  VideoCanvas,
  MainMessage, 
  DescMessage,
  MidMeessage,
  Pin,
  CanvasCaption,  
  Footer
} from './elements';
import { mainSceneInfo } from './main-section-info';


const MainSection: React.FC = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [positonY, setPositionY] = useState<number>(0);
  const [totalScrollHeight, setTotalScrollHeight] = useState<number>(0);
  let prevScrollHeight: number = 0;

  const setCanvasImages = () => {
    let imgElem;
    for (let i = 0; i < mainSceneInfo[0].values?.videoImagecount; i++) {
      imgElem = new Image();
      imgElem.src = `../assets/typing_24/typing_${1 + i}.jpg`;
      mainSceneInfo[0].objs.videoImages.push(imgElem);
    }

    console.log(mainSceneInfo[0].objs.videoImages);
  }

  setCanvasImages();

  const setLayout = () => {
    for (let i = 0; i < mainSceneInfo.length; i++ ) {
      mainSceneInfo[i].objs.container = mainRef.current?.childNodes[i];
      if (i === 0) { 
        mainSceneInfo[i].objs.messageA = mainRef.current?.childNodes[i].childNodes[i + 1];
        mainSceneInfo[i].objs.messageB = mainRef.current?.childNodes[i].childNodes[i + 2];
        mainSceneInfo[i].objs.messageC = mainRef.current?.childNodes[i].childNodes[i + 3];
        mainSceneInfo[i].objs.messageD = mainRef.current?.childNodes[i].childNodes[i + 4];
        mainSceneInfo[i].objs.canvas = canvasRef.current;
        mainSceneInfo[i].objs.context = canvasRef.current?.getContext("2d"); 
      } else if (i === 2) {
        mainSceneInfo[i].objs.messageA = mainRef.current?.childNodes[i].childNodes[i - 2];
        mainSceneInfo[i].objs.messageB = mainRef.current?.childNodes[i].childNodes[i - 1];
        mainSceneInfo[i].objs.messageC = mainRef.current?.childNodes[i].childNodes[i];
        mainSceneInfo[i].objs.pinB = mainRef.current?.childNodes[i].childNodes[i - 1].childNodes[i - 1];
        mainSceneInfo[i].objs.pinC = mainRef.current?.childNodes[i].childNodes[i].childNodes[i - 1];
      }
      if (mainSceneInfo[i].type === "sticky") {
        mainSceneInfo[i].scrollHeight = mainSceneInfo[i].heightNum as number * window.innerHeight;
      } else if (mainSceneInfo[i].type === "normal") {
        mainSceneInfo[i].scrollHeight = mainSceneInfo[i].objs.container.offsetHeight
      }
      mainSceneInfo[i].objs.container.style.height = `${mainSceneInfo[i].scrollHeight}px`;
    } 

    console.log(mainSceneInfo);

    for(let i = 0; i < mainSceneInfo.length; i++) {
      setTotalScrollHeight(v => v + mainSceneInfo[i].scrollHeight)
      if (totalScrollHeight >= positonY) {
        setCurrentScene(i);
        break;
      }
      setCurrentScene(currentScene);
    }
  }

  const scrollLoop = () => {
    setPositionY(window.pageYOffset);
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += mainSceneInfo[i].scrollHeight;
    }

    if (positonY > prevScrollHeight + mainSceneInfo[currentScene].scrollHeight) {
      setCurrentScene(v => v + 1);
    }

    if (positonY < prevScrollHeight) {
      // ???????????? ????????? ????????? ?????? ??????????????? ?????? ?????? ??????(?????????)
      if (currentScene === 0) return;
      setCurrentScene(v => v - 1);
    }

    playAnimation();
  }

  const calcValues = (values: any, currentYOffset: number) => {
    let rv;
    // ?????? ???(???????????????)?????? ???????????? ????????? ????????? ?????????
    const scrollHeight = mainSceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    if (values.length === 3) {
      // start ~ end ????????? ??????????????? ??????
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHight = partScrollEnd - partScrollStart;

      if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
        rv = (currentYOffset - partScrollStart) / partScrollHight * (values[1] - values[0]) + values[0]; 
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0]; 
    }

    return rv;
  }

  const playAnimation = () => {
    const objs = mainSceneInfo[currentScene].objs;
    const values = mainSceneInfo[currentScene].values;
    const currentYOffset = positonY - prevScrollHeight;
    const scrollHeight = mainSceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    switch(currentScene) {
      case 0:
        if (scrollRatio <= 0.22) {
          // In
          objs.messageA.style.opacity = calcValues(values?.messageA_opacity_in, currentYOffset);
          objs.messageA.style.transform = `translateY(${calcValues(values?.messageA_translateY_in, currentYOffset)}%)`;
        } else {
          // Out
          objs.messageA.style.opacity = calcValues(values?.messageA_opacity_out, currentYOffset);
          objs.messageA.style.transform = `translateY(${calcValues(values?.messageA_translateY_out, currentYOffset)}%)`;
        }

        if (scrollRatio <= 0.42) {
          // In
          objs.messageB.style.opacity = calcValues(values?.messageB_opacity_in, currentYOffset);
          objs.messageB.style.transform = `translateY(${calcValues(values?.messageB_translateY_in, currentYOffset)}%)`;
        } else {
          // Out
          objs.messageB.style.opacity = calcValues(values?.messageB_opacity_out, currentYOffset);
          objs.messageB.style.transform = `translateY(${calcValues(values?.messageB_translateY_out, currentYOffset)}%)`;
        }

        if (scrollRatio <= 0.62) {
          // In
          objs.messageC.style.opacity = calcValues(values?.messageC_opacity_in, currentYOffset);
          objs.messageC.style.transform = `translateY(${calcValues(values?.messageC_translateY_in, currentYOffset)}%)`;
        } else {
          // Out
          objs.messageC.style.opacity = calcValues(values?.messageC_opacity_out, currentYOffset);
          objs.messageC.style.transform = `translateY(${calcValues(values?.messageC_translateY_out, currentYOffset)}%)`;
        }

        if (scrollRatio <= 0.82) {
          // In
          objs.messageD.style.opacity = calcValues(values?.messageD_opacity_in, currentYOffset);
          objs.messageD.style.transform = `translateY(${calcValues(values?.messageD_translateY_in, currentYOffset)}%)`;
        } else {
          // Out
          objs.messageD.style.opacity = calcValues(values?.messageD_opacity_out, currentYOffset);
          objs.messageD.style.transform = `translateY(${calcValues(values?.messageD_translateY_out, currentYOffset)}%)`;
        }
        break;
      case 2:
        if (scrollRatio <= 0.32) {
          // In
          objs.messageA.style.opacity = calcValues(values?.messageA_opacity_in, currentYOffset);
          objs.messageA.style.transform = `translateY(${calcValues(values?.messageA_translateY_in, currentYOffset)}%)`;
        } else {
          // Out
          objs.messageA.style.opacity = calcValues(values?.messageA_opacity_out, currentYOffset);
          objs.messageA.style.transform = `translateY(${calcValues(values?.messageA_translateY_out, currentYOffset)}%)`;
        }

        if (scrollRatio <= 0.67) {
          // In
          objs.messageB.style.opacity = calcValues(values?.messageB_opacity_in, currentYOffset);
          objs.messageB.style.transform = `translateY(${calcValues(values?.messageB_translateY_in, currentYOffset)}%)`;
        } else {
          // Out
          objs.messageB.style.opacity = calcValues(values?.messageB_opacity_out, currentYOffset);
          objs.messageB.style.transform = `translateY(${calcValues(values?.messageB_translateY_out, currentYOffset)}%)`;
        }

        if (scrollRatio <= 0.93) {
          // In
          objs.messageC.style.opacity = calcValues(values?.messageC_opacity_in, currentYOffset);
          objs.messageC.style.transform = `translateY(${calcValues(values?.messageC_translateY_in, currentYOffset)}%)`;
        } else {
          // Out
          objs.messageC.style.opacity = calcValues(values?.messageC_opacity_out, currentYOffset);
          objs.messageC.style.transform = `translateY(${calcValues(values?.messageC_translateY_out, currentYOffset)}%)`;
        }
        break;
      case 3:
        break;      
    }
  }

  useEffect(() => {  
    window.addEventListener("scroll", scrollLoop);
    window.addEventListener("resize", setLayout);
    window.addEventListener("load", setLayout);

    return () => {
      window.removeEventListener("scroll", scrollLoop);
      window.removeEventListener("resize", setLayout);
      window.removeEventListener("load", setLayout);
    }
  }, [scrollLoop]);  

  return (
    <MainContainer 
      ref={mainRef} 
      currentScene={currentScene}
    >
      <ScrollSection className="section-0">
        <h1>UX Developer</h1>
        <CanvasWrap className="sticky-elem">
          <VideoCanvas width="1920" height="1080" ref={canvasRef} />
        </CanvasWrap>
        <MainMessage className="sticky-elem">
          <p>????????? ??????????????????<br />????????? ?????????</p>
        </MainMessage> 
        <MainMessage className="sticky-elem">
          <p>???????????? ????????? ???????????????<br />???????????? UI</p>
        </MainMessage>
        <MainMessage className="sticky-elem">
          <p>?????? ??????????????? ?????? ?????????<br />????????? ?????????</p>
        </MainMessage>
        <MainMessage className="sticky-elem">
          <p>????????? ?????????<br />????????? ??????</p>
        </MainMessage>
      </ScrollSection>
      <ScrollSection className="section-1">
        <p className="desc1">
          <strong>?????? ????????? ??????</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur ad repudiandae recusandae cupiditate ipsam quibusdam vel delectus aperiam voluptatibus et, iste aspernatur labore magnam tempore nam vitae, quas doloremque explicabo corporis exercitationem veniam accusamus. A cumque, in suscipit sit commodi cum officia nam ad iusto eum ratione unde quidem esse perferendis autem aperiam ipsam itaque vel aspernatur? Quas dolorum explicabo nihil rerum nisi velit blanditiis, voluptates odit optio cupiditate corporis, nulla sapiente reprehenderit quibusdam similique totam ratione, quo consequatur quae voluptatem magnam! Ab officiis facilis corporis quisquam quae aut beatae illum rerum eligendi recusandae velit itaque blanditiis, tempore hic eveniet ipsum saepe aliquam sequi veniam mollitia deleniti iste fugiat rem autem? Voluptatum natus placeat quo quas quibusdam quam facere iusto sit. In reiciendis tenetur ab libero earum suscipit ea, quam tempore quibusdam cupiditate officiis! Quaerat ducimus blanditiis quam, rerum ad facilis inventore dolore nisi aperiam ab modi exercitationem ut, quas laudantium dolor nam doloremque animi ex suscipit veniam enim. Exercitationem possimus est asperiores aut earum dolore dolorem placeat libero modi accusantium autem non aliquid ea maiores quos explicabo, debitis ullam hic! Placeat neque recusandae temporibus quo, similique animi? Illum asperiores quis obcaecati dolore tempore culpa officiis non, suscipit harum!
        </p>
      </ScrollSection>
      <ScrollSection className="section-2">
        <MainMessage className="sticky-elem">
          <p className="desc2">
            <small>????????? ??????</small>
            ????????? ????????????
          </p>
        </MainMessage>
        <DescMessage className="sticky-elem">
          <p>
            ????????? ???????????? ???????????? ???????????? ?????? ?????? ?????????, ?????? ?????? ???????????? ???????????? ????????? ??????????????? ????????? ?????? ??????????????? ????????? ????????? ???????????????.
          </p>
          <Pin />
        </DescMessage>
        <DescMessage className="sticky-elem">
          <p>????????? ??? ????????? ?????? KWHong,<br/>????????? ??? KWHong</p>
          <Pin />
        </DescMessage>
      </ScrollSection>
      <ScrollSection className="section-3">
        <MidMeessage>
          <strong>Passion ??????</strong><br/>
          ????????? ???????????? ??????<br/>
          ????????? ????????? ??????.
        </MidMeessage>
        <CanvasCaption>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et suscipit porro inventore veritatis! Quod voluptatibus non provident inventore. Numquam enim eaque fugiat, inventore minus deleniti magni dolor sed rem distinctio.
        </CanvasCaption>
      </ScrollSection>
      <Footer>
        2021?? KWHong
      </Footer>
    </MainContainer>
  );
}

export default MainSection;