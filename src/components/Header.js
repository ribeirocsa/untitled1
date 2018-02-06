import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
//import Cookie from 'react-native-cookie';

class Header extends Component {

    constructor(props) {
        super(props);
        console.log("Is logged in ? ------>" + sessionStorage.getItem('loggedin'));
        this.state ={
            loggedIn: sessionStorage.getItem('loggedin') === 'true'
        };

        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);

    }

    login() {
        sessionStorage.setItem('loggedin', 'true');

        //here update the state variable

        this.setState({
            loggedIn: true
        });

        console.log("Is logged in ? ------>" + sessionStorage.getItem('loggedin'));
        return (
            <Redirect to={"/profile"}/>
        )
    }

    logout() {
        sessionStorage.setItem('loggedin', 'false');

        //here update the state variable

        this.setState({
            loggedIn: false
        });

        console.log("Is logged in ? ------>" + sessionStorage.getItem('loggedin'));

        localStorage.clear();
        sessionStorage.clear();
        //Cookie.clear();


        return (
            <Redirect to={"/"}/>
        )
    }

    render() {
        if(this.state.loggedIn) {
            return (
                <section className="tophead" role="tophead">
                    <header id="header">
                        <div className="header-content clearfix"><a className="logo" href="/">Hoje para jantar</a>
                            <nav className="navigation" role="navigation">
                                <ul className="primary-nav">
                                    <Link to={{pathname: '/'}}>Home</Link>
                                    <Link to={{pathname: 'portfolio'}}>Receitas</Link>
                                    <Link to={{pathname: 'inserirReceita'}}>Inserir receita</Link>
                                    <Link to={{pathname: 'minhasReceitas'}}>As minhas receitas</Link>
                                    <Link to={{pathname: 'profile'}}>Perfil</Link>
                                    <Link to={{pathname: 'logout'}} onClick={this.logout}>Logout</Link>
                                    {/*<li><a href="/logout" onClick={this.logout}>Logout</a></li>*/}
                                </ul>
                            </nav>
                            <a href="#" className="nav-toggle">Menu<span></span></a></div>
                    </header>
                </section>
            )
        }
        else {
            return (
                <section className="tophead" role="tophead">
                    <header id="header">
                        <div className="header-content clearfix"><a className="logo" href="/">Hoje para jantar</a>
                            <nav className="navigation" role="navigation">
                                <ul className="primary-nav">
                                    <Link to={{pathname: '/'}}>Home</Link>
                                    <Link to={{pathname: 'portfolio'}}>Receitas</Link>
                                    {/*<Link to={{pathname: 'inserirReceita'}}>Inserir receita</Link>*/}
                                    {/*<li><a href="/">Home</a></li>*/}
                                    {/*<li><a href={Portfolio}>Receitas</a></li>*/}
                                    {/*<li><a href="portfolio">Receitas</a></li>*/}
                                    {/*<li><a href="inserirReceita">Inserir receita</a></li>*/}
                                    {/*<li><a href="http://api-teste.dev/oauth/authorize?client_id=7&redirect_uri=http://*/}
                                    {/*localhost/tdi/example-client/callback.html&response_type=code&scope">Login</a></li>*/}

                                    <li>
                                        <a href="http://hojeparajantar.zapto.org/oauth/authorize?
                                    client_id=1
                                    &redirect_uri=http://localhost:3001/callback
                                    &response_type=code
                                    &scope" onClick={this.login}>Login</a></li>
                                    <Link to={{pathname: 'register'}}>Registar</Link>
                                </ul>
                            </nav>
                            <a href="#" className="nav-toggle">Menu<span></span></a></div>
                    </header>
                </section>
            )
        }
    }
}

export default Header;
