function shadeIn(square) {
    square.setAttribute('class', 'shaded')
}

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
                shadeIn(div);
            })
            div.addEventListener('mouseover', () => {
                if (div.getAttribute('class') !== 'shaded') {
                    div.setAttribute('class', 'hoverOn');
                }
            })
            div.addEventListener('mouseleave', () => {
                if (div.getAttribute('class') !== 'shaded') {
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

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let number = 101;
    while (number > 100) {
        number = Number(prompt('How many squares do you want for each side?'));
    }
    boxCreation(number);
})