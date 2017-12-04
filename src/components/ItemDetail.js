import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const apiLink = 'http://localhost/laravel/laravel-intro/public/api/article';

class ItemDetail extends Component {

    constructor(props) {
        super(props);

        this.state ={};
    }

    componentDidMount() {
        if (this.props.location.state) {
            console.log(this.props.location.state);
            this.setState(this.props.location.state);
        }
        else
            //vai buscar os dados à API
            this._getData();
    }

    _getData = async() => {
        fetch(`${apiLink}/${this.props.match.params.number}`).then(response => response.json())
            .then(jsondata => {
                this.setState(jsondata.data[0]);
            });
    };

    render() {
        return (
                <div className="panel panel-default">

                    <div className="panel-heading">
                        <strong>Título: </strong>
                        {this.state.title}
                    </div>

                    <div className="panel-body">
                        <div className="col-md-12">
                            <strong>Descrição: </strong>
                            { this.state.description }
                        </div>
                        <div className="col-md-12">
                            <strong>Categoria: </strong>
                            { this.state.name }
                        </div>
                        <div className="col-md-12">
                            <img className="img-circle-detail" src ={ this.state.image } />
                        </div>
                        <div className="col-md-12">
                            <Link to={{pathname: '/'}}>
                                <button className="btn btn-primary">Voltar</button>
                            </Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ItemDetail;