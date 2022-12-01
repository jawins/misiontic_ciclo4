import React, { Component } from 'react'
import Navegacion from './Navegacion'
import { Outlet } from "react-router-dom"
export default class Tablero extends Component {
  render() {
    return (
    <div>
        <Navegacion></Navegacion>
        <Outlet></Outlet>
    </div>
    )
  }
}
