import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMess from '../errorMess';
import CharPage from '../charPage';


export default class App extends Component{

    state = {
        toggleForm: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }


    toggleButton = () => {
        this.setState((state) => {
            return{
                toggleForm: !state.toggleForm 
            }
        });
        
    }

    render(){

        if(this.state.error){
            return <ErrorMess/>
        }

        const toggleForm = this.state.toggleForm ;
        const char = toggleForm ? <RandomChar/> : null;

        return (
            <> 
            <Container>
                <Header />
            </Container>
            <Container>
            <button onClick={this.toggleButton}> click me </button>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {char}
                    </Col>
                </Row>
                <CharPage/>
            </Container>
            </>
        );
    }
};