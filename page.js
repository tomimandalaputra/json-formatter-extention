document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("jsonInput");
  input.value = "";

  document.getElementById("toPretty").addEventListener("click", () => {
    try {
      const obj = JSON.parse(input.value);
      input.value = JSON.stringify(obj, null, 2);
    } catch {
      alert("Invalid JSON string");
    }
  });

  document.getElementById("toString").addEventListener("click", () => {
    try {
      const obj = JSON.parse(input.value);
      input.value = JSON.stringify(obj);
    } catch {
      alert("Invalid JSON");
    }
  });

  document.getElementById("copyText").addEventListener("click", () => {
    if (!input.value) {
      alert("Textarea is empty");
      return;
    }
    navigator.clipboard.writeText(input.value)
      .then(() => alert("Copied to clipboard"))
      .catch(() => alert("Failed to copy"));
  });
});
