console.log(conversor(5500));
function conversor(t) {
  const h = Math.trunc(t / 3600);
  const m = Math.trunc((t % 3600) / 60);
  const s = t % 60;
  return format(h, m, s);
}
function format(h, m, s) {
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
function pad(n) {
  n.toString().padStart("2", 0);
}

