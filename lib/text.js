class Text {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

  setTextColor(textColor) {
    this.textColor = textColor;
  }
  render() {
    return `<text x="50%" y="50%" font-weight="bold" font-size="50px" dominant-baseline="middle" text-anchor="middle" font-family="monospace" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = Text;