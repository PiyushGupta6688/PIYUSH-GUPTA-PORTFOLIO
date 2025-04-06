const projectsData = [
    {
        title: "Booklicious",
        description: "E-commerce platform with admin management using Spring MVC, REST APIs, JSP, and MySQL",
        features: [
            "Developed an e-commerce platform for browsing, purchasing, and managing books",
            "Implemented book search and user management features",
            "Created admin panel using Spring MVC for managing book listings, orders, and inventory",
            "Designed RESTful APIs for front-end and back-end interaction",
            "Integrated MySQL database for efficient data management"
        ],
        technologies: ["Spring MVC", "REST APIs", "JSP", "MySQL", "JavaScript", "Bootstrap"],
        image: "/images/book.jpg",
        github: "https://github.com/PiyushGupta6688/Booklicious_Web_Application",
        demo: "#"
    },
    {
        title: "InfoMate",
        description: "AI chatbot assisting students using Spring Boot, LangChain4J, and PostgreSQL",
        features: [
            "Built an AI chatbot using LangChain4J for student assistance",
            "Handles admissions, faculty, and alumni queries",
            "Developed backend using Spring Boot",
            "Integrated PostgreSQL for efficient data storage and retrieval",
            "Created user-friendly interface for student interaction"
        ],
        technologies: ["Spring Boot", "LangChain4J", "PostgreSQL", "REST APIs", "React", "AI/ML"],
        image: "/images/infomate.jpg",
        github: "https://github.com/PiyushGupta6688/InfoMate",
        demo: "#"
    }
];

function createProjectCard(project) {
    return `
        <div class="project-card" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-link" title="View on GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="${project.demo}" target="_blank" class="project-link" title="View Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h4>${project.title}</h4>
                <p class="project-description">${project.description}</p>
                <div class="project-features">
                    <h5>Key Features:</h5>
                    <ul>
                        ${project.features.map(feature => `
                            <li>${feature}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projectsData.forEach(project => {
        projectsContainer.innerHTML += createProjectCard(project);
    });
}

// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}); 