var inputBx = document.querySelector('.inputBx');
var list = document.querySelector('#listItem');

inputBx.addEventListener('keyup', function (e) {
    if(e.key == 'Enter') {
        addItem(this.value);
        this.value = '';
    }
});

var addItem = function () {
    var listItem = document.createElement('li');
    listItem.innerHTML = (`${inputBx.value}<i></i>`);
    listItem.addEventListener('click', function () {
        this.classList.toggle('done');
    })
    listItem.querySelector('i').addEventListener('click', function (){
        listItem.remove();
    })
    list.appendChild(listItem);
}