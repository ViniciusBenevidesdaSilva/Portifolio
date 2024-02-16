
// Elementos
const traducoes = {
    navbarPortifolio: {
        portugues: "Portifólio",
        ingles: "Portfolio",
        espanhol: "Portafolio",
        frances: "Portefeuille"
    },
    navbarSobre: {
        portugues: "Sobre",
        ingles: "About",
        espanhol: "Acerca",
        frances: "Sur moi"
    },
    navbarProjetos: {
        portugues: "Projetos",
        ingles: "Projects",
        espanhol: "Proyectos",
        frances: "Projets"
    },
    navbarTecnologias: {
        portugues: "Tecnologias",
        ingles: "Technologies",
        espanhol: "Tecnologías",
        frances: "Technologies"
    },
    navbarExperiencias: {
        portugues: "Experiências",
        ingles: "Experiences",
        espanhol: "Experiencias",
        frances: "Expériences"
    },
    navbarIdiomas: {
        portugues: "Idiomas",
        ingles: "Languages",
        espanhol: "Idiomas",
        frances: "Langues"
    },
    bannerOla: {
        portugues: "Olá!",
        ingles: "Hello There!",
        espanhol: "¡Hola!",
        frances: "Bonjour!"
    },
    bannerNome: {
        portugues: "Meu nome é Vinícius Benevides",
        ingles: "My name is Vinícius Benevides",
        espanhol: "Mi nombre es Vinícius Benevidesa",
        frances: "Je m'appelle Vinícius Benevides"
    },
    bannerAnimado: {
        portugues: "Eu sou um <b><span></span></b>",
        ingles: "I'm a <b><span></span></b>",
        espanhol: "Yo soy un <b><span></span></b>",
        frances: "Je suis <b><span></span></b>"
    },
    bannerBtnProjetos: {
        portugues: "Conheça meus projetos",
        ingles: "Discover my projects",
        espanhol: "Descubre mis proyectos",
        frances: "Découvrez mes projets"
    },
    sobreTitulo: {
        portugues: "Sobre Mim",
        ingles: "About me",
        espanhol: "Sobre mi",
        frances: "Sur moi"
    },
    sobreTexto: {
        portugues: "Sou um jovem programador full-stack, apaixonado por tecnologia e seu impacto no dia a dia das pessoas!<br><br>Minhas principais proficiências são C#, .Net Core, Python, programação Web e Machine Learning. Sou uma pessoa proativa, que se empolga e empenha em resolver desafios!<br><br>Atualmente sou estudante de Engenharia de Computação na FESA e estagiário em desenvolvimento de sistemas na empresa Termomecanica SP S.A.",
        ingles: "I'm a young full-stack programmer, passionate about technology and its impact on people's daily lives!<br><br>My main proficiencies are C#, .Net Core, Python, Web programming and Machine Learning. I'm a proactive person, who is excited and committed to solving challenges!<br><br>I'm currently a Computer Engineering student at FESA and an intern in systems development at Termomecanica SP S.A.",
        espanhol: "¡Soy un joven programador full-stack, apasionado por la tecnología y su impacto en la vida diaria de las personas!<br><br>Mis principales competencias son C#, .Net Core, Python, programación web y Machine Learning. ¡Soy una persona proactiva, ilusionada y comprometida con la resolución de retos!<br><br>Actualmente soy estudiante de Ingeniería Informática en FESA y pasante en desarrollo de sistemas en Termomecanica SP S.A.",
        frances: "Je suis un jeune programmeur full-stack, passionné par la technologie et son impact sur le quotidien des gens!<br><br>Mes principales compétences sont C#, .Net Core, Python, programmation Web et Machine Learning. Je suis une personne proactive, enthousiaste et déterminée à résoudre les défis!<br><br>Je suis actuellement étudiant en Ingénierie informatique à la FESA et stagiaire en développement de systèmes chez Termomecanica SP S.A."
    },
    projetoTitulo: {
        portugues: "Projetos de Destaque",
        ingles: "Featured Projects",
        espanhol: "Proyectos Destacados",
        frances: "Projets en Vedette"
    },
    projetoTechInvestTitulo: {
        portugues: "Tech Invest",
        ingles: "Tech Invest",
        espanhol: "Tech Invest",
        frances: "Tech Invest"
    },
    projetoTechInvestTexto: {
        portugues: "API de investimentos desenvolvida em <b>.Net Core</b> usando Clean Architecture",
        ingles: "Investment API developed in <b>.Net Core</b> using Clean Architecture",
        espanhol: "API de inversión desarrollada en <b>.Net Core</b> usando Clean Architecture",
        frances: "API d'investissement développée en <b>.Net Core</b> en utilisant une Clean Architecture"
    },
    projetoRecomendadorTitulo: {
        portugues: "Recomendador de Filmes",
        ingles: "Movie Recommender",
        espanhol: "Recomendador de películas",
        frances: "Recommandateur de films"
    },
    projetoRecomendadorTexto: {
        portugues: "Sistema de Recomendação de filmes feito em <b>Python</b> utilizando Clusterização por Machine Learning",
        ingles: "Movie Recommendation System made in <b>Python</b> using Machine Learning Clustering",
        espanhol: "Sistema de recomendación de películas creado en <b>Python</b> utilizando Machine Learning Clustering",
        frances: "Système de recommandation de films créé en <b>Python</b> à l'aide du clustering d'apprentissage automatique"
    },
    projetoVaiEVemTitulo: {
        portugues: "Vai e Vem",
        ingles: "Vai e Vem",
        espanhol: "Vai e Vem",
        frances: "Vai e Vem"
    },
    projetoVaiEVemTexto: {
        portugues: "Sistema em Java para controle financeiro entregue para a disciplina de <b>Linguagem de Programação II</b>",
        ingles: "Java system for financial control delivered for the <b>Programming Language II</b> discipline",
        espanhol: "Sistema Java para control financiero entregado para la disciplina <b>Lenguaje de Programación II</b>",
        frances: "Système Java pour le contrôle financier livré pour la discipline <b>Langage de programmation II</b>"
    },
    projetoEasyLanguageTitulo: {
        portugues: "Easy Language",
        ingles: "Easy Language",
        espanhol: "Easy Language",
        frances: "Easy Language"
    },
    projetoEasyLanguageTexto: {
        portugues: "Projeto entregue para a disciplina de <b>Compiladores</b>, na qual foi configurada uma nova pseudo-linguagem de programação",
        ingles: "Project delivered to the <b>Compilers</b> discipline, in which a new pseudo-programming language was configured",
        espanhol: "Proyecto entregado a la disciplina <b>Compiladores</b>, en el cual se configuró un nuevo lenguaje de programación",
        frances: "Projet livré à la discipline <b>Compilateurs</b>, dans lequel un nouveau langage de programmation a été configuré</b>"
    },
    projetoBookSmartTitulo: {
        portugues: "BookSmart",
        ingles: "BookSmart",
        espanhol: "BookSmart",
        frances: "BookSmart"
    },
    projetoBookSmartTexto: {
        portugues: "PoC de serviços encontrados em um mercado autônomo integrando <b>IoT</b>, bancos de dados relacionais e não relacionais e .NET Core em uma estrutura Web MVC",
        ingles: "PoC of services found in a standalone marketplace integrating <b>IoT</b>, relational and non-relational databases and .NET Core into a Web MVC framework",
        espanhol: "PoC de servicios encontrados en un mercado independiente que integra <b>IoT</b>, bases de datos relacionales y no relacionales y .NET Core en un marco Web MVC",
        frances: "PoC de services trouvés sur un marché autonome intégrant <b>IoT</b>, des bases de données relationnelles et non relationnelles et .NET Core dans un framework Web MVC"
    },
    tecnologiaTitulo: {
        portugues: "Principais Tecnologias e Habilidades",
        ingles: "Key Technologies and Skills",
        espanhol: "Tecnologías y habilidades clave",
        frances: "Technologies et compétences clés"
    },
    experienciaTitulo: {
        portugues: "Experiências Prévias",
        ingles: "Previous Experiences",
        espanhol: "Experiencias previas",
        frances: "Expériences précedentes"
    },
    experienciaTmTitulo: {
        portugues: "Estágio em Desenvolvimento de Sistemas",
        ingles: "Internship in Systems Development",
        espanhol: "Prácticas en Desarrollo de Sistemas",
        frances: "Stage en développement de systèmes"
    },
    experienciaTmPeriodo: {
        portugues: "Agosto/2022 - Atualmente",
        ingles: "August/2022 - Currently",
        espanhol: "Agosto/2022 - Actualmente",
        frances: "Août/2022 - Actuellement"
    },
    experienciaArenaSolidariaTitulo: {
        portugues: "Arena Solidária",
        ingles: "Arena Solidária",
        espanhol: "Arena Solidária",
        frances: "Arena Solidária"
    },
    experienciaArenaSolidariaPeriodo: {
        portugues: "Janeiro/2022 - Junho/2022",
        ingles: "January/2022 - June/2022",
        espanhol: "Enero/2022 - Junio/2022",
        frances: "Janvier/2022 - Juin/2022"
    },
    experienciaIniciacaoTitulo: {
        portugues: "Iniciação Científica",
        ingles: "Scientific research",
        espanhol: "Iniciación Científica",
        frances: "Recherche scientifique"
    },
    experienciaIniciacaoPeriodo: {
        portugues: "Agosto/2022 - Junho/2023",
        ingles: "August/2022 - June/2023",
        espanhol: "Agosto/2022 - Junio/2023",
        frances: "Août/2022 - Juin/2023"
    },
    idiomaTitulo: {
        portugues: "Idiomas",
        ingles: "Languages",
        espanhol: "Idiomas",
        frances: "Langues"
    },
};


