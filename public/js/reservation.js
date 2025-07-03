const params = new URLSearchParams(window.location.search);
const packageId = params.get("id");

if (!packageId) {
  alert("Package ID not found in URL");
}

fetch(`/api/travel-packages/${packageId}`)
  .then((res) => res.json())
  .then((packageData) => renderPackage(packageData))
  .catch((err) => console.error("Failed to load travel package:", err));

document.addEventListener("DOMContentLoaded", () => {
  const fechaInput = document.getElementById("fecha");
  const hoy = new Date();
  const manana = new Date(hoy);
  manana.setDate(hoy.getDate() + 1);

  const yyyy = manana.getFullYear();
  const mm = String(manana.getMonth() + 1).padStart(2, "0");
  const dd = String(manana.getDate()).padStart(2, "0");
  fechaInput.min = `${yyyy}-${mm}-${dd}`;

  const form = document.getElementById("form-reserva");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const reservaData = {
      package: packageId,
      customerName: form.nombre.value.trim(),
      email: form.email.value.trim(),
      phone: form.telefono.value.trim(),
      travelDate: form.fecha.value,
      peopleCount: parseInt(form.personas.value, 10),
      comments: form.comentarios.value.trim(),
    };
    const formData = JSON.stringify(reservaData);
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });

      const result = await response.json();
      console.log("Datos enviados:", formData);
      if (response.ok) {
        document.getElementById("mensaje-exito").style.display = "block";
        form.reset();
      } else {
        alert(result.message || "Ocurrió un error al enviar la reserva.");
      }
    } catch (error) {
      console.error("Error al enviar la reserva:", error);
      alert("Error de red o del servidor.");
    }
  });
});
