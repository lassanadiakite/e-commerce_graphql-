'use strict';

var _require = require('./auth'),
    me = _require.me;

var _require2 = require('./Queries/queryUser'),
    user = _require2.user,
    users = _require2.users;

var _require3 = require('./Queries/queryPost'),
    post = _require3.post,
    posts = _require3.posts;

var _require4 = require('./Queries/queryCard'),
    card = _require4.card,
    cards = _require4.cards;

var _require5 = require('./Queries/queryCategory'),
    category = _require5.category,
    categories = _require5.categories;

var _require6 = require('./Queries/queryComment'),
    comment = _require6.comment,
    comments = _require6.comments;

var _require7 = require('./Queries/queryProduct'),
    product = _require7.product,
    products = _require7.products;

var _require8 = require('./Queries/queryImage'),
    image = _require8.image,
    images = _require8.images;

var Query = {
    me: me,
    user: user,
    users: users,
    post: post,
    posts: posts,
    card: card,
    cards: cards,
    comment: comment,
    comments: comments,
    category: category,
    categories: categories,
    product: product,
    products: products,
    image: image,
    images: images
};

module.exports = {
    Query: Query
};