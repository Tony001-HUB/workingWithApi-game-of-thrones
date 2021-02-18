import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class App extends Component{

    state = {
        toggleForm: true,
        charSelected: 120
    }

    toggleButton = () => {
        this.setState((state) => {
            return{
                toggleForm: !state.toggleForm 
            }
        });
    }

    onSelectedCharacter = (id) => {
        this.setState({
            charSelected: id
        })
    }

    render(){

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
                <Row>
                    <Col md='6'>
                        <ItemList  onSelectedCharacter={this.onSelectedCharacter}/>
                    </Col>
                    <Col md='6'>
                    <CharDetails  charId={this.state.charSelected}/>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
};