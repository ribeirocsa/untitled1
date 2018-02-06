import React, {Component} from 'react';
import ListItem from "./ListItem";

const apiLink = 'http://localhost/laravel/laravel-intro/public/api/article';

class List extends Component {

    constructor(props) {
        super(props);

        //o state deste componente é um array com a propriedade items
        this.state = {
            items: [],
            search: ''

        }
    }

    componentWillMount() {
        this._getData()
            .then((res) => {

                this.setState({
                    items: res[0],

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

    // //vai fazer um pedido à API através do fetch
    // componentDidMount() {
    //     this._getData().then((res) => {
    //         console.log(res);
    //     });
    // }
    // _getData = async() => {
    //     fetch(apiLink)
    //         .then(response => response.json())
    //         .then(jsondata => console.log(jsondata.data))
    //         .then(function(json) {
    //             items = json;
    //             //console.log(questions[0]);
    //             return items;});
    //
    // };

    /*newItem = () => {
        const data = this.state.items;

        let counter = data.length + 1;

        const item = {
            title: `título ${this.state.items.length + 1}`,
            // description: `descrição ${this.state.items.length + 1}`
            //também posso fazer assim, com um contador:
            description: 'descrição ' + counter,
        };

        data.push(item);
        this.setState({items: data});
    };*/

    //o texto da search box está limitado a 50 caracteres
    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0,
                50)
        });
    };

    render() {
        /*let itemsFiltrados = this.props.items;     ---->   alterei para state para mostrar na página a lista*/
        let itemsFiltrados = this.state.items.filter(
            (item) => {
                return item.title.toLowerCase().indexOf(
                        this.state.search.toLowerCase()) !== -1;
            }
        );

        if(itemsFiltrados.length > 0) {

            return (
                <div className="col-md-12">
                    <div className="sw">
                        <form>
                            <input type="search"
                                   className="search"
                                   placeholder="Pesquisar..."
                                   value={this.state.search}
                                   onChange={this.updateSearch.bind(this)}/>
                        </form>
                    </div>
                    <div className="panel panel-body">
                        <h4>Lista de Receitas</h4>

                        {
                            itemsFiltrados.map((item, index) => {
                                return <ListItem
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    name={item.name}
                                    image={ item.image }
                                    key={index}/>
                            })}

                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="col-md-12">
                    <div className="sw">
                        <form>
                            <input type="search"
                                   className="search"
                                   placeholder="Pesquisar..."
                                   value={this.state.search}
                                   onChange={this.updateSearch.bind(this)}/>
                        </form>
                    </div>
                    <div className="panel panel-body">
                        <h4>Lista de Receitas</h4>
                        Não existem receitas correspondentes aos termos pesquisados.
                    </div>
                </div>
            );
        }
    }
}

export default List;