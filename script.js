function displayTabDetails(tabId) {
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active-content");
    });
  
    document.querySelectorAll(".tab-link").forEach((link) => {
      link.classList.remove("active-link");
    });
  
    document.getElementById(tabId).classList.add("active-content");
    document
      .querySelector(`.tab-link[data-tab="${tabId}"]`)
      .classList.add("active-link");
  }
  
  function setProgressBarWidths() {
    document.querySelectorAll('.progress-bar div').forEach(bar => {
      const percentage = bar.classList[1];
      bar.style.width = percentage;
    });
  }
  
  function toggleProjectList() {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const projectList = document.getElementById('projectList');
  
    seeMoreBtn.addEventListener('click', () => {
      projectList.classList.toggle('expanded');
      seeMoreBtn.textContent = projectList.classList.contains('expanded') ? 'See Less' : 'See More';
    });
  }
  
  function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    setProgressBarWidths();
    toggleProjectList();
    fadeInOnScroll();
  });
  