document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuList = document.querySelector('.menu-list');

    menuIcon.addEventListener('click', function() {
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
    })
    var menu=document.querySelector ('.menu-icon');
    var item=document.querySelector('.menu-list')
        window.onload(function(){
        menu.addEventListener("click", function() {
// display 속성을 변경합니다.
        if (item.style.display === "none") {
            item.style.display = "block";
        } 
        else {
            item.style.display = "none";
            }
        })
    })

    });

var menu=document.querySelector ('.menu-icon');
    var item=document.
    window.onload(function(){
        menu.addEventListener("click", function() {
      // display 속성을 변경합니다.
      if (item.style.display === "none") {
        item.style.display = "block";
      } 
      else {
        item.style.display = "none";
      }
    })
})