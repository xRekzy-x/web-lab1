fetch("nav/nav.html")
  .then(res => res.text())
  .then(html => {
    document.querySelector("nav").innerHTML = html;

    const navBtn = document.querySelector(".nav-button");
    const navUL = document.querySelector(".nav-list");

    if (navBtn && navUL) {
      navBtn.addEventListener("click", () => {
        navUL.classList.toggle("active");
      });
    }
    // DARK MODE
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlTag = document.documentElement; //html tag

    themeToggleButton.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      htmlTag.setAttribute('data-theme', 'light');
      themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    } 
    else {
      htmlTag.setAttribute('data-theme', 'dark');
      themeToggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlTag.setAttribute('data-theme', savedTheme);
}
  });

  //do fetch ko chờ xong mới làm execute mấy dòng code sau nên để eventlistener bên trong then

  document.querySelectorAll(".order-item").forEach(item =>{
    const checkbox = item.querySelector("input");
    const count = item.querySelector(".count");
    const plus = item.querySelector(".plus");
    const minus = item.querySelector(".minus");
    
    let hiddenCount = 0;
    plus.onclick = e =>{
        e.stopPropagation();
        hiddenCount++;
        checkbox.checked=true;
        count.textContent=hiddenCount;
    }
    minus.onclick = e =>{
        e.stopPropagation();
        if(hiddenCount>0) hiddenCount--;
        if(hiddenCount===0) checkbox.checked=false;
        count.textContent=hiddenCount;
    }
    checkbox.onclick =e =>{
        e.stopPropagation();
        if(checkbox.checked) hiddenCount=1;
        else hiddenCount=0;
        count.textContent=hiddenCount;
    }
  })

//   FOOTER
fetch("footer/footer.html")
  .then(res => res.text())
  .then(html => {
    document.querySelector("footer").innerHTML = html;
  });

