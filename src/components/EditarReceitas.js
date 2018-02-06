import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

let url = window.location.pathname;
let id = url.substr(url.lastIndexOf('/') + 1);

const apiLinkCat = 'http://hojeparajantar.zapto.org/api/category';
const apiLinkReceita = 'http://hojeparajantar.zapto.org/api/article/' + id;

class EditarReceitas extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location.pathname);
        // console.log(this.match.path.id);
        this.state = {
            receitas: [],
            categorias: []
        };
    }




    //Vai buscar as categorias e as receitas
    componentDidMount() {
        this._getData()
            .then((res) => {
                this.setState({
                    categorias: res[0]
                });
            });
        this._getData2()
            .then((res) => {
                this.setState({
                    receitas: res[0]
                });
            });
    }

    //categorias
    _getData = async () => {

        return fetch(apiLinkCat)
            .then(response => response.json())
            .then(function (json) {
                return json.data;
            })
            .catch(error => console.log(error));
    };

    //receitas
    _getData2 = async () => {

        return fetch(apiLinkReceita)
            .then(response => response.json())
            .then(function (json) {
                return json.data;
                console.log(json.data);
            })
            .catch(error => console.log(error));
    };

    //Submete o formulário
    handleUpdateArticle(data) {

        data.preventDefault();

        let formData = new FormData();
        if (this.refs.title.value !== "" && this.refs.description.value === "" && this.refs.image.value === "" && this.refs.fontWebsite.value === "") {
            formData.append("title", this.refs.title.value);
        }
        if (this.refs.description.value !== "" && this.refs.title.value === "" && this.refs.image.value === "" && this.refs.fontWebsite.value === "") {
            formData.append("description", this.refs.description.value);
        }
        if (this.refs.image.value !== "" && this.refs.title.value === "" && this.refs.description.value === "" && this.refs.fontWebsite.value === "") {
            formData.append("image", this.refs.image.value);
        }
        if (this.refs.image.value === "" && this.refs.title.value === "" && this.refs.description.value === "" && this.refs.fontWebsite.value !== "") {
            formData.append("fontWebsite", this.refs.fontWebsite.value);
        }


        if (this.refs.title.value !== "" && this.refs.description.value === "" && this.refs.image.value !== "" && this.refs.fontWebsite.value === "") {
            formData.append("title", this.refs.title.value);
            formData.append("image", this.refs.image.value);
        }
        if (this.refs.title.value !== "" && this.refs.description.value !== "" && this.refs.image.value === "" && this.refs.fontWebsite.value === "") {
            formData.append("title", this.refs.title.value);
            formData.append("description", this.refs.description.value);
        }
        if (this.refs.title.value !== "" && this.refs.description.value === "" && this.refs.image.value === "" && this.refs.fontWebsite.value === "") {
            formData.append("title", this.refs.title.value);
            formData.append("fontWebsite", this.refs.fontWebsite.value);
        }
        if (this.refs.title.value === "" && this.refs.description.value !== "" && this.refs.image.value !== "" && this.refs.fontWebsite.value !== "") {
            formData.append("description", this.refs.description.value);
            formData.append("image", this.refs.image.value);
        }


        if (this.refs.title.value !== "" && this.refs.description.value !== "" && this.refs.image.value !== "" && this.refs.fontWebsite.value !== "") {
            formData.append("title", this.refs.title.value);
            formData.append("description", this.refs.description.value);
            formData.append("image", this.refs.image.value);
            formData.append("fontWebsite", this.refs.fontWebsite.value);
        }


        formData.append("_method", "PUT");

        console.log("title: " + this.refs.title.value + " description: " + this.refs.description.value + " image: ", this.refs.image.value + "fontWebsite: " + this.refs.fontWebsite.value);


        return fetch(apiLinkReceita, {
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
            <section id="EditarReceita" className="section services" data-elink-extension-installed="1.1.5">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-6 col-sm-offset-3">
                            <h3 className="text-right-xs">Editar receita</h3>
                            <p className="text-muted text-right-xs">
                                Por favor preencha o formulário para editar a receita.
                            </p>
                            <div className="form-white">

                                <form role="form" onSubmit={this.handleUpdateArticle.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="title">Título</label>
                                        <input ref="title" type="text" className="form-control" id="title"
                                               placeholder={this.state.receitas.title}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Descrição</label>
                                        <textarea ref="description" type="text" className="form-control"
                                                  id="description"
                                                  placeholder={this.state.receitas.description} name="description">
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="selecionarCat">Escolha a categoria</label>
                                        <select ref="selecionarCat" className="form-control" id="selecionarCat"
                                                name="selecionarCat">

                                            {this.state.categorias.map((categorias, index) => {
                                                return (
                                                    <option value={categorias.id}>{categorias.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Imagem</label>
                                        <input ref="image" type="text" className="form-control" id="image"
                                               placeholder={this.state.receitas.image}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fontWebsite">Fonte</label>
                                        <input ref="fontWebsite" type="text" className="form-control" id="fontWebsite"
                                               placeholder={this.state.receitas.fontWebsite}/>
                                    </div>

                                    <button type="submit" className="btn btn-block btn-color btn-xxl">Alterar
                                    </button>

                                </form>
                                <a href={`/receitas/${id}`}>
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

export default EditarReceitas;
