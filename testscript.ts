function setQuestionResponsePair(buttonQuestion: HTMLElement, templateQuestion: HTMLElement, templateResponse: HTMLElement) {
    buttonQuestion?.addEventListener("click", () => {
      templateQuestion?.classList.remove("display");
      templateResponse?.classList.add("display");
    });
  }
  
  const buttonStart: HTMLElement | null = document.getElementById("button_start");
  const startPage: HTMLElement | null = document.getElementById("start_page");
  const templateQuestionDisplay: HTMLElement | null = document.getElementById("template_question1");
  
  buttonStart?.addEventListener("click", () => {
    templateQuestionDisplay?.classList.add("display");
    startPage?.classList.remove("display");
  });
  
  setQuestionResponsePair(
    document.getElementsByClassName("button_question"),
    document.getElementsByClassName("template_question"),
    document.getElementBycl("template_reponse")
  );
  
  setQuestionResponsePair(
    document.getElementsByClassName("button_reponse"),
    document.getElementsByClassName("template_reponse"),
    document.getElementsByClassName("template_question")
  );
  
  // repeat for each question and response pair
  