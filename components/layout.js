import Link from 'next/link'
import Head from 'next/head'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default ({ children, title = 'React Challenge App' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
        <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/favs">Favourites</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/TermminalWitchcraft">GitHub</NavLink>
              </NavItem>
        </Nav>
        </Navbar>
    </header>

    { children }

    <footer>
      {'Copyright: Hitesh Paul'}
    </footer>
  </div>
)
