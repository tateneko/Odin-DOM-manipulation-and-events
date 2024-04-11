const list = document.querySelector("ul")
const input = document.querySelector("#item")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {

    let inputItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const aSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.appendChild(aSpan);
    listItem.appendChild(deleteBtn);

    aSpan.textContent = inputItem;
    deleteBtn.textContent = "Delete";
    
    list.appendChild(listItem);

    deleteBtn.addEventListener("click", () => {

        listItem.remove()
    
      });
    
      input.focus();

  });