import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class NotFound extends Component {
    render() {
        return (
            <section className="pt-4">
                <Container>
                    <Row>
                        <Col xs={{span: 6, offset: 3}}>
                            <h3 className={"text-center"}>404 Not Found</h3>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default NotFound;

