import React, {Component} from 'react';

class Profile extends Component {

    constructor(props) {
        super(props);

        console.log(sessionStorage.getItem('user_name'));
        console.log(sessionStorage.getItem('user_id'));


        // this.cancelUpdate = this.cancelUpdate.bind(this);
    }


    // handleSubmit(data) {
    //
    //     data.preventDefault();
    //
    //     let formData = new FormData();
    //     formData.append("name", this.refs.name.value);
    //     formData.append("email", this.refs.email.value);
    //     formData.append("password", this.refs.password.value);
    //
    //     console.log("Name: " + this.refs.name.value + " Email: " + this.refs.email.value + " Password: ", this.refs.password.value);
    //
    //     return fetch('http://hojeparajantar.zapto.org/api/user', {
    //         method: 'POST',
    //         credentials: 'same-origin',
    //         body: formData,
    //         // headers: {
    //         //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //         //     'Content-Type': 'multipart/form-data'
    //         // }
    //     }).then(function (response) {
    //         console.log(response.status);
    //         console.info(response.body);
    //     }).catch(err => err);
    // }

    handleUpdateUser(data) {

        data.preventDefault();

        let formData = new FormData();
        if (this.refs.name.value !== "" && this.refs.email.value === "" && this.refs.password.value === "") {
            formData.append("name", this.refs.name.value);
        }
        if (this.refs.email.value !== "" && this.refs.name.value === "" && this.refs.password.value === "") {
            formData.append("email", this.refs.email.value);
        }
        if (this.refs.password.value !== "" && this.refs.name.value === "" && this.refs.email.value === "") {
            formData.append("password", this.refs.password.value);
        }

        if (this.refs.name.value !== "" && this.refs.email.value === "" && this.refs.password.value !== "") {
            formData.append("name", this.refs.name.value);
            formData.append("password", this.refs.password.value);
        }
        if (this.refs.name.value !== "" && this.refs.email.value !== "" && this.refs.password.value === "") {
            formData.append("name", this.refs.name.value);
            formData.append("email", this.refs.email.value);
        }

        if (this.refs.name.value === "" && this.refs.email.value !== "" && this.refs.password.value !== "") {
            formData.append("email", this.refs.email.value);
            formData.append("password", this.refs.password.value);
        }

        if (this.refs.name.value !== "" && this.refs.email.value !== "" && this.refs.password.value !== "") {
            formData.append("name", this.refs.name.value);
            formData.append("email", this.refs.email.value);
            formData.append("password", this.refs.password.value);
        }


        formData.append("_method", "PUT");

        console.log("Name: " + this.refs.name.value + " Email: " + this.refs.email.value + " Password: ", this.refs.password.value);


        return fetch('http://hojeparajantar.zapto.org/api/user/' + sessionStorage.getItem('user_id'), {
            method: 'POST',
            credentials: 'same-origin',
            body: formData,
            headers: {
                'Authorization': localStorage.getItem('token')
                // 'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
                // 'Content-Type': 'multipart/form-data'
            }
        }).then(function (response) {
            console.log(response.status);
            console.info(response.body);
        }).catch(err => err);
    }

    render() {

        return (
            <section id="profile" className="section services" data-elink-extension-installed="1.1.5">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-6 col-sm-offset-3">
                            <h3 className="text-right-xs">Dados de Perfil</h3>
                            <p className="text-muted text-right-xs">
                                Caso pretenda alterar os seus dados, por favor preencha os campos a alterar.</p>
                            <div className="form-white">
                                <form role="form" onSubmit={this.handleUpdateUser.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Nome Completo</label>
                                        <input ref="name" type="text"
                                               className="form-control"
                                               id="name"
                                               placeholder={sessionStorage.getItem('user_name')}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input ref="email" type="email" className="form-control" id="email"
                                               placeholder={sessionStorage.getItem('user_email')}/>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="password2">Password</label>
                                                <input ref="password" type="password" className="form-control"
                                                       id="password2"
                                                       placeholder="Para alterar, insira uma nova password"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="password2">Confirme a password</label>
                                                <input type="password" className="form-control" id="password3"
                                                       placeholder="Confirme a nova password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-color btn-xxl">Alterar
                                    </button>

                                </form>
                                <a href="/profile">
                                    <button type="button" className="btn btn-block btn-color btn-xxl">Cancelar</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Profile;
