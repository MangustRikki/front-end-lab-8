function getClosestToZero() {
     return Array.from(arguments).reduce((prev, curr) => {
           return (Math.abs(curr) < Math.abs(prev) ? curr : prev );
        });
    }

    console.log(getClosestToZero(-2, -5, 2, 4));