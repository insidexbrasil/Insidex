async function realizarTarefa() {
  try {
    const response = await fetch("/encurtar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        link: "https://www.instagram.com/insidexbrasil?igsh=czloNTU0dHdyNmlq"
      })
    });

    const data = await response.json();

    if (data.res === "SUCCESS") {
      window.open(data.short, "_blank");
    } else {
      alert("Erro: " + data.m);
    }
  } catch (error) {
    alert("Erro na requisição: " + error.message);
  }
}

function sacarSaldo() {
  alert("Saque ainda será implementado.");
}