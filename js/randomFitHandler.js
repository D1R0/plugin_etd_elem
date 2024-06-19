
const randomFit = {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*():=+;<=>?@",
  
    interval: null,
  
    init: function () {
      elem = jQuery(".ETD_RandomFit h2");
      elem.attr("data-value", elem.text());
      elem.mouseenter(function (event) {
        randomFit.load(event);
      });
    },
    load: function (event = null) {
      let iteration = 0;
      let target;
  
      if (event == null) {
        target = jQuery(".ETD_RandomFit h2").eq(0);
      } else {
        target = jQuery(event.target);
      }
  
      clearInterval(randomFit.interval);
      randomFit.interval = setInterval(() => {
        let dataValue = target.data("value");
        if (!dataValue || typeof dataValue !== "string") {
          clearInterval(randomFit.interval);
          return;
        }
  
        target.text(function (index, text) {
          return text
            .split("")
            .map((letter, idx) => {
              if (idx < iteration) {
                return dataValue[idx] || "";
              }
              return randomFit.letters[
                Math.floor(Math.random() * randomFit.letters.length)
              ];
            })
            .join("");
        });
  
        if (iteration >= dataValue.length) {
          clearInterval(randomFit.interval);
        }
  
        iteration += 1 / 3;
      },15);
    },
  };
  
  randomFit.init();