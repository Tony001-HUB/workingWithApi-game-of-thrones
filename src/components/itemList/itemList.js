import React, {Component} from 'react';
import gotService from '../../services/gotService'
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        сharacterList: null
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
            .then((сharacterList) => {
                this.setState({
                    сharacterList
            });
        });
    }
    

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name} = item;
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharacterSelected(id)}
                    >
                    {name}
                </li>
            )
        })
    }
    render() {

        const {сharacterList} = this.state;

        if(!сharacterList){
            return <Spinner/>
        }

        const items = this.renderItems(сharacterList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}