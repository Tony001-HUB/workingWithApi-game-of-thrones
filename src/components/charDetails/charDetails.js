import React, {Component} from 'react';
import './charDetails.css';
import GoTService from '../../services/GoTService';

export default class CharDetails extends Component {

    gotService = new GoTService();

    state = {
        char: null
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) {
            this.updateChar();
        }

    }

    componentDidMount() {
        this.updateChar();
    }
    
    updateChar () {
        const {charId} = this.props;

        if(!charId){
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char
                })
            })
    }

    render() {

        if(!this.state.char){
            return <span className = 'char-details'>Click on the character, pls</span>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}