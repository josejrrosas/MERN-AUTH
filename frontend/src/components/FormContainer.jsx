import { Container, Row, Col } from "react-bootstrap";
/*gonna wrap login and register form etc..,
so take in prop of children bc whatever we wrap
it in we want it to display in here*/
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} className="card p-5">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
