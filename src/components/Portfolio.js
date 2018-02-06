import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListItem from "./ListItem";
import CategoryDetail from './CategoryDetail';
import Callback from './callback';

const apiLink = 'http://localhost/laravel/laravel-intro/public/api/category';
// const apiLink = 'http://hojeparajantar.zapto.org/api/category';

class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            dropdownOpen: false
        };
        //console.log(this.state.items);

        //console.log("TOKEN PORTFOLIO: ------> " + this.props.token);

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    componentDidMount() {
        this._getData()
            .then((res) => {
                this.setState({
                    items: res[0]
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
    };

    render() {
        console.log(this.state.items);
        {
            this.state.items.map((item, index) => {
                return <ListItem
                    name={item.name}
                    image={item.image}
                    key={index}/>
            })
        }

        return (
            <section id="portfolio" className="section portfolio">
                <div className="container-fluid">
                    <div className="row">

                        {this.state.items.map((item, index) => {
                            return (
                                <div className="col-sm-6 portfolio-item">
                                    <a href={`/category/${item.id}`} className="portfolio-link">
                                        <div className="caption">
                                            <div className="caption-content">
                                                <h3 className="sliderH3">{item.name}</h3>
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
}

export default Portfolio;
