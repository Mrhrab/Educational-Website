import React, { useEffect, useState } from 'react';
import ServicesCourse from '../ServicesCourse/ServicesCourse';
import {Container} from 'react-bootstrap';

const Services = () => {
    const [servicesCourse, setServicesCourse] = useState([]);
    useEffect(() => {
        fetch('./servicesCourse.json')
        .then(res => res.json())
        .then(data => setServicesCourse(data))
    }, [])
    return (
        <div>
            
            <Container>
            {
                servicesCourse.map(sCourse =><ServicesCourse
                key={sCourse.key}
                sCourse={sCourse}
                ></ServicesCourse> )
            }
            
            </Container>
        </div>
    );
};

export default Services;