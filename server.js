function getRandomProxy() {
  const proxies = [
    ".onion.pet",
    ".onion.ws",
    ".onion.link",
    ".onion.city",
    ".tor2web.org"
  ];
  const randomProxy = proxies[Math.floor(Math.random() * proxies.length)];
  return randomProxy;
}

document.getElementById("goButton").addEventListener("click", function () {
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

    // Randomly select a Tor2web gateway
    const proxyUrl = url.href.replace(".onion", getRandomProxy());

    // Open the proxy site in a new tab
    window.open(proxyUrl, "_blank");
  } catch (e) {
    alert("Invalid URL. Please try again.");
  }
});

