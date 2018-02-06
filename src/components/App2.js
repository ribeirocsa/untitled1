import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CategoryDetail from "./CategoryDetail";
import Header from "./Header";
import Article from "./Article";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Register from "./Register";
import Login2 from "./Login2";
import Logout from "./Logout";
import MinhasReceitas from "./MinhasReceitas";
import InserirReceita from "./InserirReceita";
import Slider from "./Slider";
import Callback from "./callback";
import EditarReceitas from "./EditarReceitas";

class App2 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="header-content">
                        <Route path='/' component={Header}/>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <Switch>
                                <Route path='/category/:id' component={CategoryDetail}/>
                                <Route path='/article/:id' component={Article}/>
                                <Route path='/login2' component={Login2}/>
                                <Route path='/logout' component={Logout}/>
                                <Route path='/register' component={Register}/>
                                <Route path='/portfolio' component={Portfolio}/>
                                <Route path='/profile' component={Profile}/>
                                <Route path='/inserirReceita' component={InserirReceita}/>
                                <Route path='/minhasReceitas' component={MinhasReceitas}/>
                                <Route path='/editarReceitas' component={EditarReceitas}/>
                                <Route path='/callback' component={Callback}/>
                            </Switch>

                            <Route exact path='/' component={Slider}/>
                            <Route exact path='/' component={Portfolio}/>

                        </div>
                    </div>
                    {/*<div className="footer">*/}
                        {/*<Route path='/' component={Footer}/>*/}
                    {/*</div>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App2;