'use strict';

var createComment = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, args, ctx, info) {
    var requesterUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getUser(ctx);

          case 2:
            requesterUser = _context.sent;

            args.data.author.connect.id = requesterUser.id;
            return _context.abrupt('return', forwardTo('prisma')(parent, args, ctx, info));

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createComment(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
/*async createComment(parent, args, { req, prisma, getUserId }, info) {
  const userId = getUserId();
  const postExists = await prisma.exists.Post({
    id: args.data.post,
    published: true,
  });

  if (!postExists) {
    throw new Error("Unable to find post");
  }

  return prisma.mutation.createComment(
    {
      data: {
        text: args.data.text,
        author: {
          connect: {
            id: userId,
          },
        },
        post: {
          connect: {
            id: args.data.post,
          },
        },
      },
    },
    info
  );
},*/

var updateComment = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, args, ctx, info) {
    var requesterUser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getUser(ctx);

          case 2:
            requesterUser = _context2.sent;

            if (!((requesterUser.id = args.data.author) || requesterUser.role === "ADMIN")) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt('return', forwardTo('prisma')(parent, args, ctx, info));

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function updateComment(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

var deleteComment = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, args, ctx, info) {
    var requesterUser;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getUser(ctx);

          case 2:
            requesterUser = _context3.sent;

            if (!((requesterUser.id = args.author) || requesterUser.role === "ADMIN")) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt('return', forwardTo('prisma')(parent, args, ctx, info));

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function deleteComment(_x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('prisma-binding'),
    forwardTo = _require.forwardTo;

var _require2 = require('../../utils'),
    getUser = _require2.getUser;

module.exports = {
  createComment: createComment,
  updateComment: updateComment,
  deleteComment: deleteComment
};