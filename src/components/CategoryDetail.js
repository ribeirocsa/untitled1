import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const apiLink = 'http://localhost/laravel/laravel-intro/public/api/article';

// const apiLink = 'http://hojeparajantar.zapto.org/api/article';

class CategoryDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            receitas: [],
        };

        this._getData()
            .then((res) => {
                this.setState({
                    receitas: res[0]
                });

            });
    }

    _getData = async () => {
        return fetch(apiLink)
            .then(response => response.json())
            .then(function (json) {
                return json.data;
            })
            .catch(error => console.log(error));
    }

    render() {
        let receitasFiltradosPorCategoria = this.state.receitas;

        if (this.state.receitas.length > 0) {
            receitasFiltradosPorCategoria = this.state.receitas.filter(
                (receita) => {
                    return receita.category_id == this.props.match.params.id;
                }
            );
        }

        if (receitasFiltradosPorCategoria.length > 0) {
            return (
                <section id="category" className="section portfolio">
                    <div className="container-fluid">
                        <div className="row">

                            {receitasFiltradosPorCategoria.map((receita, index) => {
                                return (
                                    <div className="col-sm-6 portfolio-item">
                                        <a href={`/article/${receita.id}`} className="portfolio-link">
                                            <div className="caption">
                                                <div className="caption-content">
                                                    <h3 className="sliderH3">{receita.title}</h3>
                                                </div>
                                            </div>
                                            <img src={receita.image} className="img-responsive" alt={receita.name}/>
                                        </a>
                                    </div>
                                    // </div>
                                )

                                // <ListItem
                                //     id={receita.id}
                                //     title={receita.title}
                                //     description={receita.description}
                                //     category_id={receita.category_id}
                                //     name={receita.name}
                                //     image={ receita.image }
                                //     key={index}/>
                            })}
                        </div>
                    </div>
                </section>
            );
        }
        else {
            return (
                <section id="messageCatDetail" className="section messages services" data-elink-extension-installed="1.1.5">
                    <div className="container-fluid">
                        <div className="row">
                            {/*<div className="panel panel-default">*/}
                                <div className="col-sm-8 col-sm-offset-2">
                                    <h3 className="text-right-xs">Não foi encontrada nenhuma receita para esta categoria!</h3>
                                    Submeta a sua receita <a href={"/inserirReceita"}>aqui</a>!
                                </div>
                                <div className="col-sm-2 col-sm-offset-5">
                                    <Link to={{pathname: '/portfolio'}}>
                                        <button className="btn btn-block btn-color btn-xxl">Limpar filtro</button>
                                    </Link>
                                </div>
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
            );
        }
    }
}

export default CategoryDetail;