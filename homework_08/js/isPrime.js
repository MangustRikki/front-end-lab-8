function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i !== 0) {
                continue;
            }
            return false;
        }
        return true;
}

