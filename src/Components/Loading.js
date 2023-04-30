import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const Loading = () => {
  return (
    <Container>
      <Spinner animation="border" variant="info" />
    </Container>
  );
};

export default Loading;