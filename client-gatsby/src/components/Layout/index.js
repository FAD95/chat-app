import React from "react"
import GlobalStyles from "./styles"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {children}
    </React.Fragment>
  )
}
