const max = process.argv[2];

    let FizzBuzz = {
      [Symbol.iterator]() {
        let cur = 1, value;
        return {
        next() {
            if(cur <= max) {
                if(cur % 15 === 0) {
                    value = 'FizzBuzz';
                } else if(cur % 3 === 0) {
                    value = 'Fizz';
                } else if(cur % 5 === 0) {
                    value = 'Buzz';
                } else {value = cur}
                cur++;
                return {
                    done: false,
                    value: value
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
        }
      }
    }

    for (var n of FizzBuzz) {
      console.log(n);
    }