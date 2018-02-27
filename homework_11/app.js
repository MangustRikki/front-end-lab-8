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


function createTree(parent, child, array) {
    array.forEach((item) => {

        let cloneChild = makeClone(child, false);
            cloneChild.textContent = item.title;
        let cloneParent = makeClone(parent, false);
            cloneParent.setAttribute('hidden', 'true');
            

        if(item.folder) { 
            cloneChild.prepend(makeClone(folderImg, true));
            cloneChild.classList.add('folder');
            if (item.children) {
            createTree(cloneParent, child, item.children);
            cloneChild.appendChild(cloneParent);
            }
            else {

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

let arrayLi = Array.from(document.querySelectorAll('li'));

function showHide(e) {
    let target = e.target.lastElementChild;
    console.log(target);
    if (target.getAttribute('hidden') === 'true') {
    target.removeAttribute('hidden');
   }
    else {
        target.setAttribute('hidden', 'true');
    }
    
//     let target = this.lastElementChild;
//     let target2 = this.firstElementChild;
//     console.log(this);
//     if (target) {    
// //    console.log(target);
//     if(target.getAttribute('hidden') === 'true') {
       
//         target.removeAttribute('hidden');
       
//         if (this.classList.contains('folder')) {
//             this.classList.add('open');
//         }
       
//     }
//      else if (this.classList.contains('open')) {
//          console.log('lalal');
//         this.lastElementChild.setAttribute('hidden', 'true');
//         this.classList.remove('open');
//      }
        
//     }

//     if (target2.className === "material-icons md-dark") {
//         target2.textContent = "folder_open";
//     }

}