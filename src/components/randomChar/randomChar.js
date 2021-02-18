import React, {Component} from 'react';
import './randomChar.css';
import GoTService from '../../services/GoTService';
import Spinner from '../spinner'
import ErrorMess from '../errorMess'

export default class RandomChar extends Component {
 
    gotService = new GoTService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
        this.timeId = setInterval(this.updateChar, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () =>{ 
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMess/> : null
        const loadingData = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char = {char}/> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {loadingData}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;

    return (
        <>
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
        </>
    )
}
