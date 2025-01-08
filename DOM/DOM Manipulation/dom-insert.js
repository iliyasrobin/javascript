//DOM

//let element = document.createELement("div");

//Insert

//node.append(element) //adds at the end of node(inside)
//node.prepend(element) //adds at the start of node(inside)
//node.before(element) // add before the node (outside)
//node.after(element)  //adds after the node (outside)

//Delete

//node.remove() //removes the node

//example
// for adding first we need to create what we want to append
// let newBtn = document.createElement("button");

//appending in a html

//access
// let div = document.querySelector("div");
//append
// div.append(newBtn);
//prepend
// div.prepend(newBtn);
//before
// div.before(newBtn);
//after
// div.after(newBtn);

//delete

//access
// let para = document.querySelector("p");
//delete
// para.remove();

//HomeWork

//appendChild

//js code

// const fragment = document.createDocumentFragment();
// const li = fragment
//   .appendChild(document.createElement("section"))
//   .appendChild(document.createElement("ul"))
//   .appendChild(document.createElement("li"));
// li.textContent = "hello world";

// document.body.appendChild(fragment);

//html output

/* <section>
  <ul>
    <li>hello world</li>
  </ul>
</section>

 */

//removeChild

//html
/* <div id="parent">
  <div id="child"></div>
</div> */

//JS

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// const throwawayNode = parent.removeChild(child);
