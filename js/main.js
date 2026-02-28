fetch("nav/nav.html")
  .then(res => res.text())
  .then(html => {
    document.querySelector("nav").innerHTML = html;

    const navBtn = document.querySelector(".nav-button");
    const navUL = document.querySelector(".nav-list");
    const overlay = document.querySelector('.overlay');

    navBtn.addEventListener("click", () => {
      navUL.classList.toggle("active");
      overlay.classList.toggle('active');
    });
    overlay.addEventListener("click",() =>{
      navUL.classList.remove("active");
      overlay.classList.toggle('active');
    })
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

// ANIMATION
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.2 
  }
);

reveals.forEach(el => observer.observe(el));

// ORDER

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".order-button");
  const closeButton = document.querySelector(".close-button");

  const form = document.querySelector(".order");
  const nameInput = form.querySelector("#menuName");
  const emailInput = form.querySelector("#menuEmail");
  const phoneInput = form.querySelector("#menuPhone");
  const noOfGuestsInput = form.querySelector("#noOfGuests");
  const paymentInput = form.querySelectorAll(".payment");
  const dateInput = form.querySelector("#menuDate");

  const checkboxes = form.querySelectorAll(".checkbox");
  const successBox = document.querySelector(".order-success");
  const overlay = document.querySelector(".overlay");

  submitButton.addEventListener("click", function (e) {
      e.preventDefault(); // chặn submit mặc định

      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const phoneValue = phoneInput.value.trim();
      const noOfGuestsValue = noOfGuestsInput.value.trim();
      const dateValue = dateInput.value;

      if (nameValue === "") {
          alert("Please enter your name");
          return;
      }
      if (emailValue === "") {
          alert("Please enter your email");
          return;
      }
      if (phoneValue === "") {
          alert("Please enter your phone");
          return;
      }
      if (noOfGuestsValue === "") {
          alert("Please choose how many people!");
          return;
      }
      if (dateValue === "") {
          alert("Please enter your date");
          return;
      }

      let checked = false;
      for(i=0;i<paymentInput.length;i++){
        if(paymentInput[i].checked){
          checked=true;
          break;
        }
      }
      if(!checked){
          alert("Please select your payment method");
          return;
      }

      let hasItem = false;
        checkboxes.forEach(cb => {
        if (cb.checked) hasItem = true;
      });
      if (!hasItem) {
          alert("Please select at least one item");
          return;
      }
      successBox.classList.add("active");
      overlay.classList.add("active");

      form.reset();
  });
  closeButton.addEventListener("click",e =>{
    e.preventDefault();
    overlay.classList.remove("active");
    successBox.classList.remove("active");
  });
  overlay.addEventListener("click",() =>{
    successBox.classList.remove("active");
  })
});
