const container = document.querySelector("#container");

const redP = document.createElement("p");
redP.setAttribute("style", "color: red");
redP.textContent = "Hey I'm red!";
container.appendChild(redP);

const blueH3 = document.createElement("h3");
blueH3.setAttribute("style", "color: blue");
blueH3.textContent = "I'm a blue H3!";
container.appendChild(blueH3);

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "background-color: pink; border: 1px solid black; margin-bottom: 24px");

pinkDivH1 = document.createElement("h1");
pinkDivH1.textContent = "I'm in a div";

pinkDivP = document.createElement("p")
pinkDivP.textContent = "ME TOO!"

pinkDiv.append(pinkDivH1, pinkDivP);

container.appendChild(pinkDiv);

const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
    console.log(e);
  });

  const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});