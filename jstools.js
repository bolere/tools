function makeUID() {
  if(typeof makeUID.uid == "undefined") { makeUID.uid = 0 }
  makeUID.uid++
  return (makeUID.uid)
}

function addClass(e,c) {
  gqs(e).classList.add(c)
}

function remClass(e,c) {
  gqs(e).classList.remove(c)
}

function gqs(id) {
  return document.querySelector(id)
}   
                
function qs(id) {
  return document.querySelector(id)
}  

function disable(e) {
    gqs(e).disabled = true            
}

function enable(e) {
    gqs(e).disabled = false
}

function hide(e) {
    addClass(e,"is-hidden")
}

function unhide(e) {
    remClass(e,"is-hidden")
}
     
