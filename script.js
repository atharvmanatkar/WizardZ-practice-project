function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav .part2 h4, nav .part2 button",{
    y:-40,
    opacity:0,
    duration:0.6,
    delay:0.3,
    stagger:0.1,
})

tl.from(".center-part1",{
    x:-50,
    opacity:0,
    duration:0.5
})

tl.from(".center-part2",{
    x:50,
    opacity:0,
    duration:0.5
},"-=0.5")

tl.from("#center1-bottom img",{
    y:-40,
    opacity:0,
    duration:0.5,
    stagger:0.1
})
}

page1Animation()

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            start:"top 60%",
            end:"top 0%",
            scrub:2
        }
    })
    
    tl2.from("#page2top h1",{
        x:-50,
        opacity:0,
        duration:5
    
    })
    
    tl2.from("#page2top p",{
        y:-50,
        opacity:0,
        duration:5,
    })
    
    tl2.from("#page2content .box1",{
        x:-100,
        opacity:0,
        duration:10,
    },"same")
    
    tl2.from("#page2content .box2",{
        x:100,
        opacity:0,
        duration:10,
    },"same")
    
    tl2.from("#page2content .box3",{
        x:-100,
        opacity:0,
        duration:10,
    },"same2")
    
    tl2.from("#page2content .box4",{
        x:100,
        opacity:0,
        duration:10,
    },"same2")
    
}

page2Animation()

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"top 70%",
            end:"top 0%",
            scrub:2
        }
    })
    
    tl3.from(".page3top",{
        y:-50,
        opacity:0,
        duration:3
    })
    
    tl3.from(".page3mid h1",{
        x:-50,
        opacity:0,
        duration:2
    })
    
    tl3.from(".page3mid p",{
        y:50,
        opacity:0,
        duration:2
    })
    
    tl3.from(".page3bottom",{
        x:-200,
        opacity:0,
        duration:3
    })
    
    tl3.from(".part1",{
        y:-50,
        opacity:0,
        duration:3
    })
    
    tl3.from(".footpart2",{
        y:-50,
        opacity:0,
        duration:3
    })
    
    tl3.from(".part3",{
        y:-50,
        opacity:0,
        duration:3
    })
}

page3Animation()

