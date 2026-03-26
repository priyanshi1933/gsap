// gsap.to("#box1",{
//     x:1500,
//     duration:0.77,
//     delay:0.5,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:2,
//     repeat:-1,
//     yoyo:true
// })
// gsap.to("#box2",{
//     x:1500,
//     duration:1.5,
//     delay:2.5,
//     rotate:360,
//     backgroundColor:"yellow",
//     borderRadius:"50%",
//     scale:2,
//     repeat:-1,
//     yoyo:true
// })
// gsap.to("#box3",{
//     x:1500,
//     duration:1.5,
//     delay:4,
//     rotate:360,
//     backgroundColor:"yellow",
//     borderRadius:"50%",
//     scale:0.5,
//     repeat:-1,
//     yoyo:true
// })
// gsap.from("h1",{
//     opacity:0,
//     y:30,
//     duration:2,
//     delay:1,
//     stagger:0.3
// })

//timeline
// var tl=gsap.timeline()
// tl.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// tl.to("#box2",{
//     x:1500,
//     duration:1.5
// })
// tl.to("#box3",{
//     x:1500,
//     duration:1.5
// })

var tl=gsap.timeline()
tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})

