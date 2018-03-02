const root = document.getElementById('root'),
      tankPreviewTitle = createElem('h1');
      tankPreviewTitle.textContent = "Most popular tanks";

function creatTumb(array) {
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
        tankTextClone.textContent = elem.level + " " + elem.model;
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
    let tankModel = location.hash;
}

location.hash = 'Tank-preview';

function createElem(elem) {
    return document.createElement(elem);
}

function makeClone(elem, bool = false) {
    return elem.cloneNode(bool);
}


