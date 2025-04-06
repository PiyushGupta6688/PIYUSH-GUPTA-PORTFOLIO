document.addEventListener('DOMContentLoaded', () => {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <div class="particles-container"></div>
            <div class="loading-text">
                <span class="loading-letter">P</span>
                <span class="loading-letter">i</span>
                <span class="loading-letter">y</span>
                <span class="loading-letter">u</span>
                <span class="loading-letter">s</span>
                <span class="loading-letter">h</span>
                <span class="loading-letter"> </span>
                <span class="loading-letter">G</span>
                <span class="loading-letter">u</span>
                <span class="loading-letter">p</span>
                <span class="loading-letter">t</span>
                <span class="loading-letter">a</span>
            </div>
            <div class="loading-subtitle">Loading Portfolio</div>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
            <div class="loading-stats">
                <div class="stat">Loading Assets <span class="stat-value">0%</span></div>
                <div class="stat">Initializing Components <span class="stat-value">0%</span></div>
                <div class="stat">Preparing Experience <span class="stat-value">0%</span></div>
            </div>
        </div>
    `;
    document.body.appendChild(loadingOverlay);

    // Create particles
    const particlesContainer = document.querySelector('.particles-container');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }

    // Animate letters with a wave effect
    const letters = document.querySelectorAll('.loading-letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
            letter.style.animation = 'letterGlow 1s ease-in-out infinite';
        }, 100 * index);
    });

    // Animate progress bar and stats
    const progressBar = document.querySelector('.loading-progress');
    const stats = document.querySelectorAll('.stat-value');
    let progress = 0;
    let statsProgress = [0, 0, 0];
    
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        
        // Update stats with different speeds
        statsProgress[0] = Math.min(100, statsProgress[0] + 1.2);
        statsProgress[1] = Math.min(100, statsProgress[1] + 0.8);
        statsProgress[2] = Math.min(100, statsProgress[2] + 0.5);
        
        stats.forEach((stat, index) => {
            stat.textContent = `${Math.floor(statsProgress[index])}%`;
        });
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    loadingOverlay.remove();
                    // Initialize AOS after loading
                    AOS.init({
                        duration: 800,
                        easing: 'ease-in-out',
                        once: true
                    });
                }, 500);
            }, 500);
        }
    }, 20);
}); 