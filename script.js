let animationSpeed = 'normal';
let component;
let innerContent;


window.onload = () => {
    component = document.getElementById('scroll-animations-component');
    innerContent = component.innerHTML;
    loadAnimation()
}

function setSpeed(event) {
    switch (event.target.value) {
        case "1": animationSpeed = "slow"
            break;
        case "2": animationSpeed = "normal"
            break;
        case "3": animationSpeed = "fast"
            break;
        default:
            break;
    }
}

function setAnimation(direction) {
    const box2 = document.getElementById('box-2');
    const code = document.getElementById('animation-code');
    if (animationSpeed != 'normal') {
        box2.innerHTML = `<div id="box-1" class="animation-box ss-${direction}-${animationSpeed} border border-4 border-secondary rounded-2 shadow m-auto"></div>`;
        code.innerText = `class="ss-${direction}-${animationSpeed}"`
    } else {
        box2.innerHTML = `<div id="box-1" class="animation-box ss-${direction} border border-4 border-secondary rounded-2 shadow m-auto"></div>`;
        code.innerText = `class="ss-${direction}"`;
    }
}

function reloadComponent() {
    //set visibility to hidden for all animation boxes
    document.querySelectorAll('.animation-box').forEach(box => {
        box.style.visibility = 'hidden';
    })

    //clear component
    component.innerHTML = "";
    component.innerHTML = innerContent;

    loadAnimation()
}