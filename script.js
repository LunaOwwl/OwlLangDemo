const elements = {
  title: document.getElementById("title"),
  description: document.getElementById("description"),
  question: document.getElementById("question"),
  yesBtn: document.getElementById("yesBtn"),
  noBtn: document.getElementById("noBtn"),
};

function loadLanguage(lang) {
  fetch(`./locales/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      elements.title.textContent = data.title;
      elements.description.textContent = data.description;
      elements.question.textContent = data.question;
      elements.yesBtn.textContent = data.yes;
      elements.noBtn.textContent = data.no;
    })
    .catch(err => console.error("Error loading language file:", err));
}

// default language
loadLanguage("en");

// add listeners for language buttons
document.querySelectorAll(".language-button").forEach(button => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    loadLanguage(lang);
  });
});
