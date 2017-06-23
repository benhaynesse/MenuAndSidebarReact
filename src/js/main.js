import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// require('../style/style.css');


class App extends Component{
    render(){
        return <h1>Hello Friends</h1>
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));