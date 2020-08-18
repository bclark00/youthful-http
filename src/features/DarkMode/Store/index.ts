import { useEffect } from "react";

export function useDarkMode() {

  // let [prefersDark, setPrefersDark] = useState(false)
  // Use matchMedia to check the user preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  toggleDarkTheme(prefersDark.matches);

  // Listen for changes to the prefers-color-scheme media query
  prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

  // Add or remove the "dark" class based on if the media query matches
  function toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  useEffect(() => {

  }, [])
}

  // Query for the toggle that is used to change between themes
// const toggle = document.querySelector('#themeToggle');

// // Listen for the toggle check/uncheck to toggle the dark class on the <body>
// toggle.addEventListener('ionChange', (ev) => {
//   document.body.classList.toggle('dark', ev.detail.checked);
// });

// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// // Listen for changes to the prefers-color-scheme media query
// prefersDark.addListener((e) => checkToggle(e.matches));

// // Called when the app loads
// function loadApp() {
//   checkToggle(prefersDark.matches);
// }

// // Called by the media query to check/uncheck the toggle
// function checkToggle(shouldCheck) {
//   toggle.checked = shouldCheck;
// }

// https://ionicframework.com/docs/theming/dark-mode