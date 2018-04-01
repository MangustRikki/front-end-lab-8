var fs = require('fs');

function run(generator) {
    var it = generator(go);

    function go(error, result) {
        if (error) {
            return it.throw(error);
        }
        it.next(result);
    }
    go();
}
run(function*(done) {
    var firstFile;
    try {
        var dirFiles = yield fs.readdir('NoNoNoNo', done);
        firstFile = dirFiles[0];
    } catch (err) {
        firstFile = null;
    }
    console.log(firstFile);
});