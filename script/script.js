

document.addEventListener("DOMContentLoaded", function(e){
    // canvas();
    effectMotion();
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
            scrub: 1, // 스크롤과 부드럽게 동기화
        }
    })
    .fromTo(".effect-img",
        { scale: 0.3 },  // 시작 스케일
        { scale: 1, ease: "power2.out" } // 끝 스케일
    );
};

