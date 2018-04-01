const waitFewSec = (msec, triggerFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (triggerFail) {
                reject(false);
                return;
            }

            resolve(true);
        }, msec);
    });
};
const asyncFn = async() => {
    const result = await waitFewSec(1000);
    return result;
};

async function doAsyncMagic() {
    let result = [];
    for (let i = 0; i < 4; i++) {
        try {
            result.push(await asyncFn());
        } catch (e) {
            result.push(e);
        }
    }
    console.log(result);
}
doAsyncMagic();

async function* rangeGen() {
    for (let i = 0; i <= 15; i++) {
        yield i;
    }
}

async function iterateRange() {
    var sum = 0;
    for await (let yields of rangeGen()) {
        sum += yields;
    }
    return sum;
}

iterateRange();