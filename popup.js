document.addEventListener("DOMContentLoaded", () => {

   const toggle = document.getElementById("check-5");
   chrome.storage.local.get(["enabled"], (res) => {
        toggle.checked = res.enabled !== false; // default ON
        console.log("Popup loaded, enabled:", toggle.checked);
    });
   toggle.addEventListener("change", () => {
        const newState = toggle.checked;
        chrome.storage.local.set({ 'enabled': newState });
  
        if(!toggle.checked) {
             chrome.action.setIcon({path : "/turnOFF.png"},)
                }
        else {
             chrome.action.setIcon({ path : "/turnON.png" })
        }
 });
});