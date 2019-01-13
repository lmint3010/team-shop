import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar style = {navStyle} color="light" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Container><Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink> Home </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> Shop </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> Accessories </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> Categories </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> Pages </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> Contact Us </NavLink>
                            </NavItem>
                        </Nav>
                        </Container>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const navStyle = {
    boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)"
}
export default Menu;