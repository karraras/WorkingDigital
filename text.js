setInterval(() => {
  let dateNow = new Date();
  let h = dateNow.getHours();
  let m = dateNow.getMinutes();
  let s = dateNow.getSeconds();
  let time = `${h >= 10 ? h : `0${h}`}:${m >= 10 ? m : `0${m}`}:${
    s >= 10 ? s : `0${s}`
  } ${h > 12 ? `PM` : `AM`}`;

  document.querySelector(".parent").innerHTML = time;
}, 1000);
