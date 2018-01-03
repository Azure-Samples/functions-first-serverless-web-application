module.exports = function (context, req, documents) {
    context.res = documents;
    context.done();
};