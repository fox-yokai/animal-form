import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import Intro from '../components/intro';

class DogForm extends Component {

    state = {
        name: '',
        breed: '',
        date: ''
    }

    setName = event => {
        this.setState({
            name: event.target.value
        });
    }

    setDate = event => {
        this.setState({
            date: event.target.value
        });
    }

    setBreed = event => {
        this.setState({
            breed: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const {
            name,
            date
        } = this.state;

        alert(`Appointment created for ${name}
        On ${date}
        `)
    }

    render() {

        const {
            name,
            breed,
            date
        } = this.state;

        return (
            <>
            <br/>
            <Container>
                <Row>
                    <Col md={{span: 7, offset: 3}}>
                        <Jumbotron>
                            <Intro />
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <h2>Dog Information</h2>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="input"
                                        value={name}
                                        placeholder="Name"
                                        onChange={this.setName}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBirth">
                                    <Form.Label>Birthday</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridBreed">
                                        <Form.Label>Breed</Form.Label>
                                        <Form.Control 
                                            as="select"
                                            value={breed}
                                            onChange={this.setBreed}
                                        >
                                            <option>Choose...</option>
                                            <option>Affenpinscher</option>
                                            <option>Akita</option>
                                            <option>Huskey</option>
                                            <option>German Shepard</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridColor">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control placeholder="Enter Color" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridSex">
                                       <Form.Label>Sex</Form.Label>
                                       <Form.Check 
                                            type="radio"
                                            label="Male"
                                            name="formHoriRadios"
                                            ids="formHoriRadios1"
                                       />
                                       <Form.Check 
                                            type="radio"
                                            label="Female"
                                            name="formHoriRadios"
                                            ids="formHoriRadios1"
                                       />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridAltered">
                                    <Form.Label>Altered</Form.Label>
                                       <Form.Check 
                                            type="radio"
                                            label="Yes"
                                            name="formHoriRadios2"
                                            ids="formHoriRadios2"
                                       />
                                       <Form.Check 
                                            type="radio"
                                            label="No"
                                            name="formHoriRadios2"
                                            ids="formHoriRadios2"
                                       />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group>
                                    <Form.Label>Does your dog have any known allergies or reactions to any vaccines or medications?</Form.Label>
                                    <Form.Control as="textarea" rows="3"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Schedule Appointment</Form.Label>
                                    <Form.Control type="date" value={date} onChange={this.setDate} />
                                </Form.Group>

                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }

}

export default DogForm