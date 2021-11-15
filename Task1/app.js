var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var items = itemList.getElementsByTagName("li");
var dropDown = document.getElementById("dropdown-item-list");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

function onInput() {
  var opts = document.getElementById("dropdown-item-list").childNodes;

  for (var i = 1; i < opts.length; i++) {
    opts[i].addEventListener("click", showSelectedItem);
    console.log(opts[i]);
  }
}
function showSuggestions(list) {
  let listData;
  Array.from(items).forEach(function (item) {
    suggBox.appendChild(item);
  });
  suggBox.innerHTML = listData;
}

//Add unique id to the list items
function nextId(e) {
  var max = 0;
  for (let item of items) {
    if (parseInt(item.id) > max) {
      max = item.id;
    }
  }
  return parseInt(max) + 1;
}

//add items to dropdown menu
function addItemsToDropDown() {
  for (let item of items) {
    var option = document.createElement("li");
    option.value = item.children[0].textContent;
    option.id = item.id - item.id - item.id;
    dropDown.appendChild(option);
  }
}
//delete options from DropDown
function removeItemsFromDropDown() {
  var options = document.querySelectorAll("#dropdown-item-list option");
  options.forEach((o) => o.remove());
}

// Add item
function addItem(e) {
  e.preventDefault();
  //create option for the drop list
  var option = document.createElement("li");
  // Get input value
  var newItem = document.getElementById("item").value;
  var span = document.createElement("span");
  span.innerHTML = newItem;
  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(span);
  // add unique id to li element
  li.setAttribute("id", nextId(items));

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  //add option do the droplist
  option.value = newItem;
  option.id = li.id - li.id - li.id;
  dropDown.appendChild(option);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
  removeItemsFromDropDown();
  addItemsToDropDown();
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis

  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.children[0].textContent;
    //
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function showSelectedItem(e) {
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    console.log(e.target.id);
    if (item.id != e.target.id) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

addItemsToDropDown();
onInput();
