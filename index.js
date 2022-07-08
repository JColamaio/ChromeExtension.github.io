let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const Ul = document.getElementById("ulEl")
let listItems = ""

localStorage.setItem("myLeads", "www.example.com")

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})
function    renderLeads(){
for(let i = 0 ; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' href= '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'> 
        ${myLeads[i]}
        </a>
    </li>`//template string
    console.log(listItems)





    // another way to do the this is
    //  const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}

ulEl.innerHTML = listItems
}





