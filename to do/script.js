const inputText = document.getElementById('text');
const select = document.getElementById('days')

inputText.addEventListener('keydown', function () {
     const errorSpan = document.getElementById('error');
     errorSpan.innerText = '';
});

const button = document.getElementById('add');

button.addEventListener('click', function () {
     const errorSpan = document.getElementById('error');
     if (inputText.value === '') {
          errorSpan.innerText = 'Please add some text';
     }else if(select.value===''){
          errorSpan.innerText ='please select a day';
     }else {
          createItem();
          inputText.value = '';
          select.value = '';
          errorSpan.innerText = '';
     }

});
function createItem() {
     const div = document.createElement('div');
     div.className = 'item-container';
     const checkbox = document.createElement('input');
     checkbox.className = 'cbx';
     checkbox.setAttribute('type', 'checkbox');
     checkbox.addEventListener('click', function (event) {
          const div = event.target.closest("div");

          const elems = div.getElementsByClassName('item-text');
          if (elems.length > 0) {
               const span = elems[0]
               span.style.textDecoration = 'line-through';
          }
     });

     div.appendChild(checkbox);


     const span = document.createElement('span');
     span.className = 'item-text';
     span.innerText = select.value + ', ' + inputText.value;

     div.appendChild(span);

     const btn = document.createElement('button');
     btn.className = "btn";
     btn.innerText = 'x';

     btn.addEventListener('click', function (event) {
          const div = event.target.closest('div');
          itemsContainer.removeChild(div);
          console.log(event);
     });

     div.appendChild(btn);

     const itemsContainer = document.getElementById('items')
     itemsContainer.prepend(div);
}
