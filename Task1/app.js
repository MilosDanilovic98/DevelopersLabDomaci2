var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var items = itemList.getElementsByTagName("li");
var dropDown = document.getElementById("dropdown-item-list");
var saved = localStorage.getItem("items");
var dropDownOptions;
var dropDownCounter;
var counter = 0;

//saves to local storage
if (saved) {
  itemList.innerHTML = saved;
}
localStorage.setItem("items", itemList.innerHTML);

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event

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
  dropDownCounter = 0;
  dropDown.innerHTML = "";
  for (let item of items) {
    var option = document.createElement("li");
    option.innerHTML = item.children[0].textContent;
    option.id = item.id - item.id - item.id;
    option.addEventListener("click", showSelectedItem);
    dropDown.appendChild(option);
    var itemName = item.children[0].textContent;

    if (itemName.toLowerCase().lastIndexOf(text, 0) === 0 && text != "") {
      option.style.display = "block";
      option.classList.add("dropDownOption");
      dropDownCounter++;
    } else {
      option.style.display = "none";
      option.classList.remove("dropDownOption");
    }
    if (text === "") {
      item.style.display = "block";
    }
  }
  filter.addEventListener("keyup", dropDownOptionsListTrough);
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

function showSelectedItem(e) {
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
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

//list trough dropDown options

function dropDownOptionsListTrough(e) {
  dropDownOptions = document.getElementsByClassName("dropDownOption");
  let enterPressed = false;
  if (counter > dropDownCounter) {
    counter = 0;
  }

  //for some reason this does not work in the for loop so i had to make it this way.Its not the best solution
  //but it works
  switch (e.key) {
    case "Enter": // IE/Edge specific value
    case "Enter":
      enterPressed = true;
      break;
    case "Down": // IE/Edge specific value
    case "ArrowDown":
      if (counter === dropDownCounter - 1) {
        counter = 0;
      } else {
        counter++;
      }

      break;

    case "Up": // IE/Edge specific value
    case "ArrowUp":
      if (counter === 0) {
        counter = dropDownCounter - 1;
      } else {
        counter--;
      }
      break;
  }

  for (let item of dropDownOptions) {
    //I used this loop twice so there is probably a better way to make all this but i dont have time right now
    //and this works even if it is not optimized
    if (enterPressed) {
      var items = itemList.getElementsByTagName("li");
      Array.from(items).forEach(function (ss) {
        if (ss.id != dropDownOptions[counter].id * -1) {
          // item.style.display = "block";
          ss.style.display = "none";
        } else {
          // item.style.display = "none";
          ss.style.display = "block";
        }
      });
      filter.value = dropDownOptions[counter].textContent;
      addItemsToDropDown();
      enterPressed = false;
    }
    if (counter === 0) {
      dropDownOptions[counter].classList.add("selected");
    }
    if (item === dropDownOptions[counter]) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  }
}
