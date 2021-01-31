'use strict';

var signup = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args, context, info) {
    var password, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bcrypt.hash(args.password, 10);

          case 2:
            password = _context.sent;
            _context.next = 5;
            return context.prisma.mutation.createUser({
              data: {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                role: args.role,
                password: password
              }
            });

          case 5:
            user = _context.sent;
            return _context.abrupt('return', {
              token: jwt.sign({ userId: user.id }, APP_SECRET),
              user: user
            });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function signup(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var login = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, _ref2, ctx, info) {
    var email = _ref2.email,
        password = _ref2.password;
    var user, valid;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ctx.prisma.query.user({ where: { email: email } }, '{ id lastName firstName email password }');

          case 2:
            user = _context2.sent;

            if (user) {
              _context2.next = 5;
              break;
            }

            throw new Error('No such user found for email: ' + email);

          case 5:
            _context2.next = 7;
            return bcrypt.compare(password, user.password);

          case 7:
            valid = _context2.sent;

            if (valid) {
              _context2.next = 10;
              break;
            }

            throw new Error('Invalid password');

          case 10:
            return _context2.abrupt('return', {
              token: jwt.sign({ userId: user.id }, APP_SECRET),
              user: user
            });

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function login(_x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

// Q currently user


var me = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, args, ctx, info) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getUser(ctx);

          case 2:
            user = _context3.sent;
            return _context3.abrupt('return', user);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function me(_x9, _x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var _require = require('../utils'),
    getUser = _require.getUser,
    APP_SECRET = _require.APP_SECRET;

module.exports = {
  me: me,
  signup: signup,
  login: login
};