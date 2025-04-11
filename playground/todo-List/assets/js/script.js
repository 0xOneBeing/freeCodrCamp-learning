const input_order = [];
document.getElementById("add-button").addEventListener("click", () => {
  const input = document.getElementById("list-input").value;
  if (input != "") {
    capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
    input_order.push(capitalizedInput);
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.textContent = capitalizedInput;
    list.appendChild(li);
    document.getElementById("list-input").value = "";
  }
});
