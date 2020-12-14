let controller;
let pageScene;

function animateScenes() {
  //Init Controller
  controller = new ScrollMagic.Controller();
  //Select some things
  const nav = document.querySelector(".nav");
  const introPage = document.querySelector(".intro-page");  
  const cards = document.querySelector(".cards");
  const where = document.querySelector(".where");
  const how = document.querySelector(".how");
  const img1 = document.querySelector(".hommer-grab");
  const img2 = document.querySelector(".hommer-eat");   
  const img3 = document.querySelector(".hommer-uhu");      

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
  jumpCards.fromTo(cards, { scale: 0.5 }, {scale: 1}); 
  
  //create scene
  pageScene = new ScrollMagic.Scene({
    triggerElement: cards,
    triggerHook: 0.8,
    reverse: false
  })  
  .setTween(jumpCards)    
  // .addIndicators({
  // colorStart: "white",
  // colorTrigger: "white",
  // name: "page"
  // })
  .addTo(controller);
      
  //animation
  const homerImg = gsap.timeline({
    defaults: {duration: 0.6, ease: 'power2.inOut'}
  });
  homerImg.fromTo(img1, {opacity: 0}, {opacity: 1});
  homerImg.fromTo(img2, {opacity: 0}, {opacity: 1});
  homerImg.fromTo(img3, {opacity: 0}, {opacity: 1});

    //create scene
  pageScene = new ScrollMagic.Scene({
    triggerElement: how,
    triggerHook: 0.5,
    reverse: false
  })  
  .setTween(homerImg)    
  // .addIndicators({
  // colorStart: "white",
  // colorTrigger: "white",
  // name: "page"
  // })
  .addTo(controller);  

}
  


animateScenes();