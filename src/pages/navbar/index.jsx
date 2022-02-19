import React from "react"
import { 
    Navbar, NavbarBrand, NavbarToggler, NavbarText, 
    NavItem, NavLink, Nav,Collapse 
} from "reactstrap"


const IniAdalahNavbar = () => {

    return(

<div>
  <Navbar
    color="success"
    container
    dark
    expand
    fixed=""
    full
  >
    <NavbarBrand href="/">
      RUANG ENGINEER (RE)
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/catalog">
            Catalog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/dashboard">
            Dashboard
          </NavLink>
        </NavItem>
        
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
    )
}
export default IniAdalahNavbar;