function* range(from, to) {
    while (from <= to) {
        let value = from;
        from++
        yield value;
    }
}

for (var r of range(5, 10)) {
    console.log(r);
}