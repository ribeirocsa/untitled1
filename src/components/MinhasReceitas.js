import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListItem from "./ListItem";

// const apiLink = 'http://localhost/laravel/laravel-intro/public/api/receitas';
const apiLink = 'http://hojeparajantar.zapto.org/api/receitas';

class MinhasReceitas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            // dropdownOpen: false
        };

        // sessionStorage.setItem('receitas_id', items.id);
        //console.log(this.state.items);

        //console.log("TOKEN PORTFOLIO: ------> " + this.props.token);

        // this.toggle = this.toggle.bind(this);
    }

    // toggle() {
    //     this.setState({
    //         dropdownOpen: !this.state.dropdownOpen
    //     });
    // }

    // componentWillMount() {
    //     const { getProfile, dispatch } = this.props;
    //     getProfile(this.props.params.number);
    //     console.log(this.props.params.number);
    // }

    componentDidMount() {
        this._getData()
            .then((res) => {
                this.setState({
                    items: res
                });

            });
    }

    _getData = async () => {

        return fetch(apiLink, {
            headers: {
                'Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(function (json) {
                console.log(json);
                return json.data[0];
            })
            .catch(error => console.log(error));

    };

    render() {

        if (this.state.items != null && this.state.items.length > 0) {
            this.state.items.map((item, index) => {
                return <ListItem
                    name={item.title}
                    image={item.image}
                    key={index}/>
            })
            return (
                <section id="portfolio" className="section portfolio">
                    <div className="container-fluid">
                        <div className="row">


                            {this.state.items.map((item, index) => {
                                return (
                                    <div className="col-sm-6 portfolio-item">
                                        <a href={`/editarReceitas/${item.id}`} className="portfolio-link">
                                            <div className="caption">
                                                <div className="caption-content">
                                                    <h3 className="sliderH3">{item.title}</h3>
                                                </div>
                                            </div>
                                            <img src={item.image} className="img-responsive" alt={item.name}/>
                                        </a>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
            );

        }
        else {
            return (
                <section id="semMinhasReceitas" className="section services" data-elink-extension-installed="1.1.5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    Ainda não submeteu nenhuma receita.
                                    Submeta a sua receita <a href={"/inserirReceita"}>aqui</a>!
                                </div>
                                <div className="col-md-12">
                                    <Link to={{pathname: '/'}}>
                                        <button className="btn btn-primary">Voltar</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }


    }
}

export default MinhasReceitas;
