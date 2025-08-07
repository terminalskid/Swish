// Codes stored here
const codeList = `
  0JWYWKV03DXB
  CODE12345678
  MYSECRETLOGIN
`.trim().split("\n").map(c => c.trim());

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
}

// Force redirect to add-to-home screen if not in standalone mode
if (!isStandalone()) {
  window.location.href = "/addtohome.html";
}

function login() {
  const code = document.getElementById("code").value.trim().toUpperCase();
  const error = document.getElementById("error");
  const userAgent = navigator.userAgent;

  if (!codeList.includes(code)) {
    error.innerText = "Invalid or expired code.";
    error.style.display = "block";
    return;
  }

  const deviceKey = `device_lock_${code}`;
  const existingDevice = localStorage.getItem(deviceKey);

  if (existingDevice && existingDevice !== userAgent) {
    error.innerText = "This code is already used on another device.";
    error.style.display = "block";
    return;
  }

  localStorage.setItem(deviceKey, userAgent);
  localStorage.setItem("activeCode", code);
  window.location.href = "/appuser.html";
}
