 AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });

    // Mobile Menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      });
    });

    // Live counter
    let count = 137;
    setInterval(() => {
      count += 1;
      document.getElementById('live-interest').innerText = count;
    }, 5000);

    // Form submission
    document.getElementById('admissionForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      let name = document.getElementById('fullName').value;
      let program = document.getElementById('program').value;
      
      if (name && program) {
        let successDiv = document.getElementById('successMessage');
        successDiv.style.display = 'block';
        this.reset();
        
        setTimeout(() => {
          successDiv.style.display = 'none';
        }, 5000);
        
        count += 2;
        document.getElementById('live-interest').innerText = count;
      }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });