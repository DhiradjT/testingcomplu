const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  });
  
  const master = document.querySelectorAll('.fly-in');
  master.forEach(master => {
    observer.observe(master);
  });
