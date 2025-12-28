// Store current translations globally
let currentTranslations = {};

// Load translations
async function loadTranslations(lang) {
  const response = await fetch(`./locales/${lang}.json`);
  return await response.json();
}

// Update page content
function updateContent(translations) {
  currentTranslations = translations;
  
  document.getElementById('title').textContent = translations.title;
  document.getElementById('description').textContent = translations.description;
  document.getElementById('question').textContent = translations.question;
  document.getElementById('yesBtn').textContent = translations.yes;
  document.getElementById('noBtn').textContent = translations.no;
  
  // Update the language label
  document.querySelector('label[for="languageSelect"]').innerHTML = `<strong>${translations.language}</strong>`;
  
  // Clear the response message when language changes
  document.getElementById('responseMessage').textContent = '';
}

// Handle language change
document.getElementById('languageSelect').addEventListener('change', async (e) => {
  const selectedLang = e.target.value;
  const translations = await loadTranslations(selectedLang);
  updateContent(translations);
});

// Load default language on page load
window.addEventListener('DOMContentLoaded', async () => {
  const defaultLang = document.getElementById('languageSelect').value;
  const translations = await loadTranslations(defaultLang);
  updateContent(translations);
});

// Handle button clicks with localized messages displayed on page
document.getElementById('yesBtn').addEventListener('click', () => {
  document.getElementById('responseMessage').textContent = currentTranslations.yesAlert;
});

document.getElementById('noBtn').addEventListener('click', () => {
  document.getElementById('responseMessage').textContent = currentTranslations.noAlert;
});