const codeList = "\n  0JWYWKV03DXB\n  CODE12345678\n  MYSECRETLOGIN\n VINCENT\n KOD123\".trim().split("\n").map(_0xb0192 => _0xb0192.trim());
function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
}
if (!(window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone)) {
  window.location.href = "/addtohome.html";
}
function login() {
  const _0x22c2e1 = document.getElementById("code").value.trim().toUpperCase();
  const _0x415a3b = document.getElementById("error");
  const _0x49329f = navigator.userAgent;
  if (!codeList.includes(_0x22c2e1)) {
    _0x415a3b.innerText = "Invalid or expired code.";
    _0x415a3b.style.display = "block";
    return;
  }
  const _0x290591 = "device_lock_" + _0x22c2e1;
  const _0x334b11 = localStorage.getItem(_0x290591);
  if (_0x334b11 && _0x334b11 !== _0x49329f) {
    _0x415a3b.innerText = "This code is already used on another device.";
    _0x415a3b.style.display = "block";
    return;
  }
  localStorage.setItem(_0x290591, _0x49329f);
  localStorage.setItem('activeCode', _0x22c2e1);
  window.location.href = "/appuser.html";
}
