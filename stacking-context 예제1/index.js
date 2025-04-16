const div1 = document.querySelector('#div1');
const btn_set_zindex = document.querySelector('#set_zindex');
const btn_reset_zindex = document.querySelector('#reset_zindex');
const btn_set_opacity = document.querySelector('#set_opacity');
const btn_reset_opacity = document.querySelector('#reset_opacity');

const div1child = document.getElementById('div1');
const txt_zindex = document.createElement('span');
div1child.append(txt_zindex);
const txt_opacity = document.createElement('span');
div1child.append(txt_opacity);

function click_set_z(e) {
  btn_set_zindex.disabled = true;
  btn_reset_zindex.disabled = false;
  div1.classList.add('z-index-apply');
  txt_zindex.innerHTML = 'z-index: 0;<br />';
}
function click_reset_z(e) {
  btn_reset_zindex.disabled = true;
  btn_set_zindex.disabled = false;
  div1.classList.remove('z-index-apply');
  txt_zindex.innerHTML = '';
}

function click_set_opa(e) {
  btn_set_opacity.disabled = true;
  btn_reset_opacity.disabled = false;
  div1.classList.add('opacity-apply');
  txt_opacity.innerHTML = 'opacity: 0.8;<br />';
}
function click_reset_opa(e) {
  btn_reset_opacity.disabled = true;
  btn_set_opacity.disabled = false;
  div1.classList.remove('opacity-apply');
  txt_opacity.innerHTML = '';
}

btn_set_zindex.addEventListener('click', click_set_z);
btn_reset_zindex.addEventListener('click', click_reset_z);
btn_set_opacity.addEventListener('click', click_set_opa);
btn_reset_opacity.addEventListener('click', click_reset_opa);