document.getElementById('btn-portugues').addEventListener('change', function () {
    alterarIdioma('portugues');
});
document.getElementById('btn-ingles').addEventListener('change', function () {
    alterarIdioma('ingles');
});
document.getElementById('btn-espanhol').addEventListener('change', function () {
    alterarIdioma('espanhol');
});
document.getElementById('btn-frances').addEventListener('change', function () {
    alterarIdioma('frances');
});


function alterarIdioma(idioma) {

    const elementosTraduziveis = document.querySelectorAll('.traduzivel');
    elementosTraduziveis.forEach(elemento => {
        const id = elemento.id;
        elemento.innerHTML = traducoes[id][idioma];
    });

    alterarPopover(idioma);

    switch (idioma) {
        case 'portugues':
            document.documentElement.style.setProperty('--text-1', '"Desenvolvedor Front-End"');
            document.documentElement.style.setProperty('--text-2', '"Cientista de Dados"');
            document.documentElement.style.setProperty('--text-3', '"Desenvolvedor Back-End"');
            document.documentElement.style.setProperty('--text-4', '"Designer"');
            document.documentElement.style.setProperty('--text-5', '"Engenheiro"');
            document.getElementById("searchInput").placeholder = "Pesquisar habilidades...";
            break;
        case 'ingles':
            document.documentElement.style.setProperty('--text-1', '"Front-End Developer"');
            document.documentElement.style.setProperty('--text-2', '"Data Scientist"');
            document.documentElement.style.setProperty('--text-3', '"Back-End Developer"');
            document.documentElement.style.setProperty('--text-4', '"Designer"');
            document.documentElement.style.setProperty('--text-5', '"Engineer"');
            document.getElementById("searchInput").placeholder = "Search by skills...";
            break;
        case 'espanhol':
            document.documentElement.style.setProperty('--text-1', '"Desarrollador Front-End"');
            document.documentElement.style.setProperty('--text-2', '"Científico de datos"');
            document.documentElement.style.setProperty('--text-3', '"Desarrollador Back-End"');
            document.documentElement.style.setProperty('--text-4', '"Designer"');
            document.documentElement.style.setProperty('--text-5', '"Ingeniero"');
            document.getElementById("searchInput").placeholder = "Buscar por habilidades...";
            break;
        case 'frances':
            document.documentElement.style.setProperty('--text-1', '"développeur Front-End"');
            document.documentElement.style.setProperty('--text-2', '"Data Scientist"');
            document.documentElement.style.setProperty('--text-3', '"Développeur Back-End"');
            document.documentElement.style.setProperty('--text-4', '"Designer"');
            document.documentElement.style.setProperty('--text-5', '"Ingénieur"');
            document.getElementById("searchInput").placeholder = "Recherche par compétences...";
            break;
    }
}

