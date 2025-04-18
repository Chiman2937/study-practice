const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');
const btn_left = document.querySelector('#left');
const btn_none = document.querySelector('#none');
const btn_long = document.querySelector('#long-text');
const btn_short = document.querySelector('#short-text');

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

function click_longtext(e) {
  btn_short.disabled = false;
  btn_long.disabled = true;
  div3.innerHTML =
    'div3 <br /> float:none longtextlongtextlongtextlongtextlongtext';
}
function click_shorttext(e) {
  btn_long.disabled = false;
  btn_short.disabled = true;
  div3.innerHTML = 'div3 <br /> float:none';
}

btn_left.addEventListener('click', click_left);
btn_none.addEventListener('click', click_none);
btn_long.addEventListener('click', click_longtext);
btn_short.addEventListener('click', click_shorttext);
