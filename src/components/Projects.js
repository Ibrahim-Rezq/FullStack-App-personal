import React, { useState, useEffect } from 'react';
import { useFetch } from '../util/useFetch';
import { Col, Row, Container } from 'react-bootstrap';

const Projects = () => {
  const url = '/api/Projects';
  const [loading, data] = useFetch(url);
  const [projData, setProjData] = useState([]);
  useEffect(() => {
    loading || setProjData(data);
    console.log(projData);
  }, [loading]);

  return (
    <div className='veiw'>
      <Container>
        <Row>
          {loading ||
            projData.map((proj) => {
              return <Col></Col>;
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
