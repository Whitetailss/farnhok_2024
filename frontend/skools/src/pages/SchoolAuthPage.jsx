import React from 'react';
import { Login } from '../component/schoolCms/login';
import { Jumbotron, Button, Container } from 'reactstrap';

const SchoolAuthPage = () => {
    return (
        <div>
            {/* <Jumbotron className='hero' fluid> */}
                <Container className='hero' fluid>
                    <h1>Build A Brand for Your School has never been so much easier</h1>
                    <p>Build A Brand for Your School has never been so much easier</p>
                    <hr />
                    <ul>
                        <li>Inuitive User Interface</li>
                        <li>Consistent Color and Design Scheme</li>
                        <li>Engaging Parents Community</li>
                    </ul>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Container>
            {/* </Jumbotron> */}
            <Login />
        </div>
    );
};

export default SchoolAuthPage