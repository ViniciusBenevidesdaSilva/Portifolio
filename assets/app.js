// Habilitando popover

function atualizarPopOver() {
  let popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  let popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  let popovers = document.querySelectorAll('.hover-popover');

  popovers.forEach(element => {
    element.addEventListener('mouseenter', function () {
      element.setAttribute('data-bs-original-title', element.getAttribute('data-bs-title'));
      element.setAttribute('data-bs-original-content', element.getAttribute('data-bs-content'));
      element.setAttribute('data-bs-title', '');
      element.setAttribute('data-bs-content', '');
      popoverList.find(popover => popover._element === element).show();
    });
  });

  popovers.forEach(element => {
    element.addEventListener('mouseleave', function () {
      element.setAttribute('data-bs-title', element.getAttribute('data-bs-original-title'));
      element.setAttribute('data-bs-content', element.getAttribute('data-bs-original-content'));
      popoverList.find(popover => popover._element === element).hide();
    });
  });
}

atualizarPopOver();

// Elementos
// NavBar
const navbar = document.getElementById("navbar");
const navbarNav = document.getElementById("navbarNav");
const btnNav = document.getElementById("btnNav");
const navlLinks = document.querySelectorAll(".nav-link");
const scrollButton = document.getElementById('scrollTopButton');

// Footer
const footer = document.getElementById("footer");

// Atribuição de data
const data = document.getElementById("data");
data.innerHTML = new Date().getFullYear();

// Icone btn navbar
btnNav.addEventListener("click", () => {
  const icon = btnNav.children[0];

  if (btnNav.classList.contains('collapsed')) {
    utils.changeClasses(icon, "bi-list", "bi-x");
  } else {
    utils.changeClasses(icon, "bi-x", "bi-list");
  }
});


// NavBar Fixa
window.addEventListener("scroll", function () {
  const scrollHeight = this.window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    utils.changeClasses(navbar, "fixed-top", "sticky-top");
    navbar.classList.add("border-bottom");
    footer.classList.add("border-top");
  } else {
    utils.changeClasses(navbar, "sticky-top", "fixed-top");
    navbar.classList.remove("border-bottom");
    footer.classList.remove("border-top");
  }

  if (window.scrollY > 100) {
    scrollButton.classList.remove('d-none');
  } else {
    scrollButton.classList.add('d-none');
  }
});

// Fecha a navbar após selecionar um navlink
navlLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!btnNav.classList.contains('collapsed')) {
      btnNav.click();
    }
  });
});


// métodos genéricos
const utils = {
  changeClasses: function (element, newClass, oldClass) {
    element.classList.add(newClass);
    element.classList.remove(oldClass);
  }
};

// Exibir habilidades
const skills = [
  { name: ".Net Core", icon: "laptop" },
  { name: "C#", icon: "pc-display" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Sql", icon: "database" },
  { name: "Sql Server", icon: "table" },
  { name: "Entity Framework", icon: "file-earmark-spreadsheet" },
  { name: "JSON", icon: "braces" },
  { name: "JSON Web Token", icon: "shield-shaded" },
  { name: "HTML", icon: "file-code" },
  { name: "CSS", icon: "file-richtext" },
  { name: "JavaScript", icon: "filetype-js" },
  { name: "Python", icon: "hash" },
  { name: "Machine Learning", icon: "robot" },
  { name: "Pandas", icon: "file-spreadsheet" },
  { name: "SKLearn", icon: "clipboard-pulse" },
  { name: "MongoDB", icon: "diagram-2" },
  { name: "Java", icon: "cup-hot-fill" },
  { name: "Apache Maven", icon: "easel2" },
  { name: "Bootstrap", icon: "bootstrap-fill" },
  { name: "UI/UX", icon: "window-sidebar" },
  { name: "SOLID", icon: "boxes" },
  { name: "Design Thinking", icon: "speedometer" },
  { name: "Agile", icon: "repeat" },
];

const searchInput = document.getElementById('searchInput');


searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const filteredSkills = skills.filter(skill => skill.name.toLowerCase().includes(searchTerm));
  renderSkills(filteredSkills);
});

function renderSkills(skills) {
  const skillsListContainer = document.getElementById('skillsList');

  skillsListContainer.innerHTML = '';

  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'col-12');
    skillItem.innerHTML = `
      <p><i class="bi bi-${skill.icon}"></i> ${skill.name}</p>
    `;
    skillsListContainer.appendChild(skillItem);
  });
}

renderSkills(skills);

