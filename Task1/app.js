var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var items = itemList.getElementsByTagName("li");
var dropDown = document.getElementById("dropdown-item-list");
var saved = localStorage.getItem("items");

if (saved) {
  itemList.innerHTML = saved;
}
localStorage.setItem("items", itemList.innerHTML);

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
// filter.addEventListener("keyup", filterItems);
filter.addEventListener("keyup", addItemsToDropDown);

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
  let text = filter.value.toLowerCase();
  dropDown.innerHTML = "";
  for (let item of items) {
    var option = document.createElement("li");
    option.innerHTML = item.children[0].textContent;
    option.id = item.id - item.id - item.id;
    option.addEventListener("click", showSelectedItem);
    dropDown.appendChild(option);
    var itemName = item.children[0].textContent;
    //
    if (itemName.toLowerCase().lastIndexOf(text, 0) === 0 && text != "") {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
    if (text === "") {
      item.style.display = "block";
    }
  }
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
  addItemsToDropDown();
  localStorage.setItem("items", itemList.innerHTML);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

  addItemsToDropDown();
  localStorage.setItem("items", itemList.innerHTML);
}

// // Filter Items
// function filterItems(e) {
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis

//   // Convert to an array
//   Array.from(items).forEach(function (item) {
//     var itemName = item.children[0].textContent;
//     //haystack.lastIndexOf(needle, 0) === 0
//     // itemName.toLowerCase().indexOf(text) != -1
//     if (itemName.toLowerCase().lastIndexOf(text, 0) === 0) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }

function showSelectedItem(e) {
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    console.log(e.target.id * -1);
    if (item.id != e.target.id * -1) {
      // item.style.display = "block";
      item.style.display = "none";
    } else {
      // item.style.display = "none";
      item.style.display = "block";
    }
  });
  filter.value = e.target.textContent;
  addItemsToDropDown();
}

function blaa(e) {
  switch (e.key) {
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      plusSlides(-1);
      break;

    case "Right": // IE/Edge specific value
    case "ArrowRight":
      plusSlides(1);
      break;
  }
}
