import React, {Component} from 'react';
import './itemList.css';
import GoTService from '../../services/GoTService';
import Spinner from '../spinner';


export default class ItemList extends Component {


    gotService = new GoTService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                charList
            });
        });
    }

    renderChar(arr) {
        return arr.map((item, id) => {
            return(
                <li
                key = {id}
                className="list-group-item"
                onClick = {() => this.props.onSelectedCharacter(id)}
                >
                {item.name}
                </li>
            )
        })
    }

    render() {


        const {charList} = this.state;

        if(!charList){
            return <Spinner/>
        }

        const allChars = this.renderChar(charList);

        return (
            <ul className="item-list list-group">
               {allChars}
            </ul>
        );
    }
}