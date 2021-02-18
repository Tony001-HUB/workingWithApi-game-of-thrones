import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMess from '../errorMess';


export default class extends Component{

    state = {
        onSelectedCharacter: null,
        error: false
    }


    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onSelectedCharacter = (id) => {
        this.setState({
            charSelected: id
        })
    }


    render() {

        if(this.state.error){
            return <ErrorMess/>
        }

        return(
            <>
                <Row>
                    <Col md='6'>
                        <ItemList  onSelectedCharacter={this.onSelectedCharacter}/>
                    </Col>
                    <Col md='6'>
                    <CharDetails  charId={this.state.charSelected}/>
                    </Col>
                </Row>
            </>
        )
    }


}
