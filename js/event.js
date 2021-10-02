var container = document.getElementsByClassName('slider-parent-container')[0];
var slider = document.getElementsByClassName('slider')[0];
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = [0, 0];
var currentMargin = [0, 0];
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition[0] > slidesCount) {
        currentPosition[0] -= slidesPerPage;
    };
    currentMargin[0] = - currentPosition[0] * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition[0] > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition[0] < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition[0] >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight(pos) {
    container = document.getElementsByClassName('slider-parent-container')[pos];
    slider = document.getElementsByClassName('slider')[pos];
    if (currentPosition[pos] != 0) {
        slider.style.marginLeft = currentMargin[pos] + (100 / slidesPerPage) + '%';
        currentMargin[pos] += (100 / slidesPerPage);
        currentPosition[pos]--;
    };
    if (currentPosition[pos] === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition[pos] < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft(pos) {
    container = document.getElementsByClassName('slider-parent-container')[pos];
    slider = document.getElementsByClassName('slider')[pos];
    if (currentPosition[pos] != slidesCount) {
        slider.style.marginLeft = currentMargin[pos] - (100 / slidesPerPage) + '%';
        currentMargin[pos] -= (100 / slidesPerPage);
        currentPosition[pos]++;
    };
    if (currentPosition[pos] == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition[pos] > 0) {
        buttons[0].classList.remove('inactive');
    }
};