'use strict';

var category = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, args, ctx, info) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', forwardTo('prisma')(parent, args, ctx, info));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function category(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var categories = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, args, ctx, info) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', forwardTo('prisma')(parent, args, ctx, info));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function categories(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();
/*async function categories (parent, args, context) {
    return context.prisma.link.findMany()
}*/

/*async function feed(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
        ],
      }
      : {}
  
    const links = await context.prisma.link.findMany({
      where,
      skip: args.skip,
      take: args.take,
    })
  
    return links
  } */
/* 
  Query: {
    books: async (parent,args , ctx, info) => {
         orderBy
         skip
         first
         const { orderBy, skip, where, first}=args;
         const OptionSearch={}
         const FilterSearch={
              where:{
                   AND:[]
              }
         }
         if(orderBy){
              OptionSearch.orderBy=orderBy;
         }
         if(first){
                             OptionSearch.first = orderBy;
          }
         if (skip) {
           OptionSearch.skip = skip;
         }

         const {
              authors,
              couress,
               publisherYears,
           publisher,
              classRooms,
              catagories,
         } = filter;
         return await ctx.prisma.query.books(
           {
             ...OptionSearch,
             ...FilterSearch,
           },
           info
         );
    },
    book: async (parent, args, ctx, info) => {
         return await ctx.prisma.query.book({
              where: {
                   id: args.id
              }
         }, info)

    },
}
*/

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('prisma-binding'),
    forwardTo = _require.forwardTo;

module.exports = {
  category: category,
  categories: categories
};