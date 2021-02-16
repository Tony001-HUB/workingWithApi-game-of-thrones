import React, {Component} from 'react';
import gotService from '../../services/gotService'
import './randomChar.css';

export default class RandomChar extends Component {

    constructor(){
        super();
        this.updateCharacter();
    }

    gotService = new gotService();
    state = {
        character: {}
    }

    onCharacterLoaded = (character) =>{
        this.setState({character})
    }

    updateCharacter(){      
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharacterLoaded);
    }

    render() {
        const {character: {name, gender, born, died, culture}} = this.state

        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
