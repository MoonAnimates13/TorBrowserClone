function fetchOnion() {
  let url = document.getElementById("urlInput").value;

  // If the user enters a raw .onion URL, add .ws proxy
  if (url.endsWith('.onion')) {
    url = url.replace('.onion', '.onion.ws');
  }

  document.getElementById("output").src = url;
}
