import React, { useState, useEffect } from 'react';
import Course from '../Course/Course';
import {Container} from 'react-bootstrap';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
   
    useEffect(()=>{
        fetch('./homeCourse.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
        
            <div className="background ">
                <h1 className="text-center text-warning title-size">Capital Primary Education Center</h1>
                <h2 className="text-center sec-title">Enroll!! With worlds best courses </h2>
            </div>
            
            <Container >

                <h2 className="mt-5">Our most popular courses:-</h2>
                
                {
                courses.map( course => <Course
                key={courses.key}
                course={course}
                ></Course>)
            }
            </Container>
        </div>
    );
};

export default Home;