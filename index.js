const async = require('async');

/**
 * parallelify fucking middlewares
 * todo: make module and publish to npm
 */
module.exports = (middlewaresToLoad) => {
    return (req, res, next) => {
        async.each(middlewaresToLoad,  (fun, cb) => fun(req, res, cb), next);
    };
}