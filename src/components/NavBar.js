import React, {Component} from 'react';
import NavItems from "./NavItems";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Hoje para jantar</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar >
                        <Nav className="myReactAppNav">
                            <NavItems></NavItems>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default NavBar;