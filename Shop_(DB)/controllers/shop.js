const Product = require('../models/product');
const Cart=require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows])=>{
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err=>{
      console.log(err);
    });
};

exports.getProduct =(req,res,next)=>{
    const prodId=req.params.productId;
    Product.findById(prodId)
      .then(([product])=>{
        res.render('shop/product-detail',{
          product: product[0],
          pageTitle:product.title,
          path:'/products'
        });
      })
      .catch(err=>console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows,firldData])=>{            // rows,fieldata are [0]th,[1]th element of result array send using promise
      res.render('shop/index', {
        prods: rows,              //rows will hold the products data from db
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err=>{
      console.log(err);
    });

};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart =(req,res,next) =>{
  const prodId=req.body.productId;
  console.log(prodId);
  Product.findById(prodId,(product)=>{
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
