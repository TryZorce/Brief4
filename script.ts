/** Quand on clique sur button_start : cache start_page et affiche template_question1   */

const button_start: HTMLElement | null = document.getElementById("button_start");
const start_page: HTMLElement | null = document.getElementById("start_page");
const template_question_display: HTMLElement | null = document.getElementById("template_question1");

button_start?.addEventListener("click", () => {
    template_question_display?.classList.add("display");
    start_page?.classList.remove("display");
})

/** Quand on clique sur button_question1 : Cache template_question1 et affiche template_reponse1    */

const button_question1: HTMLElement | null = document.getElementById("button_question1");
const template_question1_display: HTMLElement | null = document.getElementById("template_question1");
const template_reponse1_nodisplay: HTMLElement | null = document.getElementById("template_reponse1");

button_question1?.addEventListener("click", () => {
    template_question1_display?.classList.remove("display");
    template_reponse1_nodisplay?.classList.add("display");
})

/** Quand on clique sur button_reponse1 : Cache template_reponse1 et affiche template_question2    */
const button_reponse1: HTMLElement | null = document.getElementById("button_reponse1");
const template_reponse1_display: HTMLElement | null = document.getElementById("template_reponse1");
const template_question2_nodisplay: HTMLElement | null = document.getElementById("template_question2");

button_reponse1?.addEventListener("click", () => {
    template_reponse1_display?.classList.remove("display");
    template_question2_nodisplay?.classList.add("display");
})

/** Quand on clique sur button_question2 : Cache template_question2 et affiche template_reponse2    */
const button_question2: HTMLElement | null = document.getElementById("button_question2");
const template_question2_display: HTMLElement | null = document.getElementById("template_question2");
const template_reponse2_nodisplay: HTMLElement | null = document.getElementById("template_reponse2");

button_question2?.addEventListener("click", () => {
    template_question2_display?.classList.remove("display");
    template_reponse2_nodisplay?.classList.add("display");
})

/** Quand on clique sur button_reponse2 : Cache template_reponse2 et affiche template_question3    */
const button_reponse2: HTMLElement | null = document.getElementById("button_reponse2");
const template_reponse2_display: HTMLElement | null = document.getElementById("template_reponse2");
const template_question3_nodisplay: HTMLElement | null = document.getElementById("template_question3");

button_reponse2?.addEventListener("click", () => {
    template_reponse2_display?.classList.remove("display");
    template_question3_nodisplay?.classList.add("display");
})

/** Quand on clique sur button_question3 : Cache template_question3 et affiche template_reponse3    */
const button_question3: HTMLElement | null = document.getElementById("button_question3");
const template_question3_display: HTMLElement | null = document.getElementById("template_question3");
const template_reponse3_nodisplay: HTMLElement | null = document.getElementById("template_reponse3");

button_question3?.addEventListener("click", () => {
    template_question3_display?.classList.remove("display");
    template_reponse3_nodisplay?.classList.add("display");
})

/** Quand on clique sur button_reponse3 : Cache template_reponse3 et affiche template_question4   */
const button_reponse3: HTMLElement | null = document.getElementById("button_reponse3");
const template_reponse3_display: HTMLElement | null = document.getElementById("template_reponse3");
const template_question4_nodisplay: HTMLElement | null = document.getElementById("template_question4");

button_reponse3?.addEventListener("click", () => {
    template_reponse3_display?.classList.remove("display");
    template_question4_nodisplay?.classList.add("display");
})

/** Quand on clique sur button_question4 : Cache template_question4  et affiche template_reponse4   */
const button_question4: HTMLElement | null = document.getElementById("button_question4");
const template_question4_display: HTMLElement | null = document.getElementById("template_question4");
const template_reponse4_nodisplay: HTMLElement | null = document.getElementById("template_reponse4");

button_question4?.addEventListener("click", () => {
    template_question4_display?.classList.remove("display");
    template_reponse4_nodisplay?.classList.add("display");
})

/** Quand on clique sur button_reponse4 : Cache template_reponse4 et affiche template_question5   */
const button_reponse4: HTMLElement | null = document.getElementById("button_reponse4");
const template_reponse4_display: HTMLElement | null = document.getElementById("template_reponse4");
const template_question5_nodisplay: HTMLElement | null = document.getElementById("template_question5");

button_reponse4?.addEventListener("click", () => {
    template_reponse4_display?.classList.remove("display");
    template_question5_nodisplay?.classList.add("display");
})

/** Quand on clique sur button_question5 : Cache template_question5 et affiche template_reponse5    */
const button_question5: HTMLElement | null = document.getElementById("button_question5");
const template_question5_display: HTMLElement | null = document.getElementById("template_question5");
const template_reponse5_nodisplay: HTMLElement | null = document.getElementById("template_reponse5");

button_question5?.addEventListener("click", () => {
    template_question5_display?.classList.remove("display");
    template_reponse5_nodisplay?.classList.add("display");
})

/** Quand on clique sur button_reponse5 : Cache template_reponse5 et affiche template_final    */
const button_reponse5: HTMLElement | null = document.getElementById("button_reponse5");
const template_reponse5_display: HTMLElement | null = document.getElementById("template_reponse5");
const template_final_nodisplay: HTMLElement | null = document.getElementById("template_final");

button_reponse5?.addEventListener("click", () => {
    template_reponse5_display?.classList.remove("display");
    template_final_nodisplay?.classList.add("display");
})
