let select = document.querySelectorAll("select");
let push = document.getElementById("btn");
let ringtone = new Audio("./tone.mp3");
let setime;
let close = false;
function settime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM";
  if (h < 10) {
    h = "0" + h;
  }
  if (h > 12) {
    h = h - 12;
    if (h < 10) {
      h = "0" + h;
    }
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (h >= 12) {
    ampm = "PM";
  }
  let time = document.querySelectorAll("h1");
  time[1].innerHTML = `${h}:${m}:${s} ${ampm}`;
  if (setime == `${h}:${m}:${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}
setInterval(settime, 1000);

for (let i = 12; i > 0; i--) {
  if (i < 10) {
    i = "0" + i;
  }
  let option = `<option value="${i}">${i}</option>
  `;
  select[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  if (i < 10) {
    i = "0" + i;
  }

  let option = `<option value="${i}">${i}</option>`;
  select[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i;
  if (ampm == 1) {
    ampm = "AM";
  } else {
    ampm = "PM";
  }

  let option = `<option value="${ampm}">${ampm}</option>`;
  select[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function setalarm() {
  setime = `${select[0].value}:${select[1].value}:${select[2].value}`;
  // push.innerHTML="clear Alarm"
}

push.addEventListener("click", setalarm);
