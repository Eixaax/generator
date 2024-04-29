document.addEventListener("DOMContentLoaded", function(event) {
    fetchRecom();
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    }); 

document.addEventListener("DOMContentLoaded", function(event) {
        
        const linkDashboard = document.querySelector('.nav_link:nth-child(1)'); 
        const linkProfile= document.querySelector('.nav_link:nth-child(2)'); 

        const dashboardDiv = document.getElementById('response'); 
        const profileDiv = document.getElementById('profile');

        linkDashboard.addEventListener('click', () => {
            dashboardDiv.style.display = 'flex';
            profileDiv.style.display = 'none';      
        });

        linkProfile.addEventListener('click', () => {
            dashboardDiv.style.display = 'none';
            profileDiv.style.display = 'flex';      
        });
})

function fetchRecom(){
    const prob = document.getElementById('prblm').value
    const asso = document.getElementById('assoc').value

    formData = {
                prblm:prob,
                assoc:asso
    }
    console.log(formData)

    fetch('/fetch-Recom/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const recom = data.recom;
        const recomCont = document.getElementById('recommendation');
        recomCont.innerHTML = recom;
    });
}