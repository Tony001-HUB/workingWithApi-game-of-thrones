import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService'


export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        chzar: null
    }

    componentDidMount(){
       this.updateCharacter();
    }

    updateCharacter(){
        const {characterId} = this.props;
        if(!characterId){return;}

        this.gotService.getCharacter(characterId)
            .then((item) => {
                this.setState({item})
        });
    }

    render() {

        if(!this.setState.character){
            return <span className='select-error'>pls select a character</span>
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