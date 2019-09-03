import React, { Component } from "react";
import styles from "./header.module.scss";
import {Button} from "reactstrap";

export default class Header extends Component {

  render() {
    return (
      <header className={styles.header}>
        <h1>New! Reptiles pack!</h1>
        <p>Includes</p>
        <span>🐢 🐍 🐲</span>
        <Button id="getPack" color="primary">GET it!</Button>
      </header>
    );
  };
}