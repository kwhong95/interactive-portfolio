import React, { useEffect, useRef, useState } from 'react';
import { 
  MainContainer,
  ScrollSection, 
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
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [positonY, setPositionY] = useState<number>(0);
  const [totalScrollHeight, setTotalScrollHeight] = useState<number>(0);
  let prevScrollHeight: number = 0;

  const setLayout = () => {
    for (let i = 0; i < mainSceneInfo.length; i++ ) {
      mainSceneInfo[i].objs.container = mainRef.current?.childNodes[i];
      if (i === 0) { 
        mainSceneInfo[i].objs.messageA = mainRef.current?.childNodes[i].childNodes[i + 1];
        mainSceneInfo[i].objs.messageB = mainRef.current?.childNodes[i].childNodes[i + 2];
        mainSceneInfo[i].objs.messageC = mainRef.current?.childNodes[i].childNodes[i + 3];
        mainSceneInfo[i].objs.messageD = mainRef.current?.childNodes[i].childNodes[i + 4];
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
      // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
      if (currentScene === 0) return;
      setCurrentScene(v => v - 1);
    }

    playAnimation();
  }

  const calcValues = (values: any, currentYOffset: number) => {
    let rv;
    // 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
    const scrollHeight = mainSceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    if (values.length === 3) {
      // start ~ end 사이에 에니메이션 실행
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
        <MainMessage className="sticky-elem">
          <p>온전히 빠져들게하는<br />최고의 페이지</p>
        </MainMessage> 
        <MainMessage className="sticky-elem">
          <p>사용자의 경험을 극대화하는<br />유동적인 UI</p>
        </MainMessage>
        <MainMessage className="sticky-elem">
          <p>어느 기기에서나 접근 가능한<br />반응형 디자인</p>
        </MainMessage>
        <MainMessage className="sticky-elem">
          <p>보이는 즐거움<br />재밌는 경험</p>
        </MainMessage>
      </ScrollSection>
      <ScrollSection className="section-1">
        <p className="desc1">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur ad repudiandae recusandae cupiditate ipsam quibusdam vel delectus aperiam voluptatibus et, iste aspernatur labore magnam tempore nam vitae, quas doloremque explicabo corporis exercitationem veniam accusamus. A cumque, in suscipit sit commodi cum officia nam ad iusto eum ratione unde quidem esse perferendis autem aperiam ipsam itaque vel aspernatur? Quas dolorum explicabo nihil rerum nisi velit blanditiis, voluptates odit optio cupiditate corporis, nulla sapiente reprehenderit quibusdam similique totam ratione, quo consequatur quae voluptatem magnam! Ab officiis facilis corporis quisquam quae aut beatae illum rerum eligendi recusandae velit itaque blanditiis, tempore hic eveniet ipsum saepe aliquam sequi veniam mollitia deleniti iste fugiat rem autem? Voluptatum natus placeat quo quas quibusdam quam facere iusto sit. In reiciendis tenetur ab libero earum suscipit ea, quam tempore quibusdam cupiditate officiis! Quaerat ducimus blanditiis quam, rerum ad facilis inventore dolore nisi aperiam ab modi exercitationem ut, quas laudantium dolor nam doloremque animi ex suscipit veniam enim. Exercitationem possimus est asperiores aut earum dolore dolorem placeat libero modi accusantium autem non aliquid ea maiores quos explicabo, debitis ullam hic! Placeat neque recusandae temporibus quo, similique animi? Illum asperiores quis obcaecati dolore tempore culpa officiis non, suscipit harum!
        </p>
      </ScrollSection>
      <ScrollSection className="section-2">
        <MainMessage className="sticky-elem">
          <p className="desc2">
            <small>즐거운 경험</small>
            혁신을 제공하다
          </p>
        </MainMessage>
        <DescMessage className="sticky-elem">
          <p>
            편안한 디자인과 완성하는 디테일한 여러 구성 요소들, 저는 이를 하나하나 고민하고 살피고 재구성하는 과정을 통해 사용자에게 최고의 경험을 선사합니다.
          </p>
          <Pin />
        </DescMessage>
        <DescMessage className="sticky-elem">
          <p>디자인 앤 퀄리티 오브 KWHong,<br/>메이드 인 KWHong</p>
          <Pin />
        </DescMessage>
      </ScrollSection>
      <ScrollSection className="section-3">
        <MidMeessage>
          <strong>Passion 열정</strong><br/>
          생각을 표현하는 방법<br/>
          당신의 최고의 무기.
        </MidMeessage>
        <CanvasCaption>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et suscipit porro inventore veritatis! Quod voluptatibus non provident inventore. Numquam enim eaque fugiat, inventore minus deleniti magni dolor sed rem distinctio.
        </CanvasCaption>
      </ScrollSection>
      <Footer>
        2021© KWHong
      </Footer>
    </MainContainer>
  );
}

export default MainSection;