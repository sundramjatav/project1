function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

loco()

function canvas() {
  const canvas = document.querySelector(".page2 canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
  ./image/image1.webp
  ./image/image2.webp
  ./image/image3.webp
  ./image/image4.webp
  ./image/image5.webp
  ./image/image6.webp
  ./image/image7.webp
  ./image/image8.webp
  ./image/image9.webp
  ./image/image10.webp
  ./image/image11.webp
  ./image/image12.webp
  ./image/image13.webp
  ./image/image14.webp
  ./image/image15.webp
  ./image/image16.webp
  ./image/image17.webp
  ./image/image18.webp
  ./image/image19.webp
  ./image/image20.webp
  ./image/image21.webp
  ./image/image22.webp
  ./image/image23.webp
  ./image/image24.webp
  ./image/image25webp
  ./image/image26.webp
  ./image/image27.webp
  ./image/image28.webp
  ./image/image29.webp
  ./image/image30.webp
  ./image/image31.webp
  ./image/image32.webp
  ./image/image33.webp
  ./image/image34.webp
  ./image/image35.webp
  ./image/image36.webp
  ./image/image37.webp
  ./image/image38.webp
  ./image/image39.webp
  ./image/image40.webp
  ./image/image41.webp
  ./image/image42.webp
  ./image/image43.webp
  ./image/image44.webp
  ./image/image45.webp
  ./image/image46.webp
  ./image/image47.webp
  ./image/image48.webp
  ./image/image49.webp
  ./image/image50.webp
  ./image/image51.webp
  ./image/image52.webp
  ./image/image53.webp
  ./image/image54.webp
  ./image/image55.webp
  ./image/image56.webp
  ./image/image57.webp
  ./image/image58.webp
  ./image/image59.webp
  ./image/image60.webp
  ./image/image61.webp
  ./image/image62.webp
  ./image/image63.webp
  ./image/image64.webp
  ./image/image65.webp
  ./image/image66.webp
  ./image/image67.webp
  ./image/image68.webp
  ./image/image69.webp
  ./image/image70.webp
  ./image/image71.webp
  ./image/image72.webp
  ./image/image73.webp
  ./image/image74.webp
  ./image/image75.webp
  ./image/image76.webp
  ./image/image77.webp
  ./image/image78.webp
  ./image/image79.webp
  ./image/image80.webp
  ./image/image81.webp
  ./image/image82.webp
  ./image/image83.webp
  ./image/image84.webp
  ./image/image85.webp
  ./image/image86.webp
  ./image/image87.webp
  ./image/image88.webp
  ./image/image89.webp
  ./image/image90.webp
    
 `;
    return data.split("\n")[index];
  }

  const frameCount = 90;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `.page2`,
      start: `top top`,
      end: `350% top`,
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page2",
    pin: true,
    scroller: `.main`,
    start: `top top`,
    end: `350% top`,
    // markers:true
  });
}
canvas()


gsap.to(".page3 .h11 h1 , .h1 h1", {
  marginTop: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3",
    // markers:true,
    start: "top 40%",
    end: "top -10%",
    scrub: true,
  }
})

gsap.to(".page4 .boxxer", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page4 ",
    // markers:true,
    start: "top 0%",
    end: "top -1000%",
    scrub: true,
    pin: true
  }
})


gsap.to(".page5 .h11 h1, .h1 h1", {
  marginTop: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page5 ",
    // markers:true,
    start: "top 40%",
    end: "top -10%",
    scrub: true,
  }
})

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


swiperEl.initialize();


gsap.to(".page7 .top2 img", {
  x: -900,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page7",
    // markers: true,
    start: "top -10%",
    end: "top -100%",
    scrub: true,
    pin: true
  }
})


var circle = document.querySelector(".cursor");
document.addEventListener("mousemove", function (dets) {
  var y = circle.offsetHeight;
  var x = circle.offsetWidth;
  circle.style.top = `${dets.pageY - y / 2}px`;
  circle.style.left = `${dets.pageX - x / 2}px`;
})


var h4 = document.querySelector(".cursor>h4")
var page4 = document.querySelector(".page4").addEventListener("mousemove", function () {
  circle.style.width = "100px";
  circle.style.height = "100px";
  h4.style.opacity = 1;
})
var page4 = document.querySelector(".page4").addEventListener("mouseleave", function () {
  circle.style.width = "0px";
  circle.style.height = "0px";
  h4.style.opacity = 0;
})

// var h4 = document.querySelector(".cursor>h4")
var top2 = document.querySelector(".top2").addEventListener("mousemove", function () {
  circle.style.width = "100px";
  circle.style.height = "100px";
  h4.style.opacity = 1;
})
var top2 = document.querySelector(".top2").addEventListener("mouseleave", function () {
  circle.style.width = "0px";
  circle.style.height = "0px";
  h4.style.opacity = 0;
})

var box4 = document.querySelector(".box4").addEventListener("mousemove", function () {
  circle.style.opacity = 0;
})
var box4 = document.querySelector(".box4").addEventListener("mouseleave", function () {
  circle.style.opacity = 1;
})


gsap.to(".page9 .part2 .dibba", {
  width: "90%",
  height: "70%",
  display: "block",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page9",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: true,
  }
})

gsap.from(".page9 .part1 h1, .part1 h4, .part1 p", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page9",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: true,
  }
})

gsap.to(".page9 .part2 .h4 h4", {
  marginTop: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page9",
    // markers: true,
    start: "top 30%",
    end: "top 10%",
    scrub: true,
  }
})
gsap.from(".page9 .photo,#p", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page9",
    // markers: true,
    start: "top 30%",
    end: "top 10%",
    scrub: true,
  }
})


gsap.from(".page10", {
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page10",
    // markers: true,
    start: "top 0%",
    end: "top -500%",
    scrub: true,
    pin: true
  }
})

var widths = "300vh"
var heights = "300vh"
gsap.to(" .page10 .gola1", {
  width: widths,
  height: heights,
  scrollTrigger: {
    trigger: ".gola1",
    scroller: ".main",
    // markers:true,
    scrub: true,
    start: "top 0%",
    end: "top -100%",
  }
});
gsap.to(" .page10 .gola2", {
  width: widths,
  height: heights,
  scrollTrigger: {
    trigger: ".gola2",
    scroller: ".main",
    // markers:true,
    scrub: true,
    start: "top -50%",
    end: "top -200%",
  }
});

gsap.to(".page10 .gola3", {
  width: widths,
  height: heights,
  scrollTrigger: {
    trigger: ".gola3",
    scroller: ".main",
    // markers:true,
    scrub: true,
    start: "top -100%",
    end: "top -300%",
  }
});
gsap.to(" .page10 .gola4", {
  width: widths,
  height: heights,
  scrollTrigger: {
    trigger: ".gola4",
    scroller: ".main",
    // markers:true,
    scrub: true,
    start: "top -150%",
    end: "top -400%",
  }
});

gsap.to(".page10 .gola5", {
  width: widths,
  height: heights,
  scrollTrigger: {
    trigger: ".gola5",
    scroller: ".main",
    // markers:true,
    scrub: true,
    start: "top -200%",
    end: "top -500%",
  },
});

gsap.to(".page12 h1", {
  marginTop: 0,
  rotate: "0deg",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page12",
    // markers:true,
    start: "top 30%",
    end: "top -10%",
    scrub: true,
  }
})