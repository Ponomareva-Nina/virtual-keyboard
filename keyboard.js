const KEYS = [
    {
        "code": "Backquote",
        "size": "standard",
        "content": "`",
        "shiftCase": "&tilde;",
    },
    {

        "code": "Digit1",
        "size": "standard",
        "content": "1",
        "shiftCase": "!",
    },
    {
        "code": "Digit2",
        "size": "standard",
        "content": "2",
        "shiftCase": "@",
    },
    {
        "code": "Digit3",
        "size": "standard",
        "content": "3",
        "shiftCase": "#",
    },
    {
        "code": "Digit4",
        "size": "standard",
        "content": "4",
        "shiftCase": "$",
    },
    {
        "code": "Digit5",
        "size": "standard",
        "content": "5",
        "shiftCase": "%",
        
    },
    {
        "code": "Digit6",
        "size": "standard",
        "content": "6",
        "shiftCase": "^",
    },
    {
        "code": "Digit7",
        "size": "standard",
        "content": "7",
        "shiftCase": "&",
    },
    {
        "code": "Digit8",
        "size": "standard",
        "content": "8",
        "shiftCase": "*",
    },
    {
        "code": "Digit9",
        "size": "standard",
        "content": "9",
        "shiftCase": "&#40;",
    },
    {
        "code": "Digit0",
        "size": "standard",
        "content": "0",
        "shiftCase": "&#41;",
    },
    {
        "code": "NumpadSubtract",
        "size": "standard",
        "content": "&minus;",
        "shiftCase": "_",
    },
    {
        "code": "Equal",
        "size": "standard",
        "content": "&#61;",
        "shiftCase": "&plus;",
    },
    {
        "code": "Backspace",
        "size": "large",
        "content": "&#8592;",
        "isFunctional": true,
    },

    //row2
    {
        "code": "Tab",
        "size": "large",
        "content": "Tab &#8646;",
        "isFunctional": true,
    },
    {
        "code": "KeyQ",
        "size": "standard",
        "content": "q",
        "shiftCase": "Q",
        "capsCase": "Q"
    },
    { 
        "code": "KeyW",
        "size": "standard",
        "content": "w",
        "shiftCase": "W",
        "capsCase": "W"
    },
    {
        "code": "KeyE",
        "size": "standard",
        "content": "e",
        "shiftCase": "E",
        "capsCase": "E"
    },
    {
        "code": "KeyR",
        "size": "standard",
        "content": "r",
        "shiftCase": "R",
        "capsCase": "R"
    },
    {
        "code": "KeyT",
        "size": "standard",
        "content": "t",
        "shiftCase": "T",
        "capsCase": "T"
    },
    { 
        "code": "KeyY",
        "size": "standard",
        "content": "y",
        "shiftCase": "Y",
        "capsCase": "Y"
    },
    {
        "code": "KeyU",
        "size": "standard",
        "content": "u",
        "shiftCase": "u",
        "capsCase": "U"
    },
    {
        "code": "KeyI",
        "size": "standard",
        "content": "i",
        "shiftCase": "I",
        "capsCase": "I"
    },
    {
        "code": "KeyO",
        "size": "standard",
        "content": "o",
        "shiftCase": "O",
        "capsCase": "O"
    },
    {
        "code": "KeyP",
        "size": "standard",
        "content": "p",
        "shiftCase": "P",
        "capsCase": "P"
    },
    {
        "code": "BracketLeft",
        "size": "standard",
        "content": "&#91;",
        "shiftCase": "{",
    },
    {
        "code": "BracketRight",
        "size": "standard",
        "content": "&#93;",
        "shiftCase": "}",
    },
    {
        "code": "Backslash",
        "size": "standard",
        "content": "&#92;",
        "shiftCase": "&#448;"
    },

    //row3
    {
        "code": "CapsLock",
        "size": "large",
        "content": "CapsLock",
        "isFunctional": true,
    },
    {
        "code": "KeyA",
        "size": "standard",
        "content": "a",
        "shiftCase": "A",
        "capsCase": "A"
    },
    {
        "code": "KeyS",
        "size": "standard",
        "content": "s",
        "shiftCase": "S",
        "capsCase": "S"
    },
    {
        "code": "KeyD",
        "size": "standard",
        "content": "d",
        "shiftCase": "D",
        "capsCase": "D"
    },
    {
        "code": "KeyF",
        "size": "standard",
        "content": "f",
        "shiftCase": "F",
        "capsCase": "F"
    },
    {
        "code": "KeyG",
        "size": "standard",
        "content": "g",
        "shiftCase": "G",
        "capsCase": "G"
    },
    {
        "code": "KeyH",
        "size": "standard",
        "content": "h",
        "shiftCase": "H",
        "capsCase": "H"
    },
    {
        "code": "KeyJ",
        "size": "standard",
        "content": "j",
        "shiftCase": "J",
        "capsCase": "j"
    },
    {
        "code": "KeyK",
        "size": "standard",
        "content": "k",
        "shiftCase": "K",
        "capsCase": "K"
    },
    {
        "code": "KeyL",
        "size": "standard",
        "content": "l",
        "shiftCase": "L",
        "capsCase": "L"
    },
    {
        "code": "Semicolon",
        "size": "standard",
        "content": "&#59;",
        "shiftCase": "&#58;",
    },
    {
        "code": "Quote",
        "size": "standard",
        "content": "&quot;",
        "shiftCase": "&#39;",
    },
    {
        "code": "Enter",
        "size": "large",
        "content": "Enter",
        "isFunctional": true,
    },

    //row 4
    {
        "code": "ShiftLeft",
        "size": "large",
        "content": "Shift",
        "isFunctional": true,
    },
    {
        "code": "KeyZ",
        "size": "standard",
        "content": "z",
        "shiftCase": "Z",
        "capsCase": "Z"
    },
    {
        "code": "KeyX",
        "size": "standard",
        "content": "x",
        "shiftCase": "X",
        "capsCase": "X"
    },
    {
        "code": "KeyC",
        "size": "standard",
        "content": "c",
        "shiftCase": "C",
        "capsCase": "C"
    },
    {
        "code": "KeyV",
        "size": "standard",
        "content": "v",
        "shiftCase": "V",
        "capsCase": "V"
    },
    {
        "code": "KeyB",
        "size": "standard",
        "content": "b",
        "shiftCase": "B",
        "capsCase": "B"
    },
    {
        "code": "KeyN",
        "size": "standard",
        "content": "n",
        "shiftCase": "N",
        "capsCase": "N"
    },
    {
        "code": "KeyM",
        "size": "standard",
        "content": "m",
        "shiftCase": "M",
        "capsCase": "M"
    },
    {
        "code": "NumpadDecimal",
        "size": "standard",
        "content": "&#44;",
        "shiftCase": "&lang;"
    },
    {
        "code": "Period",
        "size": "standard",
        "content": "&#46;",
        "shiftCase": "&rang;"
    },
    {
        "code": "Slash",
        "size": "standard",
        "content": "&#47;",
        "shiftCase": "&#63;"
    },
    {
        "code": "ArrowUp",
        "size": "standard",
        "content": "&#9650;",
        "isFunctional": true,
    },
    {
        "code": "ShiftLeft",
        "size": "large",
        "content": "Shift",
        "isFunctional": true,
    },
    
    //row 5
    {
        "code": "ControlLeft",
        "size": "standard",
        "content": "Ctrl",
        "isFunctional": true,
    },
    {
        "code": "MetaLeft",
        "size": "standard",
        "content": "Win",
        "isFunctional": true,
    },
    {
        "code": "AltLeft",
        "size": "standard",
        "content": "Alt",
        "isFunctional": true,
    },
    {
        "code": "Space",
        "size": "x-large",
        "content": " ",
        "shiftCase": " ",
        "capsCase": " ",
    },
    {
        "code": "AltLeft",
        "size": "standard",
        "content": "Alt",
        "isFunctional": true,
    },
    {
        "code": "ArrowLeft",
        "size": "standard",
        "content": "&#9668;",
        "isFunctional": true,
    },
    {
        "code": "ArrowDown",
        "size": "standard",
        "content": "&#9660;",
        "isFunctional": true,
    },
    {
        "code": "ArrowRight",
        "size": "standard",
        "content": "&#9658;",
        "isFunctional": true,
    },
    {
        "code": "ControlLeft",
        "size": "standard",
        "content": "Ctrl",
        "isFunctional": true,
    },
];

