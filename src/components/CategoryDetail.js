import React, {Component} from 'react';
import ListItem from "./ListItem";
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

    _getData = async() => {
        return fetch(apiLink)
            .then(response => response.json())
            .then(function (json) {

                return json.data;
            })
            .catch(error => console.log(error));
    }

    render() {
        let receitasFiltradosPorCategoria = this.state.receitas;

        if(this.state.receitas.length > 0){
            receitasFiltradosPorCategoria = this.state.receitas.filter(
                (receita) => {
                    return receita.category_id == this.props.match.params.number;
                }
            );
        }

        if(receitasFiltradosPorCategoria.length >0 ) {
            return (
                <div className="panel panel-default">

                    {receitasFiltradosPorCategoria.map((receita, index) => {
                        return <ListItem
                            id={receita.id}
                            title={receita.title}
                            description={receita.description}
                            category_id={receita.category_id}
                            name={receita.name}
                            image={ receita.image }
                            key={index}/>
                    })}
                </div>
            );
        }
        else {
            return (
                <div className="panel panel-default">
                    <div className="panel-body">
                    Não foi encontrada nenhuma receita para esta categoria!
                    </div>
                    <div className="col-md-12">
                        <Link to={{pathname: '/'}}>
                            <button className="btn btn-primary">Limpar filtro</button>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}

export default CategoryDetail;