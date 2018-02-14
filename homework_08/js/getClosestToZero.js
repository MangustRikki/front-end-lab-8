function getClosestToZero(...arguments) {
     return Array.from(arguments).reduce((prev, curr) => {
           return (Math.abs(curr - 0) < Math.abs(prev - 0) ? curr : prev );
        });
    }

    console.log(getClosestToZero(-2, -5, 2, 4));