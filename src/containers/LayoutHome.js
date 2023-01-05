import React from 'react';
import { NavBar } from '../components/NavBar'
import { SideMenu } from '../components/SideMenu'

const LayoutHome = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar/>
      <SideMenu/>
      <div className="content-wrapper">
        { children }
      </div>
    </React.Fragment>
  )
}


export { LayoutHome }
