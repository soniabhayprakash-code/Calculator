
    function appendValue(val) {
      document.getElementById("bar").value += val;
    }

    function clearDisplay() {
      document.getElementById("bar").value = "";
    }

    function calculate() {
      try {
        const result = eval(document.getElementById("bar").value);
        document.getElementById("bar").value = result;
      } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
      }
    }
    