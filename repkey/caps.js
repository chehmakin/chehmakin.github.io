add_output.onclick = function () {
  var input = document.getElementById('input').value;
  var output = "";
  output = input;

  document.getElementById('output').innerHTML = output;
  document.getElementById('output_caps').innerHTML = output;

}
