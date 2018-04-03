const http = {
    get: function(url) {
        return new Promise((resolve, reject) => {
            const myRequest = new XMLHttpRequest();
            myRequest.open("GET", url);
            myRequest.onload = () => resolve(myRequest.responseText);
            myRequest.onerror = () => reject(myRequest.statusText);
            myRequest.send();
        })
    },
    post: function(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(answerJson);
        });
    }
}