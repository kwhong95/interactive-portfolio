import { Container } from './elements';

const Video: React.FC = () => {
  return (  
    <Container>
      <video src="/typing.mp4" muted/>
    </Container>
  );
}

export default Video;