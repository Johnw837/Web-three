function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');
}

function openEvents() {
  showPage('events');
}

function goBack() {
  showPage('play');
}

/* MENU TOGGLE */
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.onclick = () => {
  menu.classList.toggle('hidden');
};
