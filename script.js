document.addEventListener("DOMContentLoaded", function(){
  const faders = document.querySelectorAll('.servicos, .depoimentos');
  const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };
  
  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  
  faders.forEach(fader => appearOnScroll.observe(fader));
});