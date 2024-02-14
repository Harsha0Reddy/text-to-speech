function butt() {
    let buttonName = document.getElementById("button");
  
    if (buttonName.innerText == "Convert to speech") {
      let voice = new SpeechSynthesisUtterance(
        document.getElementById("tArea").value
      );
      speechSynthesis.speak(voice);
      buttonName.innerText = "Speaking";
    } else if (buttonName.innerText == "Speaking") {
      speechSynthesis.pause();
      buttonName.innerText = "Resume";
    } else if (buttonName.innerText == "Resume") {
      speechSynthesis.resume();
      buttonName.innerText = "Speaking";
    }
  }