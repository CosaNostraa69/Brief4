//Section Accueil=>Question

const button1 = document.getElementById("button_1") as HTMLButtonElement;
const hiddenClass1 = document.getElementById("hidden_class1") as HTMLDivElement;
const hiddenClass2 = document.getElementById("hidden_class2") as HTMLDivElement;

button1.addEventListener("click", () => {
  hiddenClass1.classList.add("hidden");
  hiddenClass1.classList.remove("display");

  hiddenClass2.classList.add("display");
  hiddenClass2.classList.remove("hidden");
});

//Section Accueil=>Question (Apparaitre disparaitre)

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const isCorrect = choice.getAttribute("data-answer") === "true";
    const message = isCorrect ? "Bien joué!" : "Dommage!";
    const answerDisplay = document.querySelector("#hidden_class3");
    const goodJobAnswer = answerDisplay.querySelector(".goodjob_answer");
    const hiddenClasss2 = document.getElementById(
      "hidden_class2"
    ) as HTMLDivElement;
    const hiddenClass3 = document.getElementById(
      "hidden_class3"
    ) as HTMLDivElement;

     hiddenClasss2.classList.add("hidden");
    hiddenClasss2.classList.remove("display");

    hiddenClass3.classList.add("display");
    hiddenClass3.classList.remove("hidden");
    goodJobAnswer.textContent = message;
    answerDisplay.classList.remove("hidden");
  });
});



  //Section Reponse1 =>Question2(Apparaitre disparaitre)

  const button_3 = document.getElementById("button_3") as HTMLButtonElement;
  const hiddenClasss3 = document.getElementById(
    "hidden_class3"
  ) as HTMLDivElement;
  const hiddenClass4 = document.getElementById(
    "hidden_class4"
  ) as HTMLDivElement;

  button_3.addEventListener("click", () => {
    hiddenClasss3.classList.add("hidden");
    hiddenClasss3.classList.remove("display");

    hiddenClass4.classList.add("display");
    hiddenClass4.classList.remove("hidden");
  });

  //Section Question2=>Reponse2(Apparaitre disparaitre)

  // const confirm_button2 = document.getElementById(
  //   "confirm_button2"
  // ) as HTMLButtonElement;
  // const hiddenClasss4 = document.getElementById(
  //   "hidden_class4"
  // ) as HTMLDivElement;
  // const hiddenClass5 = document.getElementById(
  //   "hidden_class5"
  // ) as HTMLDivElement;

  // confirm_button2.addEventListener("click", () => {
  //   hiddenClasss4.classList.add("hidden");
  //   hiddenClasss4.classList.remove("display");

  //   hiddenClass5.classList.add("display");
  //   hiddenClass5.classList.remove("hidden");
  // });



  const choices = document.querySelectorAll(".choice2");

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const isCorrect = choice.getAttribute("data-answer") === "true";
      const message = isCorrect ? "Bien joué!" : "Dommage!";
      const answerDisplay = document.querySelector("#hidden_class5");
      const goodJobAnswer = answerDisplay.querySelector(".goodjob_answer2");
      const hiddenClasss4 = document.getElementById("hidden_class4") as HTMLDivElement;
      const hiddenClass5 = document.getElementById("hidden_class5") as HTMLDivElement;
  
      hiddenClasss4.classList.add("hidden");
      hiddenClasss4.classList.remove("display");
  
      hiddenClass5.classList.add("display");
      hiddenClass5.classList.remove("hidden");
  
      goodJobAnswer.textContent = message;
      answerDisplay.classList.remove("hidden");
    });
  });
  
