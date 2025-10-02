
function showPage(id: string) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");
}

// Login simulado
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  if (email === "admin@hotel.com" && password === "1234") {
    (document.getElementById("loginMsg") as HTMLElement).innerText = "Login exitoso ✅";
    setTimeout(() => {
      window.location.href = "reservas.html";
    }, 1500);
  } else {
    (document.getElementById("loginMsg") as HTMLElement).innerText = "Credenciales inválidas ❌";
  }
});

// Reserva
document.getElementById("reservaForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  const habitacion = (document.getElementById("habitacion") as HTMLSelectElement).value;

  try {
    const res = await fetch("http://localhost:4000/reservar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, habitacion })
    });
    const data = await res.json();
    (document.getElementById("reservaMsg") as HTMLElement).innerText = data.message;
  } catch (err) {
    (document.getElementById("reservaMsg") as HTMLElement).innerText = "Error en el servidor";
  }
});
