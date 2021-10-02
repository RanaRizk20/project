var currentSlidersIndices={
    "recruitment": 1,
    "orientation": 1,
    "ecu": 1,
    "general": 1,
    "spark": 1,
    "first-step":1,
    "closing":1
};

var sliderContainers={
    "recruitment": document.getElementById('recruitment-slider'),
    "orientation": document.getElementById('orientation-slider'),
    "ecu": document.getElementById('ecu-slider'),
    "general": document.getElementById('general-slider'),
    "spark": document.getElementById('spark-slider'),
    "first-step": document.getElementById('first-step-slider'),
    "closing": document.getElementById('closing-slider')
};

function nextSlide(direction, slider){
    currentSlidersIndices[slider] += direction;
    showNextSlide(slider);
}


function showNextSlide(slider){
    curr = sliderContainers[slider];
    nextImage = currentSlidersIndices[slider];
    if ((nextImage > 10 && slider != 'closing') || nextImage > 22 ){
        nextImage = 1;
        currentSlidersIndices[slider] = 1;
    }
    if (nextImage == 0){
        if (slider != 'closing') nextImage = 10;
        else nextImage = 22;
        currentSlidersIndices[slider] = 10;
    }
    curr.style.backgroundImage = "url('../img/" + slider + "/img" + String(nextImage) + ".jpg')"
}