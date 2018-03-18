import "bulma";
import React from "react";
import ReactDOM from 'react-dom';

const Navbar = ({login}) => {
    return <div className="section">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-menu">
                            <div className="navbar-start">
                                <h1 className="title navbar-item">WarsawJS Workshop: Topics Manager</h1>
                            </div>
                            {login && <div className="navbar-end">
                                <button id="login" className="button is-primary">Witaj, {login}</button>
                            </div>}                            
                        </div>
                    </nav>
                    <AddTopic />
                </div>
            </div>
}
const AddTopic = () => {
    return  <form className="field is-grouped">
                <div className="control is-expanded">
                    <input className="input" id="topic" type="text" placeholder="Propose your topic!"></input>
                </div>
                <div className="control">
                    <button id="addtopic" className="button is-primary">Propose new topic</button>
                </div>
            </form>
}
const CartList = (props) => {
    return <div className="columns is-multiline is-centered">
        {props.list.map(workshop => <Workshop key={workshop.topic} topicname={workshop.topic} likes={workshop.likes} treners={workshop.treners} />)}
    </div>
}
const Workshop = ({topicname, likes, treners}) => {
    return <div className="column column is-3">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {topicname}
                        </p>
                        <div className="media-right">
                            <button className="delete"></button>
                        </div>
                    </header>
                    <div className="card-content">
                        <div className="box-media">
                            {treners.map(trener => <Trener key={trener.id} name={trener.name} imgsrc={trener.imgsrc} />)}
                        </div>
                    </div>
                    <footer className="card-footer-item">
                        <span className="icon">
                            <i className="fas fa-heart"></i> {likes}
                        </span>
                    </footer>
                </div>
            </div>
}
const Trener = ({imgsrc, name}) => {
    return <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src={imgsrc} />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{name}</strong>
                        </p>
                        <div className="media-right">
                            <button className="delete"></button>
                        </div>
                    </div>
                </div>
            </article>
}
var cardlist = [
    {'topic': 'ReactJS', 'likes': '1', 'treners': [
        {'id': '0', 'name': 'Linus Torvalds', 'imgsrc': '/img/128x128.png'},
        {'id': '1', 'name': 'Geralt z Rivii', 'imgsrc': '/img/128x128.png'}
    ]}, 
    {'topic': 'AngularJS', 'likes': '7', 'treners': [
        {'id': '3', 'name': 'Linus Torvalds', 'imgsrc': '/img/128x128.png'},
        {'id': '4', 'name': 'Geralt z Rivii', 'imgsrc': '/img/128x128.png'}
    ]}];
//var trainerlist = [{'name': 'Linus Torvalds', 'imgsrc': '/img/128x128.png'}, {'name': 'Kosiarz Umysłów', 'imgsrc': '/img/128x128.png'}];

const App = (object) => {
    return <div> 
            <Navbar login={object.login} />
            <CartList list={cardlist} />
        </div>
}

ReactDOM.render(<App login="enkidu" topicname="ReactJS" likes="9" />, document.getElementById('app'));