const MAIN = document.createElement('main');
const WRAPPER = document.createElement('div');
const TITLE = document.createElement('h1');
const TEXTAREA = document.createElement('textarea');
const KEYBOARD_CONTAINER = document.createElement('div');
const COMMENTS = document.createElement('div'); 

//let language = localStorage.getItem('keyboardLanguage') || 'en';
//window.addEventListener('beforeunload', () => localStorage.setItem('keyboardLanguage', language));

document.addEventListener('DOMContentLoaded', createPage); //отрисовываем структуру страницы
createKeyboard(/*language*/); //отрисовываем клавиатуру

document.addEventListener('keydown', function(event) {
   let activeKey = document.getElementById(event.code);
   console.log(activeKey);
   activeKey.classList.add('active');
});
document.addEventListener('keyup', function(event) {
    let activeKey = document.getElementById(event.code);
    activeKey.classList.remove('active');
 });



function createPage () {
    document.body.appendChild(MAIN);
    MAIN.classList.add('main-container');
    
    WRAPPER.classList.add('wrapper');
    MAIN.appendChild(WRAPPER);
      
    TITLE.classList.add('title');
    TITLE.innerHTML = 'RSS Виртуальная Клавиатура';
    WRAPPER.appendChild(TITLE);

   
    TEXTAREA.classList.add('text-container');
    TEXTAREA.setAttribute('id', 'textarea');
    TEXTAREA.setAttribute('name', 'textarea');
    TEXTAREA.setAttribute('rows', '6');
    WRAPPER.appendChild(TEXTAREA);

    KEYBOARD_CONTAINER.classList.add('keyboard-container')
    WRAPPER.appendChild(KEYBOARD_CONTAINER);

    WRAPPER.appendChild(COMMENTS);
    COMMENTS.classList.add('comments')
    let comment1 = document.createElement('p');
    comment1.innerHTML = 'Клавиатура создана в операционной системе Windows';
    COMMENTS.appendChild(comment1);
   
    let comment2 = document.createElement('p');
    comment2.innerHTML = 'Для переключения языка использовать комбинацию: Shift + Alt';
    COMMENTS.appendChild(comment2);
};
 

