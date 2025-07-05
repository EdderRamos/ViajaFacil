document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = "/";
    } else {
      document.getElementById("error-msg").textContent =
        data.message || "Credenciales incorrectas";
    }
  } catch (error) {
    console.error("Error al enviar login:", error);
    document.getElementById("error-msg").textContent = "Error en el servidor";
  }
});
