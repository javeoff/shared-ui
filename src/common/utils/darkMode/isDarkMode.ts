export let isDarkMode = false;

export const toggleDarkMode = () => {
  window.document.body.classList.toggle('dark');
  isDarkMode = !isDarkMode
}
