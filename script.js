function black(square) {
    square.setAttribute('class', 'black');
}

function get_color(square) {
    let color = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = `#${color}`;
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
    while (box.firstChild) {
        box.firstChild.remove();
    }
    for (let i = 0; i<number; i++) {
        const column = document.createElement('div');
        for (let j = 0; j<number; j++) {
            const div = document.createElement('div');
            div.setAttribute('style', 'user-select: none;');
            div.addEventListener('mousedown', () => {
                if (randomColor) {
                    get_color(div);
                }
                else if (shading) {
                    increment_color(div);
                }
                else {
                    black(div);
                }
                });
            div.addEventListener('mouseover', () => {
                if (div.getAttribute('class') !== 'black') {
                    div.setAttribute('class', 'hoverOn');
                }
            })
            div.addEventListener('mouseleave', () => {
                if (div.getAttribute('class') !== 'black') {
                    div.setAttribute('class', 'hoverOff');
                }
            })
            column.appendChild(div);
        }
        box.appendChild(column);
    }
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
// let shading = false;
const button = document.querySelector('button');
const normal = document.querySelector('.normal');
const rainbow = document.querySelector('.rainbow');
// const chromatic = document.querySelector('.chromatic')

normal.addEventListener('click', () => {
    randomColor = false;
    shading = false;
});

rainbow.addEventListener('click', () => {
    randomColor = true;
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

