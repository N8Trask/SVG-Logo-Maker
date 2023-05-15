class Shape {

    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this, shapeColor = shapeColor
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
      }
    
      setColor(shapeColor) {
        this.shapeColor = shapeColor;
      }
      render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
      }
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
      }
    
      setColor(shapeColor) {
        this.shapeColor = shapeColor;
      }
      render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />`;
      }
}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
      }
      setColor(shapeColor) {
        this.shapeColor = shapeColor;
      }
      render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />`;
      }
}


module.exports = { Triangle, Circle, Square };