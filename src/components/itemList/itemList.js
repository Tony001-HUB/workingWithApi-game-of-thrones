import React, {Component} from 'react';
import './itemList.css';
import GoTService from '../../services/GoTService';
import Spinner from '../spinner';


export default class ItemList extends Component {

    gotService = new GoTService();

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
        
        getData()
            .then((itemList) => {
                this.setState({
                itemList
            });
        });
    }

    renderChar(arr) {
        return arr.map((item, id) => {
            return(
                <li
                key = {id}
                className="list-group-item"
                onClick = {() => this.props.onSelectedCharacter(41 + id)}
                >
                {item.name}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if(!itemList){
            return <Spinner/>
        }

        const allChars = this.renderChar(itemList);

        return (
            <ul className="item-list list-group">
               {allChars}
            </ul>
        );
    }
}