import React, {Component} from 'react';
import {PostData} from '../components/services/PostData.js';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        PostData('login', this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON);
        });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <section id="login" className="section services" data-elink-extension-installed="1.1.5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <h3>Entrar na sua conta</h3>
                            <p className="text-muted">
                                Por favor preencha o formulário com os seus dados de acesso.
                            </p>
                            <div className="form-white">
                                <form role="form" onSubmit={this.login}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" ref="email" className="form-control" id="email"
                                               placeholder="Insira o seu email"
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" ref="password" className="form-control" id="password"
                                               placeholder="Insira a sua password"
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Lembrar-me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-color btn-xxl"
                                            >Entrar</button>
                                            {/*onClick={this.login}>Entrar</button>*/}
                                </form>
                                <hr/>
                                <p><a href=".html#" id="lost-btn">Perdeu a sua password?</a></p>
                                <div className="hidden" id="lost-form">
                                    <p>Insira o seu endereço de email e posteriormente será enviado um email com um link
                                        para repor a sua password.</p>
                                    <form role="form">
                                        <div className="form-group">
                                            <label htmlFor="email-lost">Email</label>
                                            <input type="email" ref="email" className="form-control" id="email-lost"
                                                   placeholder="Enter email"/>
                                        </div>
                                        <button type="submit" className="btn btn-default">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;
