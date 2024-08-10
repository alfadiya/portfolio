var sideMenu = document.getElementById("sidemenu");
function openmenu(){
 sideMenu.style.right="0px";
}
function closemenu(){
 sideMenu.style.right="-200px";
}
document.getElementById("bar-icon").addEventListener('click', openmenu);
document.getElementById("cross-icon").addEventListener('click', closemenu);
