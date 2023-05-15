const Text = require('../lib/text')

describe("Triangle Text", () => {
  it("should return blue", () => {
    const text = new Text();
    text.setTextColor("blue");
    expect(text.render()).toEqual('<text x="50%" y="50%" font-weight="bold" font-size="50px" dominant-baseline="middle" text-anchor="middle" font-family="monospace" fill="blue">undefined</text>');
  });
});