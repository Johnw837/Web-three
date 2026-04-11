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

function openJourney() {
  showPage('journey');
}

function goBack() {
  showPage('play');
}

function openTournaments() {
  showPage"tournament");
}
function go Back() {
  showPage("play");
}
function openTasks() {
  showPage("task");
}
function goBack() {
  showPage("play");
}
/* MENU TOGGLE */
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.onclick = () => {
  menu.classList.toggle('hidden');
};
