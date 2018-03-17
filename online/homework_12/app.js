const root = document.getElementById('root'),
      tankPreviewTitle = createElem('h1');
      tankPreviewTitle.textContent = "Most popular tanks";

function creatTumb(array) {
    location.hash = '';

    let tankThumbnail = document.createElement('div');
        tankThumbnail.classList.add('tank-thumbnail');
    const tankPreviewPage = createElem('div');        

    tankPreviewPage.classList.add('preview-page');

    let tankImage = createElem('img'),
        flagImg = createElem('img'),
        tankText = createElem('p');
    
    tankImage.classList.add('tank-image');

    array.forEach(elem => {
        let flagImgClone = makeClone(flagImg),
            tankTextClone = makeClone(tankText),
            tankImageClone = makeClone(tankImage),
            tankThumbnailClone = makeClone(tankThumbnail);
        
        flagImgClone.setAttribute('src', elem.country_image);
        flagImgClone.setAttribute('title', elem.country);
        tankTextClone.innerHTML = `${elem.level} <span title="${elem.model}">${elem.model}</span>`;
        tankImageClone.setAttribute('src', elem.preview);

        tankTextClone.prepend(flagImgClone, " ");

        tankThumbnailClone.append(tankImageClone, tankTextClone);

        tankThumbnailClone.addEventListener('click', () => {
            location.hash = elem.model;
        });

        tankPreviewPage.append(tankThumbnailClone);
    });
    return tankPreviewPage;
}

root.append(tankPreviewTitle, creatTumb(tanks));

window.onhashchange = tankDetails;

function tankDetails() {
    let tankModel = location.hash.slice(1);

    tanks.forEach(elem => {
        if (elem.model === tankModel) {
            root.innerHTML = createDetails.call(elem);
        }
    });
    
}

function goBack() {
    root.innerHTML = "";
    root.append(tankPreviewTitle, creatTumb(tanks));
}

function createDetails(elem) {
    return `<h2> <img src = ${this.country_image} title=${this.country}> <span class="cap-letter">${this.model}</span> (level ${this.level}) </h2> 
            <div class="main-content">
                <div class = "left-col">
                    <h3>Preview</h3>
                    <img src = ${this.preview}>
                    <p class="home-link" onclick = goBack()>Back to list view</p>
                </div>
                <div class = "right-col">
                    <h3>Characteristic</h3>
                    <table>
                    <tr><td>damage</td><td>${this.details.damage}</td></tr>
                    <tr><td>breoning</td><td>${this.details.breoning}</td></tr>
                    <tr><td>attack_speed</td><td>${this.details.attack_speed}</td></tr>
                    <tr><td>time_of_targeting</td><td>${this.details.time_of_targeting}</td></tr>
                    <tr><td>ammunition</td><td>${this.details.ammunition}</td></tr>
                    </table>
                </div>
            </div>`;
}


function createElem(elem) {
    return document.createElement(elem);
}

function makeClone(elem, bool = false) {
    return elem.cloneNode(bool);
}