function alterarPopover(idioma) {
    const popoverTm = document.getElementById("popoverTm");
    const popoverArenaSolidario = document.getElementById("popoverArenaSolidario");
    const popoverIniciacao = document.getElementById("popoverIniciacao");

    switch (idioma) {
        case 'portugues':
            popoverTm.setAttribute("data-bs-title", "Estágio");
            popoverTm.setAttribute("data-bs-content", "Desenvolvimento e Manutenção de Sistemas WEB (Intranet, B2B, Plataformas Analíticas), ETL, C#, .Net Core, Sql Server");
            popoverArenaSolidario.setAttribute("data-bs-title", "Trabalho Voluntário");
            popoverArenaSolidario.setAttribute("data-bs-content", "Criação de material de estudo preparatório para vestibular para alunos do Ensino Médio");
            popoverIniciacao.setAttribute("data-bs-title", "Modelo Preditivo do Desempenho Acadêmico");
            popoverIniciacao.setAttribute("data-bs-content", "Desenvolvimento de um sistema de IA em Python capaz de predizer o desempenho acadêmico dos alunos de Engenharia");
            break;
        case 'ingles':
            popoverTm.setAttribute("data-bs-title", "Internship");
            popoverTm.setAttribute("data-bs-content", "Development and Maintenance of WEB Systems (Intranet, B2B, Analytical Platforms), ETL, C#, .Net Core, Sql Server");
            popoverArenaSolidario.setAttribute("data-bs-title", "Volunteer work");
            popoverArenaSolidario.setAttribute("data-bs-content", "Creation of preparatory study material for university entrance exams for high school students");
            popoverIniciacao.setAttribute("data-bs-title", "Academic Performance Predictive Model");
            popoverIniciacao.setAttribute("data-bs-content", "Development of an AI system in Python capable of predicting the academic performance of Engineering students");
            break;
        case 'espanhol':
            popoverTm.setAttribute("data-bs-title", "Práctica");
            popoverTm.setAttribute("data-bs-content", "Desarrollo y Mantenimiento de Sistemas WEB (Intranet, B2B, Plataformas Analíticas), ETL, C#, .Net Core, Sql Server");
            popoverArenaSolidario.setAttribute("data-bs-title", "Trabajo voluntario");
            popoverArenaSolidario.setAttribute("data-bs-content", "Creación de material de estudio para las pruebas de acceso a la universidad para estudiantes de secundaria");
            popoverIniciacao.setAttribute("data-bs-title", "Modelo predictivo de rendimiento académico");
            popoverIniciacao.setAttribute("data-bs-content", "Desarrollo de un sistema de IA en Python capaz de predecir el rendimiento académico de estudiantes de Ingeniería");
            break;
        case 'frances':
            popoverTm.setAttribute("data-bs-title", "Stage");
            popoverTm.setAttribute("data-bs-content", "Développement et Maintenance de Systèmes WEB (Intranet, B2B, Plateformes Analytiques), ETL, C#, .Net Core, Sql Server");
            popoverArenaSolidario.setAttribute("data-bs-title", "Bénévolat");
            popoverArenaSolidario.setAttribute("data-bs-content", "Création de matériel d'étude préparatoire aux examens d'entrée à l'université pour les lycéens");
            popoverIniciacao.setAttribute("data-bs-title", "Modèle prédictif du rendement académique");
            popoverIniciacao.setAttribute("data-bs-content", "Développement d'un système d'IA en Python capable de prédire les performances académiques des étudiants en ingénierie");
            break;
    }

    atualizarPopOver();
}

