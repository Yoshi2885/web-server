console.log("コンソールログ");

const img_src = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
];
let num = 0;

function start() {
  setInterval(slide_time, 2000);
}

function slide_time() {
  if (num === 4) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}

function alertMessage() {
  window.alert("ここはクリックする所ではないよ");
}

function sendingMessage() {
  window.alert("データを送信しました(現在は動いていませんのでダミーです)");
}

// csvに最終的に吐出したい。まずは、入力されたデータを取得できる状態を目指す。
function getText() {
  const result = {};
  result["type"] = document.getElementsByName("item")[0].value;
  result["userName"] = document.getElementsByName("name")[0].value;
  result["mail"] = document.getElementsByName("email")[0].value;
  result["message"] = document.getElementById("comment").value;

  console.log("result is: ", result);

  const fileName = "test.json";
  const saveData = JSON.stringify(result);
  localStorage.setItem(fileName, saveData);

  return result;
}

const h2Arrays = document.getElementsByTagName("h2");
const sendBtn = document.getElementsByClassName("btn-area");

h2Arrays[0].addEventListener("click", alertMessage);
sendBtn[0].addEventListener("click", getText);
sendBtn[0].addEventListener("click", sendingMessage);
