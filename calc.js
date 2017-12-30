function btnClick(pString) {
  var fldInput = document.getElementById("fld_input");
  fldInput.value += pString;
}


function btnCE() {
  var fldInput = document.getElementById("fld_input");
  fldInput.value = '';
}

function btnEquals() {
  var fldInput = document.getElementById("fld_input");
  var valInput = fldInput.value;
  var newInput = '';
    try {
    newInput = eval(valInput);
  }
    catch(e) {
      newInput = "Error!"
  }
  fldInput.value = newInput;

}
