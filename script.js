
const inpname = document.querySelector("#inp-text");
const inpemail = document.querySelector("#inp-email");
const submit = document.querySelector("#submit");

const data = JSON.parse(localStorage.getItem("portfolio_info")) || [];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inpname.value === "" || inpemail.value === "") {
    alert("PLease the blank")
  } else {
    sendlocalstorage();
  }
});

function sendlocalstorage(){
   const data = JSON.parse(localStorage.getItem("portfolio_info")) || [];
  const FormData = [...data];
  FormData.push({
    id: data.lenght++,
    name: inpname.value,
    email: inpemail.value,
    time: new Date().toLocaleTimeString(),
  });
  localStorage.setItem("portfolio_info", JSON.stringify(FormData));
  inpname.value = "";
  inpemail.value = "";
}

const navbar = document.querySelector("#nav");
const btn = document.querySelector("#line-btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  navbar.classList.toggle("nav-add");
});

var countDownDate = new Date("Jan 1, 2023 20:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;


  var day = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var second = Math.floor((distance % (1000 * 60)) / 1000);

  +minute + "m " + second + "s ";

  document.getElementById("days").innerHTML = day;

  document.getElementById("hours").innerHTML = hour;

  document.getElementById("minutes").innerHTML = minute;

  document.getElementById("seconds").innerHTML = second;

  if (distance < 0) {
    clearInterval(x);

    document.getElementById("demo").innerHTML = "Happy New Year";
  }
}, 1000);
