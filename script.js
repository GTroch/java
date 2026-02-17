// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add interactive hover effects to code blocks
document.querySelectorAll('.code-block').forEach(block => {
    block.addEventListener('mouseenter', function() {
        this.style.borderLeftColor = '#764ba2';
    });
    
    block.addEventListener('mouseleave', function() {
        this.style.borderLeftColor = '#667eea';
    });
});

// Add copy functionality to code blocks (optional)
document.querySelectorAll('.code-block').forEach((block, index) => {
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    copyBtn.className = 'copy-btn';
    copyBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 10px;
        background-color: #667eea;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        display: none;
        z-index: 10;
    `;
    
    block.style.position = 'relative';
    block.appendChild(copyBtn);
    
    block.addEventListener('mouseenter', function() {
        copyBtn.style.display = 'block';
    });
    
    block.addEventListener('mouseleave', function() {
        copyBtn.style.display = 'none';
    });
    
    copyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const codeText = block.innerText;
        
        navigator.clipboard.writeText(codeText).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        }).catch(() => {
            alert('Failed to copy code');
        });
    });
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '#667eea';
        link.style.fontWeight = '500';
        
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#764ba2';
            link.style.fontWeight = 'bold';
            link.style.borderBottomColor = '#667eea';
        }
    });
});

// Intersection Observer for fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all modules for fade-in animation
document.querySelectorAll('.module').forEach(module => {
    module.style.opacity = '0';
    module.style.transform = 'translateY(20px)';
    module.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(module);
});

// Observe exercises and homework for animation
document.querySelectorAll('.exercise, .homework').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(15px)';
    item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(item);
});

// Keyboard shortcut to scroll to practice section (Ctrl+Alt+P)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.altKey && e.key === 'P') {
        const practiceSection = document.querySelector('#practice');
        if (practiceSection) {
            practiceSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Initialize tooltips/hints on hover for exercises
document.querySelectorAll('.exercise, .homework').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Print functionality for homework assignments
document.querySelectorAll('.homework').forEach((homework, index) => {
    const printBtn = document.createElement('button');
    printBtn.textContent = 'Print Assignment';
    printBtn.className = 'print-btn';
    printBtn.style.cssText = `
        margin-top: 10px;
        padding: 8px 15px;
        background-color: #ff9800;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 13px;
        transition: background-color 0.3s;
    `;
    
    printBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e68900';
    });
    
    printBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#ff9800';
    });
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    homework.appendChild(printBtn);
});

// Log page load
console.log('%c☕ Welcome to Java Course!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('Learn Java from basics to OOP. Happy Coding!');
