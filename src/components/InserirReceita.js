import React, {Component} from 'react';

const apiLink = 'http://hojeparajantar.zapto.org/api/article';

const apiLinkCat = 'http://hojeparajantar.zapto.org/api/category';

class InserirReceita extends Component {

    constructor(props) {
        super(props);

        this.state = {
            receitas: [],
            categorias: []
        }
    }

    // getInitialState() {
    //     return {
    //         name: this.props.name || 'titulo',
    //         description: this.props.description || 'descrição',
    //         categoryName: this.props.receitas.name || 'categoria',
    //         image: this.props.image || 'image',
    //     }
    // }

    //Vai buscar as categorias
    componentDidMount() {
        this._getData()
            .then((res) => {
                this.setState({
                    categorias: res[0]
                });

            });
    }

    _getData = async () => {

        return fetch(apiLinkCat)
            .then(response => response.json())
            .then(function (json) {
                return json.data;
            })
            .catch(error => console.log(error));
    };


    //Submete o formulário
    handleSubmit(data) {
        data.preventDefault();
        console.log('inserir receita form submission data');

        let formData  = new FormData();
        formData.append("title", this.refs.title.value);
        formData.append("description", this.refs.description.value);
        formData.append("category_id", this.refs.selecionarCat.value);
        formData.append("image", this.refs.image.value);
        formData.append("fontWebsite", this.refs.fontWebsite.value);

        console.log("title: " + this.refs.title.value + " description: " + this.refs.description.value + " category_id: ", this.refs.selecionarCat.value);

        return fetch('http://hojeparajantar.zapto.org/api/article', {
            method: 'POST',
            credentials: 'same-origin',
            body: formData,
            headers: {
                'Authorization': localStorage.getItem('token'),
            //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            //     'Content-Type': 'multipart/form-data'
            //    'Authorization': token
            }
        }).then(function(response) {
            console.log(response.status);
            console.info(response.body);
        }).catch(err => err);
    }

    render() {
        return (
            <section id="inserirReceita" className="section services" data-elink-extension-installed="1.1.5">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-6 col-sm-offset-3">
                            <h3 className="text-right-xs">Inserir receita</h3>
                            <p className="text-muted text-right-xs">
                                Por favor preencha o formulário para inserir uma nova receita.
                            </p>
                            <div className="form-white">

                                <form role="form" onSubmit={this.handleSubmit.bind(this)} >
                                    <div className="form-group">
                                        <label htmlFor="title">Título *</label>
                                        <input ref="title" type="text" className="form-control" id="title"
                                               placeholder="Título"
                                               required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Descrição *</label>
                                        <textarea ref="description" type="text" className="form-control" id="description"
                                                  placeholder="Descrição" name="description"
                                                  required="required">
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="selecionarCat">Escolha a categoria *</label>
                                        <select ref="selecionarCat" className="form-control" id="selecionarCat" name="selecionarCat"
                                                required="required">

                                            {this.state.categorias.map((categorias, index) => {
                                            return (
                                            <option value={categorias.id}>{categorias.name}</option>
                                            )
                                        })}
                                            {/*<option value="1">Entradas</option>*/}
                                            {/*<option value="2">Carne</option>*/}
                                            {/*<option value="3">Peixe</option>*/}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Imagem *</label>
                                        <input ref="image" type="text" className="form-control" id="image"
                                               placeholder="Image url"
                                               required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fontWebsite">Fonte</label>
                                        <input ref="fontWebsite" type="text" className="form-control" id="fontWebsite"
                                               placeholder="Website de origem (url)"/>
                                    </div>
                                    <div>* Campos obrigatórios</div>
                                    {/*<div className="form-group input-group image-preview">*/}
                                        {/*<div className="input-group image-preview">*/}
                                            {/*<input type="text" className="form-control image-preview-filename"*/}
                                                   {/*disabled="disabled"/>*/}
                                            {/*/!*<img src="./public/images/upload-arrow.png"></img>*!/*/}

                                            {/*<span className="input-group-btn">*/}
                                                    {/*<div className="btn btn-primary-image image-preview-input">*/}
                                                        {/*<span className="glyphicon glyphicon-folder-open"></span>*/}
                                                        {/*<span className="image-preview-input-title">Browse</span>*/}
                                                        {/*<input ref="image" type="file" accept="image/png, image/jpeg, image/gif"*/}
                                                               {/*name="input-file-preview"/>*/}
                                                    {/*</div>*/}
                                                {/*</span>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    <button type="submit" className="btn btn-block btn-color btn-xxl">Inserir
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

export default InserirReceita;
