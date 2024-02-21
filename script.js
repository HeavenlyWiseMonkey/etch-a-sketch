function black(square) {
    square.style.backgroundColor = colorPicker.value;
}

function getRandomColor(square) {
    let color = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = `#${color}`;
}

function white(square) {
    square.style.backgroundColor = 'rgb(255,255,255)';
}

function option(randomColor, div) {
    if (randomColor) {
        getRandomColor(div);
    }
    else if (eraser) {
        white(div);
    }
    else {
        black(div);
    }
}

// function increment_color(square) {
//     let currentColor = square.getAttribute('backgroundColor');
//     if (currentColor === null) {
//         currentColor = 'FFFFFF'
//     }
    
// }

// function checkChildren(parent) {
//     children = parent.childNodes;
//     for (let i = 0; i<children.length; i++) {
//         children[i].addEventListener('mouseenter', shadeIn(children[i]));
//     }
// }

function boxCreation(number) {
    const box = document.querySelector('.box');
    let holding = false;
    while (box.firstChild) {
        box.firstChild.remove();
    }
    for (let i = 0; i<number; i++) {
        const column = document.createElement('div');
        for (let j = 0; j<number; j++) {
            const div = document.createElement('div');
            div.setAttribute('style', 'user-select: none;');
            div.addEventListener('mousedown', () => {
                option(randomColor, div);
            });
            div.addEventListener('mouseover', () => {
                if (div.getAttribute('backgroundColor') !== 'black') {
                    div.setAttribute('class', 'hoverOn');
                }
            })
            div.addEventListener('mouseleave', () => {
                if (div.getAttribute('backgroundColor') !== 'black') {
                    div.setAttribute('class', 'hoverOff');
                }
            })
            div.addEventListener('mouseenter', () => {
                if (holding) {
                    option(randomColor, div);
                }
            });
            column.appendChild(div);
        }
        box.appendChild(column);
    }

    box.addEventListener('mousedown', () => {
        holding = true;
    });
    box.addEventListener('mouseup', () => {
        holding = false;
    })
    // box.childNodes.forEach((element) => {
    //     console.log(element);
    // })
    // box.addEventListener('mousedown', checkChildren(box));
    // box.addEventListener('mousedown', () => {
    //     box.childNodes.forEach((element) => {
    //         element.addEventListener('mousedown', shadeIn(element));
    //     });
    // })
    // box.addEventListener('mouseup', () => {
    //     box.childNodes.forEach((element) => {
    //         element.removeEventListener('mouseenter', console.log('y'));
    //     });
    // })
}

let randomColor = false;
let eraser = false;
// let shading = false;
const button = document.querySelector('button');
const normal = document.querySelector('.normal');
const rainbow = document.querySelector('.rainbow');
const erase = document.querySelector('.erase');
const colorPicker = document.querySelector('input');
// const chromatic = document.querySelector('.chromatic')

normal.addEventListener('click', () => {
    randomColor = false;
    // shading = false;
    eraser = false;
});

rainbow.addEventListener('click', () => {
    randomColor = true;
    eraser = false;
});

erase.addEventListener('click', () => {
    randomColor = false;
    eraser = true;
});

// chromatic.addEventListener('click', () => {
//     shading = true;
// });


button.addEventListener('click', () => {
    let number = 101;
    while (number > 100) {
        number = Number(prompt('How many squares do you want for each side?'));
    }
    boxCreation(number);
})

