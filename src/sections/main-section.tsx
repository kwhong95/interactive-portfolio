import { 
  ScrollSection, 
  MainMessage, 
  DescMessage,
  MidMeessage,
  Pin,
  CanvasCaption,
  Footer
} from './elements';

const MainSection: React.FC = () => {
  return (
    <>
      <ScrollSection className="0">
        <h1>UX Developer</h1>
        <MainMessage>
          <p>온전히 빠져들게하는<br />최고의 페이지</p>
        </MainMessage>
        <MainMessage>
          <p>사용자의 경험을 극대화하는<br />유동적인 UI</p>
        </MainMessage>
        <MainMessage>
          <p>어느 기기에서나 접근 가능한<br />반응형 디자인</p>
        </MainMessage>
        <MainMessage>
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
        <MainMessage>
          <p className="desc2">
            <small>즐거운 경험</small>
            혁신을 제공하다
          </p>
        </MainMessage>
        <DescMessage>
          <p>
            편안한 디자인과 완성하는 디테일한 여러 구성 요소들, 저는 이를 하나하나 고민하고 살피고 재구성하는 과정을 통해 사용자에게 최고의 경험을 선사합니다.
          </p>
          <Pin />
        </DescMessage>
        <DescMessage>
          디자인 앤 퀄리티 오브 KWHong,<br/>메이드 인 KWHong
        </DescMessage>
        <Pin />
      </ScrollSection>
      <ScrollSection id="4">
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
    </>
  );
}

export default MainSection;