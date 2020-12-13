let controller;
let pageScene;

function animateScenes() {
  //Init Controller
  controller = new ScrollMagic.Controller();
  //Select some things
  const nav = document.querySelector(".nav");
  const introPage = document.querySelectorAll(".intro-page");
  const introName = document.querySelector(".intro-h1");
  const introText = document.querySelector(".intro-h4");
  const buttonBite = document.querySelector(".bite");
  const introDonut = document.querySelector(".intro-img");
  const cards = document.querySelector(".cards");
  const where = document.querySelector(".where");
  const how = document.querySelector(".how");

  //animation
  const slideItems = gsap.timeline({
    defaults: {duration:1, ease: 'power2.inOut'}
  });
  slideItems.fromTo(nav, {y: "-100%"} , {y: "0%"});
  slideItems.fromTo(introPage, {opacity: 0}, {opacity: 1});

  //animation
  const jumpCards = gsap.timeline({
    defaults: {duration:1, ease: 'power2.inOut'}
  });
  jumpCards.fromTo(cards, { scale: 0.3 }, {scale: 1}); 
  

  //create scene
  pageScene = new ScrollMagic.Scene({
    triggerElement: cards,
    triggerHook: 0.5,
    reverse: false
  })  
  .setTween(jumpCards)    
  .addIndicators({
  colorStart: "white",
  colorTrigger: "white",
  name: "page"
  })
  .addTo(controller);


  

  how.forEach((homer) => {
    const img = homer.querySelector(".homer");    
    //animation
    const homerImg = gsap.timeline({
      defaults: {duration: 1.5, ease: 'power2.inOut'}
    });
    homerImg.fromTo(img, {opacity: 0}, {opacity: 1});

      //create scene
    pageScene = new ScrollMagic.Scene({
      triggerElement: how,
      triggerHook: 0.5,
      reverse: false
    })  
    .setTween(homerImg)    
    .addIndicators({
    colorStart: "white",
    colorTrigger: "white",
    name: "page"
    })
    .addTo(controller);

    
  });
  


  
}
  


animateScenes();