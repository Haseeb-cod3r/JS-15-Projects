
// ======== select the elements =====================
const notesContainer = document.querySelector(".sec2");
const createBtn = document.querySelector("button");
let notes = document.querySelectorAll('.inputBox')


// ====== load notes from local storage =============
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes()


// ======= update the local storage ===================
function update () {

  // ======== update textarea innerhtml so it can save in local storage ===========
  const textareas = notesContainer.querySelectorAll("textarea");
  textareas.forEach((ta) => {
    ta.innerHTML = ta.value;  
  });

// ========= saving the the whole innerhtml of notes container ==================
  localStorage.setItem("notes", notesContainer.innerHTML);
}
update()




// ========= create notes and display ==================
createBtn.addEventListener("click", () => {

  // ========= create elements ==================
  const div = document.createElement("div");
  const label = document.createElement("label");
  let inputBox = document.createElement("textarea");
  const img = document.createElement("img");

  // ========= provide attributes ==================
  div.classList.add("task");
  inputBox.setAttribute("class", "inputBox");
  inputBox.setAttribute("name", "task");
  inputBox.setAttribute("placeholder", "write your task/notes here");
  img.setAttribute("src", "image/dustbin (2).png");
  img.setAttribute("id", "dustbin");
  
  // ========= display on screen ==================
  label.append("Note");
  div.append(label, inputBox, img);
  notesContainer.append(div);

  // ========= update the local storge after creation of new note =================
  update()
});


// ========= remove note ==================
notesContainer.addEventListener('click',(e)=>{
  if(e.target.tagName === 'IMG'){
    notesContainer.removeChild(e.target.parentElement);
    update()
  }

  })
  
  // ========= update the local storage after every keyup in textarea =============
notesContainer.addEventListener("keyup",(e)=>{
 if (e.target.tagName === "TEXTAREA") {
    update();  
  }
})

   

