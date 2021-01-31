'use strict';

var _require = require('./Mutations/mutationPost'),
    createPost = _require.createPost,
    updatePost = _require.updatePost;

var _require2 = require('./Mutations/mutationUser'),
    createUser = _require2.createUser,
    updateUser = _require2.updateUser,
    deleteUser = _require2.deleteUser;

var _require3 = require('./Mutations/mutationCard'),
    createCard = _require3.createCard,
    updateCard = _require3.updateCard,
    deleteCard = _require3.deleteCard;

var _require4 = require('./Mutations/mutationProduct'),
    createProduct = _require4.createProduct,
    updateProduct = _require4.updateProduct,
    deleteProduct = _require4.deleteProduct;

var _require5 = require('./Mutations/mutationImage'),
    createImage = _require5.createImage,
    updateImage = _require5.updateImage,
    deleteImage = _require5.deleteImage;

var _require6 = require('./Mutations/mutationCategory'),
    createCategory = _require6.createCategory,
    updateCategory = _require6.updateCategory,
    deleteCategory = _require6.deleteCategory;

var _require7 = require('./Mutations/mutationComment'),
    createComment = _require7.createComment,
    updateComment = _require7.updateComment,
    deleteComment = _require7.deleteComment;

var _require8 = require('./auth'),
    login = _require8.login,
    signup = _require8.signup;

var Mutation = {
    createPost: createPost,
    updatePost: updatePost,

    createCard: createCard,
    updateCard: updateCard,
    deleteCard: deleteCard,

    createProduct: createProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,

    createImage: createImage,
    updateImage: updateImage,
    deleteImage: deleteImage,

    createComment: createComment,
    updateComment: updateComment,
    deleteComment: deleteComment,

    createCategory: createCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory,

    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,

    login: login,
    signup: signup
};

module.exports = {
    Mutation: Mutation
};