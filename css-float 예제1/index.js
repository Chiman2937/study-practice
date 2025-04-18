const div2 = document.querySelector('.div2');
const btn_left = document.querySelector('#left');
const btn_none = document.querySelector('#none');

const txt_float = document.createElement('span');
txt_float.textContent = 'float:none';
div2.append(txt_float);

function click_left(e) {
  btn_none.disabled = false;
  btn_left.disabled = true;
  div2.classList.add('float-left');
  div2.classList.remove('float-none');
  txt_float.textContent = 'float:left';
}
function click_none(e) {
  btn_left.disabled = false;
  btn_none.disabled = true;
  div2.classList.add('float-none');
  div2.classList.remove('float-left');
  txt_float.textContent = 'float:none';
}

btn_left.addEventListener('click', click_left);
btn_none.addEventListener('click', click_none);
