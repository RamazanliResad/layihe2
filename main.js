const add = document.querySelector('#add');
const sort = document.querySelector('#sort');
const list = document.querySelector('#list');
let sorted = false;

function addListItem(text, list) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = text;

    const del = document.createElement('button')
    del.innerText ='X';
    del.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    li.append(span, del);
    list.append(li);
}

add.addEventListener('click', () => {
 const info = prompt();
 addListItem(info, list);
});

sort:addEventListener('click', () => {
    const arr = new Array ();
    const siyahi = document.querySelectorAll('li');
    siyahi.forEach(li => {
        arr.push(li.firstElementChild.innerText);
    });
    if(!sorted) {
        arr.sort((a,b) => {
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });
    } else {
        arr.sort((a,b) => {
            if(a < b) return 1;
            if(a > b) return -1;
            return 0;
        });
        sorted = false;
    }

    list.innerHTML= '';
    arr.forEach(item => {
        addListItem(item, list);
    });
});