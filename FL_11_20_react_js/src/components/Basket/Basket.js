import React, {Component} from 'react';
import styles from './basket.module.scss';

export default class Basket extends Component {
  render () {
    return (
      <aside className={styles.aside}>
        <h2>Basket</h2>
        <p>No items to purchase</p>
      </aside>
    )
  }
}