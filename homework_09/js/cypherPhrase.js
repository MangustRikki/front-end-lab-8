function cypherPhrase(object, string) {
    return getTransformedArray(Array.from(string), elem => {
        return object[elem] || elem}).join('');
}