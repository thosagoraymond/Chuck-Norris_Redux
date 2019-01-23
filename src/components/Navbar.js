import React from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';

class NavBar extends React.Component {
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
        <Navbar color="light" light expand="md" fixed="top">
           <NavbarBrand href="/">Chuck Norris Jokes</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink href="/components/">Random Jokes</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="https://github.com/thosagoraymond/Chuck-Norris_Redux">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                  </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default  NavBar;