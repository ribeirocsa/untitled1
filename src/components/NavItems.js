import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListItem from "./ListItem";
import {Dropdown} from 'reactstrap';
import {DropdownMenu} from 'reactstrap';
import {DropdownItem} from 'reactstrap';
import {DropdownToggle} from 'reactstrap';
import {NavLink} from 'reactstrap';

const apiLink = 'http://localhost/laravel/laravel-intro/public/api/category';

class NavItems extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            dropdownOpen: false
        };

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
                console.log(json.data);
                return json.data;
            })
            .catch(error => console.log(error));
    };

    render() {

        console.log("lol");
        console.log(this.state.items);
        {
            this.state.items.map((item, index) => {
                return <ListItem
                    name={item.name}
                    key={index}/>
            })
        }

        //console.log("id clicado "+this.props.match.params.number);
        /*let itemsPorCategoria = this.state.items.filter(
         (item) => {
         return item.id ===  .toLowerCase().indexOf(
         this.state.search.toLowerCase()) !== -1;
         }
         );*/

        return (

            <div className="nav navbar-nav myreactapp">
                <NavLink href='/'>Receitas</NavLink>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret>
                        Categorias
                    </DropdownToggle>
                    <DropdownMenu right>

                        {this.state.items.map((item, index) => {
                            return <DropdownItem key={index} name={item.id}>
                                <Link to={{pathname: `/category/${item.id}`}}>{item.name}</Link></DropdownItem>
                        })}

                    </DropdownMenu>
                </Dropdown>
            </div>


            /*<span className="nav navbar-brand">
         <ul>
         <NavLink href={{pathname: '/'}}>Receitas</NavLink>
         <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
         <DropdownToggle caret>
         Categorias
         </DropdownToggle>
         <DropdownMenu>

         {this.state.items.map((item, index) => {
         return <DropdownItem key={index} name={item.id} >
         <Link to={{pathname: `/category/${item.id}`}}>{item.name}</Link></DropdownItem>
         })
         }

         </DropdownMenu>
         </ButtonDropdown>
         </ul>
         </span>*/

        );
    }
}

export default NavItems;