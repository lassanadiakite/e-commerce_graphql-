'use strict';

var getUser = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
    var Authorization, token, _jwt$verify, userId, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Authorization = ctx.req.request.get('Authorization');

            if (!(Authorization && Authorization !== 'null')) {
              _context.next = 10;
              break;
            }

            token = Authorization;
            _jwt$verify = jwt.verify(token, APP_SECRET), userId = _jwt$verify.userId;
            _context.next = 6;
            return ctx.prisma.query.user({ where: { id: userId } }, '{ id lastName firstName email role  }');

          case 6:
            user = _context.sent;
            return _context.abrupt('return', user);

          case 10:
            throw new AuthError();

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('dotenv').config();
var jwt = require('jsonwebtoken');
var APP_SECRET = process.env.APP_SECRET;

var AuthError = function (_Error) {
  _inherits(AuthError, _Error);

  function AuthError() {
    _classCallCheck(this, AuthError);

    return _possibleConstructorReturn(this, (AuthError.__proto__ || Object.getPrototypeOf(AuthError)).call(this, 'Not authorized'));
  }

  return AuthError;
}(Error);

module.exports = {
  getUser: getUser,
  APP_SECRET: APP_SECRET
};