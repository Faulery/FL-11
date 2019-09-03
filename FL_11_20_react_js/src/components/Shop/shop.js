import React, { Component } from "react";
import AppService from "../../service/appService";
import styles from './shop.module.scss';
import {Button} from 'reactstrap';


export default class Shop extends Component {

  AppService = new AppService();

  state = {
    data: []
  };

  componentDidMount() {
    this.updateData();
  };

  updateData() {
    this.AppService.getResource()
      .then(this.onDataLoaded);
  };

  onDataLoaded = data => {
    this.setState({
      data: data.emoji
    });
  };

  renderItems (arr) {
    return arr.map((item) => {
      const {id, title, stars, price} = item;
      return (
        <div className={styles.shop-item} id={id}>
          <span>{item.emoji[0].char}</span>
          <span>{item.emoji[1].char}</span>
          <span>{item.emoji[2].char}</span>
          <p>{title}</p>
          <span className={styles.stars}>{stars}</span>
          <Button id="getPackfromShop" color="primary">Get {price}$</Button>
        </div>
      )
    });
  }

  render() {
    const {data} = this.state;

    const items = this.renderItems(data);

    return (
      <div className={styles.shop}>
        {items}
      </div>
    )
  }
}