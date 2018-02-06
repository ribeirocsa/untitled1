import React, {Component} from 'react';

const apiLink = 'http://hojeparajantar.zapto.org/api/user';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }

    // getInitialState() {
    //     return {
    //         name: this.props.name || 'nome',
    //         email: this.props.email || 'email',
    //         password: this.props.password.name || 'password',
    //     }
    // }

    handleSubmit(data) {

        data.preventDefault();

        // return fetch('http://hojeparajantar.zapto.org/api/user', {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     body: formData,
        //     headers: {
        //         'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        //         'Content-Type': 'multipart/form-data'
        //     }

            let formData  = new FormData();
            formData.append("name", this.refs.name.value);
            formData.append("email", this.refs.email.value);
            formData.append("password", this.refs.password.value);

            console.log("Name: " + this.refs.name.value + " Email: " + this.refs.email.value + " Password: ", this.refs.password.value);

            return fetch('http://hojeparajantar.zapto.org/api/user', {
                method: 'POST',
                credentials: 'same-origin',
                body: formData,
                // headers: {
                //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                //     'Content-Type': 'multipart/form-data'
                // }
            }).then(function(response) {
                console.log(response.status);
                console.info(response.body);
            }).catch(err => err);
    }

    render() {
        return (
            <section id="register" className="section services" data-elink-extension-installed="1.1.5">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-6 col-sm-offset-3">
                            <h3 className="text-right-xs">Criar a sua conta</h3>
                            <p className="text-muted text-right-xs">
                                Por favor preencha o formulário para criar uma nova conta.
                            </p>
                            <div className="form-white">
                                <form role="form" onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Nome Completo *</label>
                                        <input ref="name" type="text"
                                               className="form-control"
                                               id="name"
                                               placeholder="O seu nome"
                                               required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input ref="email" type="email" className="form-control" id="email"
                                               placeholder="Insira o seu email"
                                               required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="password2">Password *</label>
                                                <input ref="password" type="password" className="form-control"
                                                       id="password2"
                                                       placeholder="Insira a sua password"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="password2">Confirme a password *</label>
                                                <input type="password" className="form-control" id="password3"
                                                       placeholder="Confirme a sua password"
                                                       required="required"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>* Campos obrigatórios</div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Concordo com os <a href=".html#">Termos do
                                            Serviço
                                        </a> e a
                                            <a href=".html#"> Política de Privacidade</a>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-color btn-xxl">Criar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register;
