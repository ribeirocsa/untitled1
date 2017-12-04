import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import List from "./List";

class ListItem extends Component {

    constructor(props) {
        super(props);

        //atribuo a este componente as propriedades do outro componente
        this.state = props;
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading panel-title">
                    { this.props.title }
                </div>

                <div className="panel-body">
                    <div className="col-md-10">
                        <strong>Categoria: </strong>
                        { this.props.name }
                    </div>

                    <div className="col-md-2">
                        <img className="img-circle-detail" src={ this.props.image }/>
                    </div>

                    <div className="col-md-12">
                        <Link to={{pathname: `/item/${this.props.id}`, state: this.props}}>
                            <button className="btn btn-primary">Mais info</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;
