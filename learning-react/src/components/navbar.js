import React, { Component } from 'react';
import logo from '../logo.svg';
import {Navbar, NavbarHeader, NavbarItems, Item, NavbarDropdown, DropdownMenu} from 'react-bootstrap-navbar';

const dropdownItems = [
    {href: '#', name: 'Overview'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
];



class NavigationMenu extends React.Component {
  render() {
    return (
          <Navbar>
              <NavbarHeader name="Website Name"/>
              <NavbarItems>
                  <Item link="#" title="About" />
                  <Item link="#" title="Contact" />
                  <Item link="#" title="Services" />
                  <NavbarDropdown name="Features">
                        <DropdownMenu menuItems={dropdownItems}/>
                  </NavbarDropdown>
                  
              </NavbarItems>
          </Navbar>
        );
  }
}

export default NavigationMenu;
