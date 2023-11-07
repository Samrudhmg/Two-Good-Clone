const scroll = new LocomotiveScroll({
    el: document.querySelector('#proj'),
    smooth: true
});




function pagetext(){
    gsap.from("#pagetext1 #belive h1",{
        x:-200,
        opacity:0,
        duration:0.8
       
        
    })
    gsap.from("#pagetext1 p,a ",{
        x:200,
        opacity:0,
        duration:0.8,
        stagger:0.3,
      
    })
}pagetext()

function videoplay() {
    var videocom = document.querySelector("#videocontainer")
    var btnplay = document.querySelector("#play")
    videocom.addEventListener("mouseenter", function () {
        gsap.to(btnplay, {
            scale: 1,
            opacity: 1
        })
    })
    videocom.addEventListener("mouseleave", function () {
        gsap.to(btnplay, {
            scale: 0,
            opacity: 0

        })
    })
    videocom.addEventListener("mousemove", function (dets) {
        gsap.to(btnplay, {
            left: dets.x,
            top: dets.y
        })
    })
}
videoplay()

function pagemaintext() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.3,
        duration: 0.6,
        stagger: 0.2
    })

}
pagemaintext()

function videoanimation() {
    gsap.from("#page1 #videocontainer", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: 0.6, 
        stagger: 0.1
    })
}
videoanimation()


document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
    });
});


//   document.querySelector(".child").addEventListener("mouseenter",function(){
//     gsap.to("#cursor",{
//       transform: 'translate(-50%,-50%) scale(1)'
//     })
//   })

//   document.querySelector(".child").addEventListener("mouseleave",function(){
//     gsap.to("#cursor",{
//         transform:'scale(0)'
//     })
//   })


function cursoranimated(){
    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%,-50%) scale(1)'
            })
        });
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                transform:'translate(-50%,-50%) scale(0)'
            })
        })
    
    })
}
 cursoranimated()



