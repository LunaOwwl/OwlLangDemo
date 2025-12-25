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

      // page direction handling
      if (lang === "ar") {
        document.body.setAttribute("dir", "rtl");
      } else {
        document.body.setAttribute("dir", "ltr");
      }
    })
    .catch(err => console.error("Error loading language file:", err));
}

// default language
loadLanguage("en");

// dropdown language change
const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", () => {
  loadLanguage(languageSelect.value);
});

languageSelect.value = "en";
