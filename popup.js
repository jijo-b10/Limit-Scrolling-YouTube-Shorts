
document.addEventListener("DOMContentLoaded", () => {


    const inputGroup = document.querySelector(".input-group");
     function updateInputVisibility() {
        inputGroup.style.display = toggle.checked ? "flex" : "none";
    }
   const toggle = document.getElementById("check-5");
   chrome.storage.local.get(["enabled"], (res) => {
        toggle.checked = res.enabled !== false; // default ON
        console.log("Popup loaded, enabled:", toggle.checked);
    });
   toggle.addEventListener("change", () => {
        const newState = toggle.checked;
        chrome.storage.local.set({ 'enabled': newState });
        updateInputVisibility();

        if(!toggle.checked) {
             chrome.action.setIcon({path : "/turnOFF.png"},)
             
                }
        else {
             chrome.action.setIcon({ path : "/turnON.png" })
        }
 });
});
const input = document.getElementById('input-5');
const dec = document.getElementById('decrement');
const inc = document.getElementById('increment');


chrome.storage.local.get(["shortCount"], (res) => {
    input.value = (res.shortCount !== undefined) ? res.shortCount : 5;
    refreshButtons();
  });
  function refreshButtons() {
    dec.disabled = input.value <= 1;
    inc.disabled = input.value >= 10;
    chrome.storage.local.set({ 'shortCount': input.value });
  }

  dec.addEventListener('click', () => {
    input.value = input.value > 1 ? parseInt(input.value, 10) - 1 : 1;
    refreshButtons();
  });

  inc.addEventListener('click', () => {
    input.value = input.value < 10 ? parseInt(input.value, 10) + 1 : 10;
    refreshButtons();
  });

  input.addEventListener('input', () => {
    refreshButtons();
  });
