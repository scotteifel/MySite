function copyEmail() {
  const email = "scotte@reagan.com";
  navigator.clipboard.writeText(email);
  alert("Email address copied!");
}
