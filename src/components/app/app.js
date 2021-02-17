import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';

export default class App extends Component {
    state = {
        showRandomChar: true,
        selectedCharacter: 130
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return{
                showRandomChar: !state.showRandomChar
            }
        });
    }

    onCharacterSelected = (id) =>{
        this.setState({
            selectedCharacter: id
        });
    }

    render(){
        const character = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                            <button 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>show / hide random character    
                            </button>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {character}
                        </Col>           
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharacterSelected={this.onCharacterSelected} />
                        </Col>
                        <Col md='6'>
                            <CharDetails characterId={this.state.selectedCharacter}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};