import { Product, Clothing, Appliance } from "../../data/products.js";

describe('test suite: classProduct', () => {
  let product;

  beforeEach(() => {
    product = new Product({
      id: "bc2847e9-5323-403f-b7cf-57fde044a955",
      image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
      name: "Men's Full-Zip Hooded Fleece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 3157
      },
      priceCents: 2400,
      keywords: [
        "sweaters",
        "hoodies",
        "apparel",
        "mens"
      ]
  });
  });

  it('has correct properties', () => {
    expect(product.id).toEqual("bc2847e9-5323-403f-b7cf-57fde044a955");
    expect(product.rating).toEqual({stars: 4.5,
      count: 3157});
  });

  it('check if method works', () => {
    
    expect(product.getPrice()).toEqual('$24.00');
    expect(product.extraInfoHTML()).toEqual('');
    expect(product.getStarsUrl()).toEqual('images/ratings/rating-45.png')
  });
});


describe('test suite: classClothing', () => {
  let product1;

  beforeEach(() => {
    product1 = new Clothing({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    });
  })
  
  it('has correct properties', () => {
    expect(product1.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
    expect(product1.rating).toEqual({stars: 4.5,
      count: 56});
    expect(product1.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
    expect(product1.sizeChartLink).toEqual('images/clothing-size-chart.png');
  });

  it('check if method works', () => {
    
    expect(product1.getPrice()).toEqual('$7.99');
    expect(product1.getStarsUrl()).toEqual('images/ratings/rating-45.png');
    expect(product1.extraInfoHTML()).toContain(
      `<a href="images/clothing-size-chart.png" target="_blank">`
    );
  });
});


describe('test suite: classAppliance', () => {
  let product2;
  
  beforeEach(() => {
    product2 = new Appliance({
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: 'appliance',
      instructionsLink: 'images/appliance-instructions.png',
      warrantyLink: 'images/appliance-warranty.png'
    });
  });

  it('has correct properties', () => {
    expect(product2.name).toEqual('2 Slot Toaster - Black');
    expect(product2.priceCents).toEqual(1899);
    expect(product2.warrantyLink).toEqual('images/appliance-warranty.png');
    expect(product2.instructionsLink).toEqual('images/appliance-instructions.png');
    
  });

  it('displays instructions and warranty in extraInfoHTML', () => {
    expect(product2.extraInfoHTML()).toContain(
      `<a href="images/appliance-instructions.png" target="_blank">`
    );
    expect(product2.extraInfoHTML()).toContain('Instructions');

    expect(product2.extraInfoHTML()).toContain(
      `<a href="images/appliance-warranty.png" target="_blank">`
    );
    expect(product2.extraInfoHTML()).toContain('Warranty');
   
  });
});