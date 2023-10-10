let btn = document.querySelector("#btn");
let inputText = document.getElementById("textbox").value;
let count = 0;

function myFunction() {
  var x = document.getElementById("textbox").value;
  
  if (x !== "") {
    count += 1;
    document.getElementById("te").innerHTML = `You have ${count} tasks to complete`;
    
    var newBox = document.createElement('div');
    newBox.classList.add('elem');
    newBox.innerHTML = `
      <input id="inputb" type="checkbox" />
      <span id="texting">${x}</span>
      <div class="icn1">
        <i id="test2" class="fa-regular fa-pen-to-square fa-lg" style="color: #e9f1f1"></i>
      </div>
      <div class="icn2">
        <i id="test" class="fa-solid fa-trash" style="color: #ccd4e5"></i>
      </div>
    `;
    
    document.querySelector("#container").appendChild(newBox);
    document.getElementById("textbox").value = '';
    
    // Now, attach the event listener to the newly created delete button
    let deleteButton = newBox.querySelector(".icn2");
    let editButton = newBox.querySelector(".icn1")
    let radioButton = newBox.querySelector("#inputb");
    
    
    // if(radioButton.checked){
    //     console.log("sdfsdfj")
    //     newBox.style.display = "none";
    // }

    
    radioButton.addEventListener('change', function () {
    if (this.checked) {

    var area = newBox.querySelector("#texting");
    // area.style.color = "grey";
    count -= 1;
    document.getElementById("te").innerHTML = `You have ${count} tasks to complete`;
    area.style.textDecoration = "line-through";

    } else {
      // The radio button has been unchecked
      var area = newBox.querySelector("#texting");
    // area.style.color = "grey";
    count += 1;
    document.getElementById("te").innerHTML = `You have ${count} tasks to complete`;
    area.style.textDecoration = "none";
      console.log("Radio button unchecked");

    }
  });

    deleteButton.addEventListener('click', () => {
        count -= 1;
        document.getElementById("te").innerHTML = `You have ${count} tasks to complete`;
      newBox.style.display = "none";
    });

    editButton.addEventListener('click', () => {


        var area = document.getElementById("texting").innerHTML;
        document.getElementById("textbox").value = area
        console.log(area)
        count -= 1;
        document.getElementById("te").innerHTML = `You have ${count} tasks to complete`;

        // .innerHTML = area;

        newBox.style.display = "none";
      });
  } 
}

btn.addEventListener('click', myFunction);
