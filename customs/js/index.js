// Variáveis com id de elementos.
var idButtonProject = document.getElementById('button-project');
var idButtonFooter = document.getElementById('button-footer');
var idButtonAbout = document.getElementById('button-about');
var divInformation = document.getElementById('information');
var divProject = document.getElementById('project');
var optionNavBarAbout = document.getElementById('aboutNav');
var optionNavBarSkills = document.getElementById('skillsNav');
var optionNavBarAboutMobile = document.getElementById('aboutNavMobile');
var optionNavBarSkillsMobile =  document.getElementById('skillsNavMobile');

// Botão de menu recolhido.
document.addEventListener('DOMContentLoaded', function() {
  var elemsSidenav = document.querySelectorAll('.sidenav');
  var intancesSidenav = M.Sidenav.init(elemsSidenav);
});

// Comportamento do botão, ao ser clicado recebe foco e oculta as seções de informações e do início.
function actionButtonProject(){
  // Colocando foco no botão de projetos.
  idButtonAbout.classList.remove('button-select');
  idButtonProject.classList.add('button-select');

  // Tornando a div dos projetos visíveis.
  divProject.classList.remove('secret');
  divInformation.classList.add('secret'); 

  // Mudando o botão de visualizar projetos para funcionalidade de voltar a página.
  idButtonFooter.setAttribute("href", "#project");
  idButtonFooter.setAttribute("onclick", "actionButtonAbout()");
  idButtonFooter.textContent = "VOLTAR";

  // Chamando a função de tornar as opções da nav bar ocultas.
  hiddenOptionNavBar();
}

// Comportamento do botão, ao ser clicado recebe foco e oculta a seção de projetos.
function actionButtonAbout(){
  // Colocando foco no botão "sobre mim".
  idButtonProject.classList.remove('button-select');
  idButtonAbout.classList.add('button-select');
  idButtonFooter.classList.remove('button-select');

  // Tornado a div de informações sobre mim visível
  divInformation.classList.remove('secret');
  divProject.classList.add('secret');

  // Mundando o botão de voltar a página para botão de visualizar projetos.
  idButtonFooter.setAttribute("href", "#about");
  idButtonFooter.setAttribute("onclick", "actionButtonProject()");
  idButtonFooter.textContent = "VISUALIZAR PROJETOS";

  // Chamando a função de tornar as opções da nav bar visível.
  visibleOptionNavBar();
}

function hiddenOptionNavBar(){
  // Ocultando opções da nav bar.
  optionNavBarAbout.classList.add('secret');
  optionNavBarSkills.classList.add('secret');

  // Ocultanod opções do menu de navegação mobile.
  optionNavBarAboutMobile.classList.add('secret');
  optionNavBarSkillsMobile.classList.add('secret');
}

function visibleOptionNavBar(){
  // Mostrando opções da nav bar.
  optionNavBarAbout.classList.remove('secret');
  optionNavBarSkills.classList.remove('secret');

  // Mostrando opções do menu de navegação mobile.
  optionNavBarAboutMobile.classList.remove('secret');
  optionNavBarSkillsMobile.classList.remove('secret');
}