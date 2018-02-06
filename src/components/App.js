import React, {Component} from 'react';
import List from "./List";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import CategoryDetail from "./CategoryDetail";
import NavBar from "./NavBar";
import Callback from './callback';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="panel panel-default">
                        <div>
                            <Route path='/' component={NavBar}/>

                        </div>

                        <div className="panel-body">
                            <Switch>
                                <Route exact path='/' component={List}/>

                                <Route path='/category/:number' component={CategoryDetail}/>

                                <Route path='/item/:number' component={ItemDetail}/>

                                <Route path='/callback' component={Callback}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;