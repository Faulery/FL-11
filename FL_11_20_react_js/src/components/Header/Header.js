import React, {Component} from 'react';
import styles from './header.module.scss'
import {Button} from 'reactstrap';

export default class Header extends Component {
  render () {
    return (
      <header className={styles.header}>
        <h1>New! Reptiles pack!</h1>
        <p>Includes</p>
        <img src="#" alt="Images"/>
        <Button id="getPack" color="primary">Get (1,5$)</Button>
      </header>
    )
  }
}