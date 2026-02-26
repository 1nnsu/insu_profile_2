

document.addEventListener("DOMContentLoaded", function(e){
    // canvas();
    // effectMotion();
    effectMotion2();
    projectSlideTop();
    projectSlideBottom();
})


const canvas =() => {
    
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        transitionSpeed: 2000,
        loopDuration: 1000,
        states : {
            "default-state": {
                gradients: [
                    ['#1E242F', '#3B4C60'],  // 네이비 블루 계열로 확실한 대비
                    ['#000000', '#264D7D'],  // 밝은 블루그레이, 부드럽게 이어짐
                    ['#1E242F', '#000000']   // 훨씬 어두운 컬러로 깊이감 추가
                ]
            }
        }
    });
}

// project section
const projectSlideTop = () => {
    var swiper = new Swiper(".p-slide-top", {
        loop:true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        speed: 3000,
        slidesPerView: 5,
        spaceBetween: 20,
        allowTouchMove: false,
        loopAdditionalSlides: 10,
        breakpoints: {
            1440: {
            slidesPerView: 4,
            },
            768: {
            slidesPerView: 3,
            },
            480: {
            slidesPerView: 2.5,
            }
        }
    });
}
const projectSlideBottom = () => {
    var swiper = new Swiper(".p-slide-bottom", {
        loop:true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        speed: 3000,
        slidesPerView: 5,
        spaceBetween: 20,
        allowTouchMove: false,
        loopAdditionalSlides: 10,
        breakpoints: {
            1440: {
            slidesPerView: 4,
            },
            768: {
            slidesPerView: 3,
            },
            480: {
            slidesPerView: 2.5,
            }
        }
    });
}


// effect section
const effectMotion = () => {
    const slideWrap = document.querySelector('.effect');

    if (!slideWrap) return;

    ScrollTrigger.create({
        trigger: slideWrap,
        start: "top top",
        end: "bottom top",
        pin: true,
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: slideWrap,
            start: "top top",
            end: "bottom top",
            scrub: 1, 
        }
    })
    .fromTo(".effect-img",
        { scale: 0.3 },  
        { scale: 1, ease: "power2.out" } 
    );
};

    const effectMotion2 = () => {
    const slideWrap = document.querySelector('.effect');
    if (!slideWrap) return;

    const mm = gsap.matchMedia();

    // desktop
    mm.add("(min-width: 1441px)", () => {
        gsap.timeline({
        scrollTrigger: {
            trigger: slideWrap,
            start: "top top",
            end: "+=120%",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
        }
        })
        .fromTo(".effect-img",
        { scale: 0.3 },
        { scale: 1, ease: "power2.out" }
        );
    });

    // tablet
    mm.add("(max-width: 1440px) and (min-width: 769px)", () => {
        gsap.timeline({
        scrollTrigger: {
            trigger: slideWrap,
            start: "top top",
            end: "+=100%", 
            scrub: 1,
            pin: true, 
            invalidateOnRefresh: true,
        }
        })
        .fromTo(".effect-img",
        { scale: 0.5 },
        { scale: 1 }
        );
    });

    // mobile
    mm.add("(max-width: 768px)", () => {
        gsap.timeline({
        scrollTrigger: {
            trigger: slideWrap,
            start: "top 85%",
            end: "+=70%", 
            scrub: 0.5,
            pin: false,
            invalidateOnRefresh: true,
        }
        })
        .fromTo(".effect-img",
        { scale: 0.4 },
        { scale: 1}
        );
        
    });
    };
