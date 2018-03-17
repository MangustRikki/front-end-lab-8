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
folderImg.classList.add('folder-img');

function createTree(parent, child, array) {
    array.forEach((item) => {

        let cloneChild = makeClone(child, false);
        cloneChild.textContent = item.title;
        let cloneParent = makeClone(parent, false);
        cloneParent.setAttribute('hidden', 'true');


        if (item.folder) {
            cloneChild.prepend(makeClone(folderImg, true));
            cloneChild.classList.add('folder');
            if (item.children) {
                createTree(cloneParent, child, item.children);
                cloneChild.appendChild(cloneParent);
            } else {

                let emptyFolder = document.createElement('p');
                emptyFolder.setAttribute('hidden', 'true');
                emptyFolder.textContent = "Folder is empty";
                cloneChild.appendChild(emptyFolder);
            }
        } else {
            cloneChild.prepend(makeClone(fileImg, true));
        }

        parent.appendChild(cloneChild);
    });

    return parent;
}

function makeClone(elem, bool) {
    return elem.cloneNode(bool);
}

let allList = createTree(folderList, item, structure);

allList.addEventListener('click', showHide);

rootNode.appendChild(allList);

function showHide(e) {
    let target = e.target.closest('.folder').children[1];
    let targetImg = e.target.closest('.folder').children[0];
    
    if (target) {

        let isHidden = target.getAttribute('hidden');
        let isFolder = e.target.classList.contains('folder') || e.target.classList.contains('folder-img');

        if (isHidden) {
            target.removeAttribute('hidden');
            targetImg.textContent = 'folder_open';
        } else if (isFolder) {
            target.setAttribute('hidden', 'true');
            targetImg.textContent = 'folder';
        }
    }
}