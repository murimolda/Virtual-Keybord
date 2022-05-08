document.addEventListener("DOMContentLoaded", function () {
  /*Function to find the element that is wider than the body of the page*/
  const docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });

  const body = document.querySelector("body");
  let language = "en";

  const setLocalStorage = () => {
    localStorage.setItem("language", language);
  };

  const getTranslate = (lang) => {
    body.dataset.lang = lang;
    language = lang;
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("language")) {
      const language = localStorage.getItem("language");
      getTranslate(language);
    }
  };

  window.addEventListener("beforeunload", setLocalStorage);

  window.addEventListener("load", function () {
    getLocalStorage();
  });

  const keyNumber = {
    0: "Escape",
    1: "F1",
    2: "F2",
    3: "F3",
    4: "F4",
    5: "F5",
    6: "F6",
    7: "F7",
    8: "F8",
    9: "F9",
    10: "F10",
    11: "F11",
    12: "F12",
    13: "Delete",
    14: "Backquote",
    15: "Digit1",
    16: "Digit2",
    17: "Digit3",
    18: "Digit4",
    19: "Digit5",
    20: "Digit6",
    21: "Digit7",
    22: "Digit8",
    23: "Digit9",
    24: "Digit0",
    25: "Minus",
    26: "Equal",
    27: "Backspace",
    28: "Tab",
    29: "KeyQ",
    30: "KeyW",
    31: "KeyE",
    32: "KeyR",
    33: "KeyT",
    34: "KeyY",
    35: "KeyU",
    36: "KeyI",
    37: "KeyO",
    38: "KeyP",
    39: "BracketLeft",
    40: "BracketRight",
    41: "Backslash",
    42: "CapsLock",
    43: "KeyA",
    44: "KeyS",
    45: "KeyD",
    46: "KeyF",
    47: "KeyG",
    48: "KeyH",
    49: "KeyJ",
    50: "KeyK",
    51: "KeyL",
    52: "Semicolon",
    53: "Quote",
    54: "Enter",
    55: "ShiftLeft",
    56: "KeyZ",
    57: "KeyX",
    58: "KeyC",
    59: "KeyV",
    60: "KeyB",
    61: "KeyN",
    62: "KeyM",
    63: "Comma",
    64: "Period",
    65: "Slash",
    66: "ArrowUp",
    67: "ShiftRight",
    68: "ControlLeft",
    69: "AltLeft",
    70: "Space",
    71: "AltRight",
    72: "ControlRight",
    73: "ArrowLeft",
    74: "ArrowDown",
    75: "ArrowRight",
  };

  const keyCode = {
    en: {
      Escape: "esc",
      F1: "F1",
      F2: "F2",
      F3: "F3",
      F4: "F4",
      F5: "F5",
      F6: "F6",
      F7: "F7",
      F8: "F8",
      F9: "F9",
      F10: "F10",
      F11: "F11",
      F12: "F12",
      Delete: "Delete",
      Backquote: { up: "~", down: "`" },
      Digit1: { up: "!", down: "1" },
      Digit2: { up: "@", down: "2" },
      Digit3: { up: "#", down: "3" },
      Digit4: { up: "$", down: "4" },
      Digit5: { up: "%", down: "5" },
      Digit6: { up: "^", down: "6" },
      Digit7: { up: "&", down: "7" },
      Digit8: { up: "*", down: "8" },
      Digit9: { up: "(", down: "9" },
      Digit0: { up: ")", down: "0" },
      Minus: { up: "_", down: "-" },
      Equal: { up: "+", down: "=" },
      Backspace: "Backspace",
      Tab: "Tab",
      KeyQ: "Q",
      KeyW: "W",
      KeyE: "E",
      KeyR: "R",
      KeyT: "T",
      KeyY: "Y",
      KeyU: "U",
      KeyI: "I",
      KeyO: "O",
      KeyP: "P",
      BracketLeft: { up: "{", down: "[" },
      BracketRight: { up: "}", down: "]" },
      Backslash: { up: "|", down: "\\" },
      CapsLock: "CapsLock",
      KeyA: "A",
      KeyS: "S",
      KeyD: "D",
      KeyF: "F",
      KeyG: "G",
      KeyH: "H",
      KeyJ: "J",
      KeyK: "K",
      KeyL: "L",
      Semicolon: { up: ":", down: ";" },
      Quote: { up: '"', down: "'" },
      Enter: "Enter",
      ShiftLeft: "Shift",
      KeyZ: "Z",
      KeyX: "X",
      KeyC: "C",
      KeyV: "V",
      KeyB: "B",
      KeyN: "N",
      KeyM: "M",
      Comma: { up: "<", down: "," },
      Period: { up: ">", down: "." },
      Slash: { up: "?", down: "/" },
      ShiftRight: "Shift",
      ControlLeft: "Ctrl",
      AltLeft: "Alt",
      Space: " ",
      AltRight: "Alt",
      ControlRight: "Ctrl",
      ArrowUp: "&#8593;",
      ArrowLeft: "&#8592;",
      ArrowRight: "&#8594;",
      ArrowDown: "&#8595;",
    },
    ru: {
      Escape: "esc",
      F1: "F1",
      F2: "F2",
      F3: "F3",
      F4: "F4",
      F5: "F5",
      F6: "F6",
      F7: "F7",
      F8: "F8",
      F9: "F9",
      F10: "F10",
      F11: "F11",
      F12: "F12",
      Delete: "Delete",
      Backquote: "Ё",
      Digit1: { up: "!", down: "1" },
      Digit2: { up: '"', down: "2" },
      Digit3: { up: "№", down: "3" },
      Digit4: { up: ";", down: "4" },
      Digit5: { up: "%", down: "5" },
      Digit6: { up: ":", down: "6" },
      Digit7: { up: "?", down: "7" },
      Digit8: { up: "*", down: "8" },
      Digit9: { up: "(", down: "9" },
      Digit0: { up: ")", down: "0" },
      Minus: { up: "_", down: "-" },
      Equal: { up: "+", down: "=" },
      Backspace: "Backspace",
      Tab: "Tab",
      KeyQ: "Й",
      KeyW: "Ц",
      KeyE: "У",
      KeyR: "К",
      KeyT: "Е",
      KeyY: "Н",
      KeyU: "Г",
      KeyI: "Ш",
      KeyO: "Щ",
      KeyP: "З",
      BracketLeft: "Х",
      BracketRight: "Ъ",
      Backslash: { up: "/", down: "\\" },
      CapsLock: "CapsLock",
      KeyA: "Ф",
      KeyS: "Ы",
      KeyD: "В",
      KeyF: "А",
      KeyG: "П",
      KeyH: "Р",
      KeyJ: "О",
      KeyK: "Л",
      KeyL: "Д",
      Semicolon: "Ж",
      Quote: "Э",
      Enter: "Enter",
      ShiftLeft: "Shift",
      KeyZ: "Я",
      KeyX: "Ч",
      KeyC: "С",
      KeyV: "М",
      KeyB: "И",
      KeyN: "Т",
      KeyM: "Ь",
      Comma: "Б",
      Period: "Ю",
      Slash: { up: ",", down: "." },
      ShiftRight: "Shift",
      ControlLeft: "Ctrl",
      AltLeft: "Alt",
      Space: "",
      AltRight: "Alt",
      ControlRight: "Ctrl",
      ArrowUp: "&#8593;",
      ArrowLeft: "&#8592;",
      ArrowRight: "&#8594;",
      ArrowDown: "&#8595;",
    },
  };

  class createTitle {
    createTitleBlock() {
      let title = document.createElement("h1");
      title.classList.add("title");
      title.innerHTML = `RSS Virtual Keyboard - Windows OS`;
      return title;
    }
  }

  class createTextarea {
    createArea() {
      let textArea = document.createElement("textarea");
      textArea.classList.add("textarea-block");
      textArea.id = "textarea-block";
      textArea.setAttribute("autofocus", "autofocus");
      writeText(textArea);
      return textArea;
    }

    createWrap() {
      let textAreaWrap = document.createElement("div");
      textAreaWrap.classList.add("textarea-wrapper");
      textAreaWrap.append(this.createArea());
      return textAreaWrap;
    }
  }

  class createKeyItem {
    createItem() {
      let keyItem = document.createElement("div");
      keyItem.classList.add("keyboard-item");
      return keyItem;
    }
  }

  class createKeyLines {
    createLine() {
      let keyLine = document.createElement("div");
      keyLine.classList.add("keyboard-line");
      return keyLine;
    }
  }

  const addKeyValue = (elem) => {
    let lang = body.dataset.lang;
    for (const key in keyCode[`${lang}`]) {
      if (elem.dataset.code === key) {
        if (typeof keyCode[`${lang}`][key] !== "object") {
          elem.innerHTML = keyCode[`${lang}`][key];
        } else {
          let shiftUp = document.createElement("span");
          shiftUp.className = "shift-up";
          shiftUp.innerHTML = keyCode[`${lang}`][key]["up"];
          let shiftDown = document.createElement("span");
          shiftDown.className = "shift-down";
          shiftDown.innerHTML = keyCode[`${lang}`][key]["down"];
          elem.append(shiftUp, shiftDown);
        }
      }
    }
  };

  class createKeyWrapper {
    createKeyWrap() {
      let keyWrap = document.createElement("div");
      keyWrap.classList.add("keyboard-wrapper");

      let keyLinesBlock = new createKeyLines();
      let count = 0;
      while (count < 6) {
        keyWrap.append(keyLinesBlock.createLine());
        count++;
      }

      let numberArray = [8, 13, 13, 14, 14, 14];
      let keyItemBlock = new createKeyItem();
      let valueCounter = 0;
      for (let i = 0; i < keyWrap.children.length; i++) {
        let n = numberArray[numberArray.length - 1];
        while (n > 0) {
          let keyboardItem = keyItemBlock.createItem();
          for (const key in keyNumber) {
            if (String(valueCounter) === key) {
              keyboardItem.dataset.code = keyNumber[key];
            }
          }
          addKeyValue(keyboardItem);
          keyButtonLight(keyboardItem);
          keyWrap.children[i].append(keyboardItem);
          valueCounter++;
          n--;
        }
        numberArray.pop();
      }
      return keyWrap;
    }
  }

  const titleBlock = new createTitle();
  const textAreaBlock = new createTextarea();
  const keyBoardBlock = new createKeyWrapper();

  const createElements = () => {
    let container = document.createElement("div");
    container.classList.add("container");

    container.append(
      titleBlock.createTitleBlock(),
      textAreaBlock.createWrap(),
      keyBoardBlock.createKeyWrap()
    );
    body.append(container);
  };

  window.addEventListener("load", function () {
    createElements();
  });

  function keyButtonLight(elem) {
    document.addEventListener("keydown", function (event) {
      if (event.code === elem.dataset.code && event.code !== "CapsLock") {
        elem.classList.add("key-active");
      } else if (
        event.code === elem.dataset.code &&
        event.code === "CapsLock"
      ) {
        elem.classList.toggle("key-active");
      }
    });
    document.addEventListener("keyup", function (event) {
      if (event.code === elem.dataset.code && event.code !== "CapsLock") {
        setTimeout(() => {
          elem.classList.remove("key-active");
        }, 800);
      }
    });
    elem.addEventListener("click", function (event) {
      elem = event.target;
      if (elem.parentElement.hasAttribute("data-code")) {
        elem = elem.parentElement;
        elem.classList.add("key-active");
        setTimeout(() => {
          elem.classList.remove("key-active");
        }, 800);
      } else if (
        elem.hasAttribute("data-code") &&
        elem.dataset.code !== "CapsLock"
      ) {
        elem.classList.add("key-active");
        setTimeout(() => {
          elem.classList.remove("key-active");
        }, 800);
      } else if (
        elem.hasAttribute("data-code") &&
        elem.dataset.code === "CapsLock"
      ) {
        elem.classList.toggle("key-active");
      }
    });
  }

  const changeLang = () => {
    if (body.dataset.lang === "en") {
      body.dataset.lang = "ru";
      language = "ru";
    } else {
      body.dataset.lang = "en";
      language = "en";
    }
  };

  const changeKeyValue = () => {
    const elem = document.querySelectorAll(".keyboard-item");
    let lang = body.dataset.lang;
    for (const key in keyCode[`${lang}`]) {
      for (const item of elem) {
        if (item.dataset.code === key) {
          if (
            typeof keyCode[`${lang}`][key] === "object" &&
            item.children.length > 0
          ) {
            item.firstChild.innerHTML = keyCode[`${lang}`][key]["up"];
            item.lastChild.innerHTML = keyCode[`${lang}`][key]["down"];
          } else if (
            typeof keyCode[`${lang}`][key] === "object" &&
            item.children.length <= 0
          ) {
            item.innerHTML = "";
            let shiftUp = document.createElement("span");
            shiftUp.className = "shift-up";
            shiftUp.innerHTML = keyCode[`${lang}`][key]["up"];
            let shiftDown = document.createElement("span");
            shiftDown.className = "shift-down";
            shiftDown.innerHTML = keyCode[`${lang}`][key]["down"];
            item.append(shiftUp, shiftDown);
          } else {
            item.innerHTML = keyCode[`${lang}`][key];
          }
        }
      }
    }
  };

  function dabbleKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener("keydown", function (event) {
      pressed.add(event.code);
      for (let code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();
      func();
    });

    document.addEventListener("keyup", function (event) {
      pressed.delete(event.code);
    });
  }

  dabbleKeys(
    () => {
      changeLang();
      changeKeyValue();
    },
    "ShiftLeft",
    "AltLeft"
  );

  const keyButtonText = [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "Space",
  ];

  const writeText = (elem) => {
    let value = elem.value;
    let text = "";
    let cursorPlace;

    document.addEventListener("click", function (event) {
      let shiftLeft = document.querySelector('[data-code="ShiftLeft"]');
      let shiftRight = document.querySelector('[data-code="ShiftRight"]');
      let capsLock = document.querySelector('[data-code="CapsLock"]');
      if (
        (event.target.hasAttribute("data-code") &&
          keyButtonText.includes(event.target.dataset.code)) ||
        (event.target.parentNode.hasAttribute("data-code") &&
          keyButtonText.includes(event.target.parentNode.dataset.code))
      ) {
        if (
          !capsLock.classList.contains("key-active") &&
          !shiftLeft.classList.contains("key-active") &&
          !shiftRight.classList.contains("key-active")
        ) {
          if (event.target.className === "shift-up") {
            text = `${event.target.nextSibling.textContent}`;
            elem.value = `${
              elem.value
            }${event.target.nextSibling.textContent.toLocaleLowerCase()}`;
          } else {
            text = `${event.target.lastChild.textContent}`;
            elem.value = `${
              elem.value
            }${event.target.lastChild.textContent.toLocaleLowerCase()}`;
          }
        } else if (capsLock.classList.contains("key-active")) {
          if (event.target.className === "shift-up") {
            text = `${event.target.nextSibling.textContent}`;
            elem.value = `${
              elem.value
            }${event.target.nextSibling.textContent.toLocaleUpperCase()}`;
          } else {
            text = `${event.target.lastChild.textContent}`;
            elem.value = `${
              elem.value
            }${event.target.lastChild.textContent.toLocaleUpperCase()}`;
          }
        } else if (
          shiftLeft.classList.contains("key-active") ||
          shiftRight.classList.contains("key-active")
        ) {
          if (event.target.className === "shift-down") {
            text = `${event.target.previousSibling.textContent}`;
            elem.value = `${
              elem.value
            }${event.target.previousSibling.textContent.toLocaleUpperCase()}`;
          } else {
            text = `${event.target.lastChild.textContent}`;
            elem.value = `${
              elem.value
            }${event.target.firstChild.textContent.toLocaleUpperCase()}`;
          }
        }
        elem.append(text);
      } else if (
        event.target.hasAttribute("data-code") &&
        event.target.dataset.code === "Backspace"
      ) {
        if (elem.selectionStart !== elem.value.length) {
          cursorPlace = elem.value.indexOf(elem.value[elem.selectionStart]);
          elem.lastChild.remove(elem.value[elem.selectionStart - 1]);
          elem.value = `${elem.value.replace(
            elem.value[elem.selectionStart - 1],
            ""
          )}`;
          elem.selectionStart = elem.selectionEnd = cursorPlace - 1;
        } else {
          elem.lastChild.remove(value.slice(-1));
          elem.value = `${elem.value.substring(0, elem.value.length - 1)}`;
        }
      } else if (
        event.target.hasAttribute("data-code") &&
        event.target.dataset.code === "Delete"
      ) {
        if (elem.selectionStart !== elem.value.length) {
          cursorPlace = elem.value.indexOf(elem.value[elem.selectionStart]);
          elem.lastChild.remove(elem.value[elem.selectionStart]);
          elem.value = `${elem.value.replace(
            elem.value[elem.selectionStart],
            ""
          )}`;
          elem.selectionStart = elem.selectionStart;
          elem.selectionStart = elem.selectionEnd = cursorPlace;
        }
      }
      elem.focus();
    });
    document.addEventListener("keyup", function () {
      elem.append(elem.value.slice(-1));
    });
  };
});
