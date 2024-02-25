import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Row, Button } from 'reactstrap'
import Logo  from '../../assets/images/logo.png'

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
  {
    path: '#',
    display: 'About'
  },

]

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-item-center justify-content-between">
            {/*  logo */}
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            {/* logo end */}
            <div className="navigation">
              <ul className='menu d-flex ali' ></ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;