const butn = document.getElementById("btn")
const reset = document.getElementById("rst")
const input = document.getElementById("input-el")
const list= document.getElementById("list-el")
const saveLead = document.getElementById("lead-el")
let myLeads=[]
const localLeads = JSON.parse(localStorage.getItem("myLeads"))
saveLead.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    tabs[0].url
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    })
 
render(myLeads)

})
function render(lead){
let listItem = ""
for(let i=0; i<lead.length; i++){

listItem += `
            <li>
                <a target='_blank' href='${lead[i]}'>
                    ${lead[i]}
                </a>
            </li>
       `}
list.innerHTML = listItem
}

if(localLeads){
    myLeads = localLeads
    render(myLeads)
}
reset.addEventListener("dblclick",function(){
localStorage.clear()
myLeads = []
render(myLeads)
})

butn.addEventListener("click", function(){
	 myLeads.push(input.value)
    input.value = null
   
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
	 render(myLeads)
	 
})



// falsy values
// false
// 0
// ""
// null
// undefined
// NaN

