var profileMenu = document.getElementById("profileMenu");
function toggleMenu(){
  profileMenu.classList.toggle("open-menu")
}

let sideActivity=document.getElementById("sidebarActivity");
let moreLink=document.getElementById("showMoreLink");

function toggleActivity()
{
  sideActivity.classList.toggle("open-activity");

  if(sideActivity.classList.contains("open-activity"))
  {
    moreLink.innerHTML = "show less <b>-</b>"
  }
  else{moreLink.innerHTML = "show More <b>+</b>"
  }
}