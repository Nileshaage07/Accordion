let acc = document.getElementsByClassName("accordaion");

for(let i = 0; i < acc.length; i++) {
    console.log(acc[i]);
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active")

        
        let panel = this.nextElementSibling;
        console.log(panel.classList)
        if(panel.style.display == "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block"
        }
        animation(panel);
    })
    
}
// addign animation  when clicke the section buttons (show shooth)
function animation(panel) {

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } 

    else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}