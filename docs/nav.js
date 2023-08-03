fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    // Create a temporary container div
    let tempContainer = document.createElement("div");
    tempContainer.innerHTML = text;

    // Extract the content from the temporary container
    let newContent = tempContainer.parentNode.innerHTML;
    
    // Replace the content of oldelem with newContent
    oldelem.innerHTML = newContent;
    
    console.log(oldelem);
})

