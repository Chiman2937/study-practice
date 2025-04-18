const btn_posOn = document.querySelector('#posOn');
const btn_posOff = document.querySelector('#posOff');
const btn_floatOn = document.querySelector('#floatOn');
const btn_floatOff = document.querySelector('#floatOff');

const div1 = document.querySelector('.div');
const divfloat = document.querySelector('.float');

const txt_div1_isBFC = document.createElement('span');
const txt_div12html = document.createElement('span');
const txt_float2html = document.createElement('span');
const txt_float2div1 = document.createElement('span');

txt_div1_isBFC.innerHTML = '저는 BFC가 아닙니다<br>';
txt_div1_isBFC.style.color = 'blue';
txt_div12html.innerHTML = '저는 &lt;html&gt;의 레이아웃에 영향을 줍니다<br>';
txt_div12html.style.color = 'red';

txt_float2html.innerHTML = '&lt;html&gt;의 레이아웃에 영향을 줍니다<br>';
txt_float2html.style.color = 'red';
txt_float2div1.innerHTML = '&lt;div1&gt;의 레이아웃에 영향을 주지않습니다<br>';
txt_float2div1.style.color = 'blue';

div1.append(txt_div1_isBFC);
div1.append(txt_div12html);
divfloat.append(txt_float2html);
divfloat.append(txt_float2div1);

function click_posOn(e) {
  txt_div1_isBFC.innerHTML = '저는 BFC(position:absolute) 입니다<br>';
  txt_div1_isBFC.style.color = 'red';
  txt_div12html.innerHTML =
    '저는 &lt;html&gt;의 레이아웃에 영향을 주지않습니다<br>';
  txt_div12html.style.color = 'blue';
  txt_float2html.innerHTML =
    '&lt;html&gt;의 레이아웃에 영향을 주지않습니다<br>';
  txt_float2html.style.color = 'blue';
  txt_float2div1.innerHTML = '&lt;div1&gt;의 레이아웃에 영향을 줍니다<br>';
  txt_float2div1.style.color = 'red';
  div1.classList.add('pos');
  div1.classList.remove('float');
  btn_posOn.disabled = true;
  btn_posOff.disabled = false;
  btn_floatOn.disabled = true;
  btn_floatOff.disabled = true;
}
function click_posOff(e) {
  txt_div1_isBFC.innerHTML = '저는 BFC가 아닙니다<br>';
  txt_div1_isBFC.style.color = 'blue';
  txt_div12html.innerHTML = '저는 &lt;html&gt;의 레이아웃에 영향을 줍니다<br>';
  txt_div12html.style.color = 'red';
  txt_float2html.innerHTML = '&lt;html&gt;의 레이아웃에 영향을 줍니다<br>';
  txt_float2html.style.color = 'red';
  txt_float2div1.innerHTML =
    '&lt;div1&gt;의 레이아웃에 영향을 주지않습니다<br>';
  txt_float2div1.style.color = 'blue';
  div1.classList.remove('pos');
  btn_posOn.disabled = false;
  btn_posOff.disabled = true;
  btn_floatOn.disabled = false;
  btn_floatOff.disabled = true;
}

function click_floatOn(e) {
  txt_div1_isBFC.innerHTML = '저는 BFC(float:left) 입니다<br>';
  txt_div1_isBFC.style.color = 'red';
  txt_div12html.innerHTML = '저는 &lt;html&gt;의 레이아웃에 영향을 줍니다<br>';
  txt_div12html.style.color = 'red';
  txt_float2html.innerHTML = '&lt;html&gt;의 레이아웃에 영향을 줍니다<br>';
  txt_float2html.style.color = 'red';
  txt_float2div1.innerHTML = '&lt;div1&gt;의 레이아웃에 영향을 줍니다<br>';
  txt_float2div1.style.color = 'red';
  div1.classList.add('float');
  div1.classList.remove('pos');
  btn_posOn.disabled = true;
  btn_posOff.disabled = true;
  btn_floatOn.disabled = true;
  btn_floatOff.disabled = false;
}
function click_floatOff(e) {
  txt_div1_isBFC.innerHTML = '저는 BFC가 아닙니다<br>';
  txt_div1_isBFC.style.color = 'blue';
  txt_div12html.innerHTML = '저는 &lt;html&gt;의 레이아웃에 영향을 줍니다<br>';
  txt_div12html.style.color = 'red';
  txt_float2html.innerHTML = '&lt;html&gt;의 레이아웃에 영향을 줍니다<br>';
  txt_float2html.style.color = 'red';
  txt_float2div1.innerHTML =
    '&lt;div1&gt;의 레이아웃에 영향을 주지않습니다<br>';
  txt_float2div1.style.color = 'blue';
  div1.classList.remove('float');
  btn_posOn.disabled = false;
  btn_posOff.disabled = true;
  btn_floatOn.disabled = false;
  btn_floatOff.disabled = true;
}

btn_posOn.addEventListener('click', click_posOn);
btn_posOff.addEventListener('click', click_posOff);
btn_floatOn.addEventListener('click', click_floatOn);
btn_floatOff.addEventListener('click', click_floatOff);
