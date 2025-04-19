const tarefasPorDia = [0, 9, 6, 4, 5, 4, 2, 2, 3, 2, 4, 3, 4, 6, 11, 0, 4];
const dias = tarefasPorDia.map((_, i) => i);
const ctx = document.getElementById("grafico").getContext("2d");

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dias,
    datasets: [{
      label: 'Tarefas',
      data: tarefasPorDia,
      borderColor: '#00ffb7',
      tension: 0.4,
      fill: false,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: '#fff',
          callback: value => value + ' '
        },
        beginAtZero: true
      },
      x: {
        ticks: { color: '#fff' }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.raw} tarefas`
        }
      }
    }
  }
});

let saldo = 0.000;
const historico = document.getElementById("historicoTarefas");
const saldoDisplay = document.getElementById("saldoDisplay");

function realizarTarefa() {
  tarefasPorDia.push(1);
  chart.data.labels.push(chart.data.labels.length);
  chart.data.datasets[0].data.push(1);
  chart.update();

  saldo += 0.007;
  saldoDisplay.textContent = "Saldo: " + saldo.toFixed(3) + " Insidex";

  const item = document.createElement("div");
  item.className = "historico-item";
  item.textContent = `Tarefa realizada - Saldo atual: ${saldo.toFixed(3)} Insidex`;
  historico.prepend(item);
}