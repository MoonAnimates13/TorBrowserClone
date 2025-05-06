function fetchOnion() {
  let input = document.getElementById("urlInput").value.trim();

  if (!input.startsWith("http")) {
    input = "http://" + input;
  }

  try {
    const url = new URL(input);

    if (!url.hostname.endsWith(".onion")) {
      alert("Please enter a valid .onion address.");
      return;
    }

    // Replace .onion with .onion.ws (Tor2web proxy)
    const proxyUrl = url.href.replace(".onion", ".onion.ws");

    // Open in new tab
    window.open(proxyUrl, "_blank");

  } catch (e) {
    alert("Invalid URL. Please try again.");
  }
}
