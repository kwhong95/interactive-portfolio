import { MainContainer } from './elements';
import MainHeader from '../components/header/main-header';
import MainSection from '../sections/main-section';

const MainPage = () => {
  return (
    <MainContainer>
      <MainHeader />
      <MainSection />
    </MainContainer>
  );
}

export default MainPage;