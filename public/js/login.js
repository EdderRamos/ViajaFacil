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
      showModal("¡Bienvenido, " + username + "!");
    } else {
      showModal(data.message || "Credenciales incorrectas");
    }
  } catch (error) {
    console.error("Error al enviar login:", error);
    showModal("Error de conexión al servidor");
  }
});

function showModal(message) {
  document.getElementById("modal-message").textContent = message;
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("myModal");
  if (e.target === modal) closeModal();
});

document.getElementById("go-home-btn").addEventListener("click", () => {
  window.location.href = "/";
});
