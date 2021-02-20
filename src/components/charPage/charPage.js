import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMess from '../errorMess';
import GoTService from '../../services/GoTService';
import RowBlock from '../rowBlock'

export default class extends Component{

    gotService = new GoTService();

    state = {
        onItemSelected: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            charSelected: id
        })
    }


    render() {

        if(this.state.error){
            return <ErrorMess/>
        }

        const itemList = (
                <ItemList  
                onItemSelected={this.onItemSelected}
                getData = {this.gotService.getAllCharacters}
                renderItem = {({name, gender}) => `${name} (${gender})`}
                />
        )

        const charDetails = (
            <CharDetails  charId={this.state.charSelected}>
                <Field field='gender' lable='Gender'/>
                <Field field='born' lable='Born'/>
                <Field field='died' lable='Died'/>
                <Field field='culture' lable='Culture'/> 
            </CharDetails>
        )

        return(
            <RowBlock left={itemList} right={charDetails}/>
        )
    }


}
