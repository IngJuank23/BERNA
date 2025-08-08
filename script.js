
// Script de activación/desactivación de campos
document.getElementById('editarSemanaBtn').onclick = () => {
  document.querySelectorAll('.tabla-semanal input').forEach(i => i.disabled = false);
};
document.getElementById('guardarSemanaBtn').onclick = () => {
  document.querySelectorAll('.tabla-semanal input').forEach(i => i.disabled = true);
};

document.getElementById('editarDatosBtn').onclick = () => {
  document.getElementById('pesoInput').disabled = false;
  document.getElementById('fechaPeso').disabled = false;
};
document.getElementById('guardarDatosBtn').onclick = () => {
  document.getElementById('pesoInput').disabled = true;
  document.getElementById('fechaPeso').disabled = true;
};

document.getElementById('editarHorariosBtn').onclick = () => {
  document.querySelectorAll('.horarios textarea').forEach(i => i.disabled = false);
};
document.getElementById('guardarHorariosBtn').onclick = () => {
  document.querySelectorAll('.horarios textarea').forEach(i => i.disabled = true);
};

document.getElementById('editarCitaBtn').onclick = () => {
  alert("Modo edición de citas activado");
};
document.getElementById('guardarCitaBtn').onclick = () => {
  alert("Citas guardadas");
};
