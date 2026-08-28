/* Attendance toggle — pure JS, 3-state cycle per child */
function cycleAtt(btn) {
  const s = btn.getAttribute('data-state') || 'in';
  const next = {in:'izin', izin:'tidak', tidak:'in'};
  const n = next[s];
  btn.setAttribute('data-state', n);
  const map = {in:{label:'Hadir',cls:'st in'}, izin:{label:'Izin',cls:'st izin'}, tidak:{label:'Tidak Hadir',cls:'st tidak'}};
  const info = map[n];
  btn.textContent = info.label;
  btn.className = info.cls + ' toggle-btn';
  document.getElementById('att-count').textContent = document.querySelectorAll('.toggle-btn[data-state="in"]').length + '/6';
}
