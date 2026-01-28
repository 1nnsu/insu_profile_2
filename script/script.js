

document.addEventListener("DOMContentLoaded", function(e){
    canvas();
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