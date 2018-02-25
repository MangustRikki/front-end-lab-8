function debounce(func, time) {
    let timer = null;

    return function(...args) {
        const complete = () => {
            func.apply(this, args);
            timer = null;
        }
        if(timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(complete, time);
    }
}

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();