const db=require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }


  save() {
    return db.execute(
      'INSERT INTO products (title,price,imageUrl,description) VALUES (?,?,?,?)',
      [this.title,this.price,this.imageUrl,this.description]
    );
  }

  update(){
    return db.execute(
      'UPDATE products SET title=?,price=?,imageUrl=?,description=? WHERE products.id=?',
      [this.title,this.price,this.imageUrl,this.description,this.id]
    );
  }

  static deleteById(id){
    return db.execute('DELETE FROM products WHERE products.id=?',[id]);
  };

  static fetchAll() {
    return db.execute('SELECT * FROM products');    //return promise, we usethen/catch to handle these
  }

  static findById(id){
      return db.execute('SELECT * FROM products WHERE products.id=?',[id]);
  }
};
