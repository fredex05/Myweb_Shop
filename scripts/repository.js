var repository = (function () {
 'use strict';
 var products = [{
 id: 1,
 name: 'logitech one',
 price: 55.99,
 description: 'logitech one finally makes a come back!',
 category: 'Gaming'
 }, {
 id: 2,
 name: 'logitech two',
 price: 55.99,
 description: 'logitech two finally makes a come back!',
 category: 'Gaming'
 },{
id: 3,
 name: 'logitech three',
 price: 55.99,
 description: 'logitech three finally makes a come back!',
 category: 'Gaming'
 

 }];
 return {
 getTopProducts: function () {
 return [products[1], products[2], products[3]];
 },
 getProduct: function (id) {
 return products.filter(p => p.id === id)[0];
 },
 search: function (q) {
 if (q == null) {
return [];
 } else {
 return products.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) >= 0);
 }
 }
 };
})();
