export default class AppService {

  constructor() {
    this._emojiShop = "http://localhost:1337/emoji-shop";
  }

  getResource = async () => {
    const res = await fetch(`${this._emojiShop}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._emojiShop}, received ${res.status}`);
    }
    return res.json();
  };

}