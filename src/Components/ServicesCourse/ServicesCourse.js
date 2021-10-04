import React from 'react';
import { Card } from 'react-bootstrap';

const ServicesCourse = (props) => {
    const {name, picture, email, address, about} = props.sCourse;
    return (
        <div>
             <Card className="mt-5 ">
                    
                   <div className="d-flex ">
                        <div>
                <Card.Img variant="top" className="w-100 h-100" src={picture} />
                </div>
                    <div>
                        <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p><big>Campus:</big>{address}</p>
    
                    <Card.Text>
                        Description{about}
                    </Card.Text>
                    </Card.Body>
                    </div>
                   </div>
                </Card>
        </div>
    );
};

export default ServicesCourse;