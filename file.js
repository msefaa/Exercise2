let itemsDom = document.querySelector("#formitems");
itemsDom.addEventListener("submit", formHandler);
const alertDom = document.querySelector("#alert");
let alertsuccess = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Listeye eklendi!</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
let alert = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Hatali giris yaptiniz!</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
function formHandler(event) {
    event.preventDefault();
    var closebtns = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
        closebtns.parentElement.style.display = "none";
    });
    }
  const items = document.querySelector("#items");
  if (items.value) {
    additems(items.value);
    items.value = "";
    alertDom.innerHTML = alertsuccess;
  } else {
    alertDom.innerHTML = alert;
  }
}
// <li class="list-group-item d-flex justify-content-between align-items-center " id="list">
//   A list item
//   <span class="close">X</span>
// </li>

let userlistdom = document.querySelector("#ulList");
const additems = (items) => {
  let li = document.createElement("li");
  li.innerHTML = `${items} <span class="close">X</span>`;
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userlistdom.append(li);
};
