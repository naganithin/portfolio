import React from "react"
import PropTypes from "prop-types"

import { GlobalStyles } from '../styles'
import Navigation from './Navigation';
import SideItemsLeft from './SideItemsLeft'
import SEO from '../components/seo';
import "@fontsource/raleway"
import "@fontsource/roboto"
import Contact from "./contact";

const Layout = ({ children }) => {
  return (
    <main>
      <SEO />
      <GlobalStyles />
      <Navigation />
      <SideItemsLeft />
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
