const ip = document.querySelector('.ip-input'),
      trackIpBtn = document.querySelector('.trackIp'),
      validateResponceBtn = document.querySelector('.validateResponce'),
      loaderWrap = document.querySelector('.loader-wrap'),
      answerTitle = document.querySelector('.answer-title'),
      answerTable = document.querySelector('.answer-table');
      
let answerJson;

trackIpBtn.addEventListener('click', getAnswer);
validateResponceBtn.addEventListener('click', validate);

function getAnswer(e) {
    e.preventDefault();
    loaderWrap.style.display = 'block';
    const url = `https://ipapi.co/${ip.value}/json/`;

    http.get(url).then(val => {
        loaderWrap.style.display = "none";
        answerTable.style.display = "block";

        answerJson = val;
        const answerObj = JSON.parse(val);
        for (let key in answerObj) {
            let row = document.createElement("tr");
            row.innerHTML += `<td>${key.split("_").join(" ")}</td><td>${answerObj[key]}</td>`;
            answerTable.appendChild(row);
        }

    });
} 

function validate(e) {
    e.preventDefault();
    loaderWrap.style.display = "block";
    http.post('https://shrouded-garden-94580.herokuapp.com/').then(val => {
        loaderWrap.style.display = "none";
        answerTitle.innerHTML = val;
    });
}