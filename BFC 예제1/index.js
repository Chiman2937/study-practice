const btn_absOn = document.querySelector('#absOn');
const btn_absOff = document.querySelector('#absOff');

const div1 = document.querySelector('.div1');
const txt_pos = document.createElement('p');
const txt_bfc = document.createElement('p');
txt_bfc.textContent = "I'm not BFC";
txt_bfc.style.color = 'blue';
txt_pos.textContent = 'position: static';
txt_pos.style.color = 'blue';
div1.append(txt_pos);
div1.append(txt_bfc);

function absOn(e) {
  btn_absOn.disabled = true;
  btn_absOff.disabled = false;
  div1.classList.add('abs');
  txt_bfc.textContent = "I'm BFC";
  txt_pos.textContent = 'position: absolute';
  txt_bfc.style.color = 'red';
  txt_pos.style.color = 'red';
}

function absOff(e) {
  btn_absOff.disabled = true;
  btn_absOn.disabled = false;
  div1.classList.remove('abs');
  txt_bfc.textContent = "I'm not BFC";
  txt_pos.textContent = 'position: static';
  txt_bfc.style.color = 'blue';
  txt_pos.style.color = 'blue';
}

btn_absOn.addEventListener('click', absOn);
btn_absOff.addEventListener('click', absOff);
