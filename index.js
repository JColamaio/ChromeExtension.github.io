let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const Ul = document.getElementById("ulEl")
let listItems = ""

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    
    inputEl.value = ""
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





