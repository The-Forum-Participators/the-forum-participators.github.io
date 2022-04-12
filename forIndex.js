function hideButton() {
  document.getElementById('privacyWarning').style.display = 'none';
}

function closeWindow() {
 window.close();
}

// This sets the theme
function switchThemes() {
  const theme = document.getElementsByTagName("body").className;
  if (theme == "light") {
    document.getElementsByTagName("body").className = "dark";
    document.getElementById("buttonthemeswitcher").innerHTML = "Light mode";
  } else if (theme == "dark") {
    document.getElementsByTagName("body").classname = "light";
    document.getElementById("buttonthemeswitcher").innerHTML = "Dark mode";
  }
}
