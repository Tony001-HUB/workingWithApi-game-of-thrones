import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMess from '../errorMess';
import CharPage from '../charPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GoTService from '../../services/GoTService';


export default class App extends Component{

    gotService = new GoTService();

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
                <Row>
                    <Col md='6'>
                        <ItemList onItemSelected={this.onItemSelected}
                        getData = {this.gotService.getAllBooks}
                        renderItem ={(item) => item.name}
                        />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.charSelected}/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onItemSelected={this.onItemSelected}
                        getData = {this.gotService.getAllHouses}
                        renderItem ={(item) => item.name}
                        />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.charSelected}/>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
};