function toggleEditable(sectionId, editable) {
  document.querySelectorAll(sectionId + " input, " + sectionId + " textarea")
    .forEach(el => el.disabled = !editable);
}

document.getElementById("editarSemanaBtn").onclick = () =>
  toggleEditable(".tabla-semanal", true);
document.getElementById("guardarSemanaBtn").onclick = () =>
  toggleEditable(".tabla-semanal", false);

document.getElementById("editarDatosBtn").onclick = () =>
  toggleEditable(".peso-editable", true);
document.getElementById("guardarDatosBtn").onclick = () =>
  toggleEditable(".peso-editable", false);

document.getElementById("editarHorariosBtn").onclick = () =>
  toggleEditable(".horarios", true);
document.getElementById("guardarHorariosBtn").onclick = () =>
  toggleEditable(".horarios", false);

document.getElementById("editarCitaBtn").onclick = () =>
  toggleEditable(".calendario", true);
document.getElementById("guardarCitaBtn").onclick = () =>
  toggleEditable(".calendario", false);