function createKeyboard() {
   let row0 = document.createElement('div');
   let row1 = document.createElement('div');
   let row2 = document.createElement('div');
   let row3 = document.createElement('div');
   let row4 = document.createElement('div');   
   
   let keyboardRows = [row0, row1, row2, row3, row4];
   
   keyboardRows.forEach(row => {
        row.classList.add('keyboard-row');
        KEYBOARD_CONTAINER.appendChild(row);
    });

    for (let i = 0; i < KEYS.length; i ++) {
        let key = document.createElement('button');
        key.classList.add('key');
        key.classList.add(KEYS[i].size);
        key.setAttribute('id', KEYS[i].code);
        if (KEYS[i].isFunctional){ key.classList.add('functional');}

        if (i < 14) {
            row0.appendChild(key);
            key.innerHTML = KEYS[i].content;
        }
        else if (i >= 14 && i < 28) {
            row1.appendChild(key);
            key.innerHTML = KEYS[i].content;
        }
        else if (i >= 28 && i < 41) {
            row2.appendChild(key);
            key.innerHTML = KEYS[i].content;
        }
        else if (i >= 41 && i < 54) {
            row3.appendChild(key);
            key.innerHTML = KEYS[i].content;
        }
        else {
            row4.appendChild(key);
            key.innerHTML = KEYS[i].content;
        };
    };
};
