import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

const apiLink = 'http://hojeparajantar.zapto.org/api/user';

class Register extends Component {


    constructor(props) {
        super(props);

        this.state = {
            users: [],
            redirect: false,
        }
    }

    getInitialState() {
        return {
            // name: this.props.name || 'name',
            email: this.props.email || 'email',
            password: this.props.password.name || 'password',
        }
    }

    handleSubmit(data) {

        data.preventDefault();

            let formData  = new FormData();
            formData.append("email", this.refs.email.value);
            formData.append("password", this.refs.password.value);

            console.log("Email: " + this.refs.email.value + " Password: ", this.refs.password.value);

            return fetch('http://hojeparajantar.zapto.org/login', {
                method: 'POST',
                // method: 'GET',
                credentials: 'same-origin',
                body: formData,
                // headers: {
                //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                //     'Content-Type': 'multipart/form-data'
                // }
            }).then(function(response) {
                console.log(response.status);
                console.info(response.body);

                if (response.status === 400) {


                    this.setState({
                        redirect: false,
                    })
                }
                else {
                    this.setState({
                        redirect: true,
                    })
                }
            }).catch(err => err);


    }

    render() {

        if (this.state.redirect) {
        // if (response.status === 400) {
        //     return <Redirect to="../app.js" />;
            return (<div>teste</div>)
        }

        else {
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
                                    <form role="form" onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" ref="email"
                                                   className="form-control" id="email"
                                                   placeholder="Insira o seu email"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" ref="password"
                                                   className="form-control" id="password"
                                                   placeholder="Insira a sua password"/>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> Lembrar-me
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-block btn-color btn-xxl">Entrar
                                        </button>
                                    </form>
                                    <hr/>
                                    <p><a href=".html#" id="lost-btn">Perdeu a sua password?</a></p>
                                    <div className="hidden" id="lost-form">
                                        <p>Insira o seu endereço de email e posteriormente será enviado um email com um
                                            link
                                            para repor a sua password.</p>
                                        <form role="form">
                                            <div className="form-group">
                                                <label htmlFor="email-lost">Email</label>
                                                <input type="email" ref="emailLost" className="form-control" id="email-lost"
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
}

export default Register;
