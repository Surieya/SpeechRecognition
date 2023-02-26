const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine.. What About you?";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Eagle";
      texts.appendChild(p);
    }
    // if (text.includes("open my YouTube")) {
    //   p = document.createElement("p");
    //   p.classList.add("replay");
    //   p.innerText = "opening youtube channel";
    //   texts.appendChild(p);
    //   console.log("opening youtube");
    //   window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
    // }
    if(text.includes("hi || Hi")){
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "hi suriya how can I help you";
        texts.appendChild(p);
    }
    if(text.includes("hello" || "Hello")){
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "hello saravanan how can I help you";
        texts.appendChild(p);
    }
    if(text.includes("hey" || "Hey")){
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "hello Thanush how can I help you";
        texts.appendChild(p);
    }

    if(text)
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
