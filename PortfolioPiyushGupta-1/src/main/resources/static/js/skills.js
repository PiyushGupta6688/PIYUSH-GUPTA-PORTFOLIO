const skillsData = {
    technical: [
        { name: 'Java', level: 90, icon: 'fa-java' },
        { name: 'Spring Boot', level: 85, icon: 'fa-leaf' },
        { name: 'SQL', level: 80, icon: 'fa-database' },
        { name: 'JavaScript', level: 75, icon: 'fa-js' },
        { name: 'HTML/CSS', level: 85, icon: 'fa-html5' },
        { name: 'Git', level: 80, icon: 'fa-git-alt' }
    ],
    ai: [
        { name: 'LLMs', level: 75, icon: 'fa-brain' },
        { name: 'AI Integration', level: 80, icon: 'fa-robot' },
        { name: 'REST APIs', level: 85, icon: 'fa-code' }
    ]
};

function createSkillCard(skill) {
    return `
        <div class="skill-card">
            <div class="skill-header">
                <i class="fab ${skill.icon}"></i>
                <h4>${skill.name}</h4>
            </div>
            <div class="skill-progress">
                <div class="progress-bar" style="width: ${skill.level}%"></div>
            </div>
            <div class="skill-level">${skill.level}%</div>
        </div>
    `;
}

function renderSkills() {
    const technicalSkillsContainer = document.getElementById('technical-skills');
    const aiSkillsContainer = document.getElementById('ai-skills');

    skillsData.technical.forEach(skill => {
        technicalSkillsContainer.innerHTML += createSkillCard(skill);
    });

    skillsData.ai.forEach(skill => {
        aiSkillsContainer.innerHTML += createSkillCard(skill);
    });
}

// Call renderSkills when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderSkills); 