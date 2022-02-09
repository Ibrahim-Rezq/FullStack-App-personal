import React from 'react';
import ContactForm from './ContactForm';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <section className='veiw'>
      <Container className='text-primary'>
        <Row>
          <Col className='mx-auto py-3' md={8}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
