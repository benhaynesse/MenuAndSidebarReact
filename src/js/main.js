import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MandS from './MenuAndSidebar';


import style from '../style/main.css';



class App extends Component{

    constructor(){
        super();
        this.state={
            sidebar:false            
        } 
    }


    toggleSideBar(){
        let status = !this.state.sidebar;
        this.setState({sidebar:status});
    }

    render(){
        let navItems = ["Home", "About", "Services", "Contact", "TESTING"];

        if(this.state.sidebar){
            document.getElementById('main').style.marginLeft = '250px';
        }else{
            if(document.getElementById('side-menu')){
                document.getElementById('main').style.marginLeft = '0';
            }            
        }

        return (
            <div>
            <MandS
            navItems={navItems} 
            status={this.state.sidebar}
            toggleSideBar={()=>this.toggleSideBar()}                       
            />
            <div id="main">
                MAIN CONTENT
            </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));