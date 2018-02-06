import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const apiLink = 'http://localhost/laravel/laravel-intro/public/api/article';

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
        let receitasFiltradosPorRefinamento = this.state.receitas;

        if (this.state.receitas.length > 0) {
            receitasFiltradosPorRefinamento = this.state.receitas.filter(
                (receita) => {
                    return receita.id == this.props.match.params.id;
                }
            );
        }

        if (receitasFiltradosPorRefinamento.length > 0) {
            return (
                <section id="article" className="section portfolio">
                    <div className="container-fluid">
                        <div className="row">

                        {receitasFiltradosPorRefinamento.map((receita, index) => {
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
                        <div className="col-md-12">
                            <Link to={{pathname: this.props.history.goBack}}>
                                <button className="btn btn-primary">Voltar</button>
                            </Link>
                        </div>
                    </div>
                </section>
            );
        }
        else {
            return (
                <div className="panel panel-default">
                    <div className="panel-body">
                        A receita procurada não foi encontrada!
                    </div>
                    <div className="col-md-12">
                        <Link to={{pathname: '/'}}>
                            <button className="btn btn-primary">Voltar</button>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}

export default CategoryDetail;