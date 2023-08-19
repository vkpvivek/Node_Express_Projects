const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // save() {
  //   getProductsFromFile(products => {
  //     console.log("current id"+products.id);
  //     if(this.id){
  //       const existingProductIndex=products.findIndex(prod =>prod.id===this.id);
  //       const updateProducts=[...products];

  //       updateProducts[existingProductIndex]=this;
  //       fs.writeFile(p, JSON.stringify(updateProducts), err => {
  //         console.log(err);
  //       });

  //     }else{
  //       this.id=Math.random().toString();
  //       products.push(this); 
  //       fs.writeFile(p, JSON.stringify(products), err => {
  //         console.log(err);
  //       });
  //     }
  //   });
  // }

  save() {
    this.id=Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  update(){
    getProductsFromFile(products => {
      const existingProductIndex=products.findIndex(prod =>prod.id===this.id);
      const updateProducts=[...products];

      updateProducts[existingProductIndex]=this;
      fs.writeFile(p, JSON.stringify(updateProducts), err => {
        console.log(err);
      });

    });
  }

  static deleteById(id){
    getProductsFromFile(products=>{
      //updatedproducts hold filtered values, that does not matches with id(prod.id!==id)
      const updatedProducts=products.filter(prod => prod.id!==id);

      fs.writeFile(p,JSON.stringify(updatedProducts), err=>{
          if(!err){
            console.log("Product deleted Successfully");
          }
      });
    });
  };

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb){
    getProductsFromFile(products=>{
      const product=products.find(p => p.id===id);
      cb(product);
    }); 
  }
};
