function decypherPhrase(object, string) {
    return getTransformedArray(Array.from(string), elem => {
        return object.key === elem ? key : elem}).join('');
}