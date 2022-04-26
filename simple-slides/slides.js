var sslide = {
  /* (A) INITIALIZE - PRELOAD IMAGES */
  instances : [],
  init : (opt) => {
    // (A1) REGISTER SLIDESHOW INSTANCE
    const id = sslide.instances.length;
    sslide.instances.push(opt);

    // (A2) PRELOAD IMAGES
    let loaded = 0, ready = () => {
      loaded++;
      if (loaded == opt.images.length) { sslide.attach(id); }
    };
    for (let i of opt.images) {
      let img = new Image();
      img.src = i.src;
      img.onload = ready;
    }
  },

  /* (B) INITIALIZE - ATTACH HTML CONTROLS */
  attach : (id) => {
    // (B1) GET HTML CONTAINER
    let inst = sslide.instances[id],
        sSlide = document.getElementById(inst.target);

    // (B2) SLIDESHOW HTML INTERFACE
    let sImg = document.createElement("img"),
        sCaption = document.createElement("div"),
        sLeft = document.createElement("div"),
        sRight = document.createElement("div");
    sSlide.className = "sSlide";
    sImg.className = "sImg";
    sCaption.className = "sCaption";
    sLeft.className = "sLeft";
    sRight.className = "sRight";
    sLeft.innerHTML = "&lt;";
    sRight.innerHTML = "&gt;";
    sLeft.addEventListener("click", () => { sslide.nav(id, 0); });
    sRight.addEventListener("click", () => { sslide.nav(id, 1); });
    sSlide.appendChild(sImg);
    sSlide.appendChild(sCaption);
    sSlide.appendChild(sLeft);
    sSlide.appendChild(sRight);

    // (B3) READY!
    inst.current = -1;
    inst.sImg = sImg;
    inst.sCaption = sCaption;
    sslide.nav(id, 1);
  },

  /* (C) NAVIGATION */
  nav : (id, direction) => {
    // (C1) CALCULATE NEXT SLIDE
    let inst = sslide.instances[id],
        slides = inst.images;
    if (direction) { inst.current++; }
    else { inst.current--; }
    if (inst.current < 0) { inst.current = slides.length - 1; }
    if (inst.current >= slides.length) { inst.current = 0; }

    // (C2) DRAW SLIDE
    inst.sImg.src = slides[inst.current].src;
    inst.sCaption.innerHTML = slides[inst.current].cap;

    // (C3) AUTO SCROLL MODE
    if (inst.auto) {
      if (inst.timer) { clearInterval(inst.timer); }
      inst.timer = setInterval(() => { sslide.nav(id, 1); }, inst.auto);
    }
  }
};
