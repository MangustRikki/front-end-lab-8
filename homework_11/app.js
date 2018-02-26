let rootNode = document.getElementById("root");

// Your code goes here
let folderList = document.createElement('ul');
let item = document.createElement('li');
let folderImg = document.createElement('i');
    folderImg.classList.add('material-icons', 'md-dark');
    folderImg.textContent = "folder";

let fileImg = makeClone(folderImg, false);

fileImg.classList.add('gray');
fileImg.textContent = "insert_drive_file";
    console.log(fileImg);

function createList(parent, child, array) {
    array.forEach((item) => {

        let cloneChild = makeClone(child, false);

        cloneChild.textContent = item.title;

        if(item.children) {
            
            let cloneParent = makeClone(parent, false);
            cloneParent.setAttribute('hidden', 'true');
            createList(cloneParent, child, item.children);
            cloneChild.appendChild(cloneParent);
        }        

        if(item.folder) {
            cloneChild.prepend(makeClone(folderImg, true));
        } else {
            console.log(item.folder);
            cloneChild.prepend(makeClone(fileImg, true));
        }

            parent.appendChild(cloneChild);
        });
        
    return parent;
}

function makeClone(elem, bool) {
    return elem.cloneNode(bool);
}

function addListiners(array, foo, event) {
    array.forEach((item) => {
        item.addEventListener(event, foo);
    });
}

let allList = createList(folderList, item, structure);

rootNode.appendChild(allList);

let arrayLi = Array.from(document.querySelectorAll('li'));

addListiners(arrayLi, showHide, 'click');

function showHide(e) {
    console.log(Array.from(e.target.children));
 Array.from(e.target.children).forEach((item) => item.removeAttribute('hidden'));
}