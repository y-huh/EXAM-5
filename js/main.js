
let elForm = document.querySelector(".login-form");

let elBtn = document.querySelector(".login-btn");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    password: e.target.password.value,
  };

  elBtn.innerHTML = '<img class="scale-[1.5] mx-auto" src="./images/Spinner@1x-1.0s-200px-200px (1).png" alt="Loading ..." width="38" height="37">';

  if (data.username === "y-huh" && data.password === "123") {
    setTimeout(() => {
      elBtn.innerHTML = "Войти";
      location.pathname = "./admin.html";
    }, 1000);
  } else {
    setTimeout(() => {
        elBtn.innerHTML = "Ошибка";
      }, 1000);
    
      }
});


