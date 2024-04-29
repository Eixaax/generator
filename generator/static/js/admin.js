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
    
    });

    document.addEventListener("DOMContentLoaded", function(event) {
        
        const linkDashboard = document.querySelector('.nav_link:nth-child(1)'); 
        const linkFilter= document.querySelector('.nav_link:nth-child(2)'); 
        const linkManage = document.querySelector('.nav_link:nth-child(3)'); 
        const linkFiles = document.querySelector('.nav_link:nth-child(4)');
        const linkSettings = document.querySelector('.nav_link:nth-child(5)');
        const dashboardDiv = document.querySelector('.height-100-bg-light'); 
        const manageDiv = document.querySelector('.manage'); 
        const filterDiv = document.querySelector('.filter'); 
        const filesDiv = document.querySelector('.files');
        const settingsDiv = document.querySelector('.settings');  

    
        linkDashboard.addEventListener('click', () => {
            manageDiv.style.display = 'none';
            filterDiv.style.display = 'none';
            filesDiv.style.display = 'none';
            settingsDiv.style.display = 'none';
            dashboardDiv.style.display = 'block';
            
        });
    
        linkManage.addEventListener('click', () => {
            dashboardDiv.style.display = 'none';
            filterDiv.style.display = 'none';
            filesDiv.style.display = 'none';
            settingsDiv.style.display = 'none';
            manageDiv.style.display = 'block';
        });

        linkFilter.addEventListener('click', () => {
            dashboardDiv.style.display = 'none';
            manageDiv.style.display = 'none';
            filesDiv.style.display = 'none';
            settingsDiv.style.display = 'none';
            filterDiv.style.display = 'block';
            fetchData();
        });

        linkFiles.addEventListener('click', () => {
            dashboardDiv.style.display = 'none';
            manageDiv.style.display = 'none';
            filterDiv.style.display = 'none';
            settingsDiv.style.display = 'none';
            filesDiv.style.display = 'block';
        });

        linkSettings.addEventListener('click', () => {
            dashboardDiv.style.display = 'none';
            manageDiv.style.display = 'none';
            filterDiv.style.display = 'none';
            filesDiv.style.display = 'none';
            settingsDiv.style.display = 'block';
            fetchtbl()
        });
    });

        var modal = document.getElementById('modal1');
        var openModalBtn = document.getElementById('openModalBtn');
        var closebtn = document.getElementById('close');
        
        //opem modal
        openModalBtn.addEventListener('click', function() {
            modal.style.display = 'block';
        });

        closebtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        

function fetchSearched(){
    const input = document.getElementById('search').value;
    const formData = { search: input };

    fetch('/search/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const searchedData = data.folder_names;
        const foldersContainer = document.querySelector('.folder-container');
        foldersContainer.innerHTML = '';
                    
        searchedData.forEach(folder => {
            const fileBox = document.createElement('div');
            fileBox.classList.add('file-box');

            const fileContent = document.createElement('div');
            fileContent.classList.add('file-content');

            const heading = document.createElement('h2');
            heading.textContent = folder.problem;

            const fileCount = document.createElement('p');
            fileCount.textContent = `${folder.count} ${folder.count === 1 ? 'File' : 'Files'}`;

            fileContent.appendChild(heading);
            fileContent.appendChild(fileCount);
            fileBox.appendChild(fileContent);
            
            fileBox.folderProblem = folder.problem;

            fileBox.addEventListener('click', function() {
                replaceContainer(this.folderProblem);
            });

            foldersContainer.appendChild(fileBox);
        });
    })
    .catch(error => {
        console.error('Error fetching searched data:', error);
    });
}
function replaceContainer(problem) {
    console.log('REPLACED!')
    var prob = problem;
    var folderContainer = document.getElementById('folder-container');
    var filesContainer = document.getElementById('files-container');
    var button = document.getElementById('left-button');
    var searchinp = document.getElementById('search');
    searchinp.disabled = true;
    document.getElementById('search-prob').value = prob;
    console.log(prob);

    folderContainer.style.display = 'none';
    filesContainer.style.display = 'grid';
    button.style.display = 'flex';
    searchinp.style.background = 'transparent'
    searchinp.style.border = 'none'

    searchinp.value = '';
    const formData = { problems: prob };


    fetch('/get/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
    },
    body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => {
                const files = data.results;
                console.log(files)
                filesContainer.innerHTML = ""

                files.forEach(file => {
                    const fileBox = document.createElement('div');
                    fileBox.classList.add('file-box');
                    

                    const fileContent = document.createElement('div');
                    fileContent.classList.add('file-content');

                    const heading = document.createElement('h2');
                    heading.textContent = file.full_name;

                    const Problem = document.createElement('p');
                    Problem.textContent = file.problem;
                    Problem.setAttribute('id', 'problems');
                    
                    const docLink = document.createElement('a');
                    docLink.textContent = 'Download';   
                    if (file.document === "/1") {
                        docLink.textContent = 'NO FILE';  
                    } else {
                        docLink.textContent = 'DOWNLOAD'; 
                    }
                    docLink.href = '../'+file.document; 
                    docLink.setAttribute('download', ''); 

                    docLink.addEventListener('click', (event) => {
                        event.stopPropagation(); 
                    });
                    
                    fileContent.appendChild(heading);
                    fileContent.appendChild(Problem);
                    fileContent.appendChild(docLink); 
                    fileBox.appendChild(fileContent);
                    filesContainer.appendChild(fileBox);

                });
            });
}


function goBack() {
    var folderContainer = document.getElementById('folder-container');
    var filesContainer = document.getElementById('files-container');
    var buttonback = document.getElementById('left-button');
    var searchinp = document.getElementById('search');
    var searchFileinp = document.getElementById('search-file');


    folderContainer.style.display = 'grid';
    buttonback.style.display = 'none';
    filesContainer.style.display = 'none';
    searchFileinp.value = '';
    searchinp.style.background = '#F5F9F9'
    searchinp.disabled = false;
    searchinp.style.border = '1px solid black'
}

function fetchSearchedFile(){
    const input = document.getElementById('search-file').value;
    const input2 = document.getElementById('search-prob').value;
    const formData = { search: input,
                        search2: input2 };
    console.log(formData)

    fetch('/search-file/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const searchedData = data.results;
        const filesContainer = document.querySelector('.files-container');
        filesContainer.innerHTML = '';
                        
        searchedData.forEach(names => {
            const fileBox = document.createElement('div');
            fileBox.classList.add('file-box');

            const fileContent = document.createElement('div');
            fileContent.classList.add('file-content');

            const heading = document.createElement('h2');
            heading.textContent = names.full_name;

            const Problem = document.createElement('p');
            Problem.textContent = names.problem;
            Problem.setAttribute('id', 'problems');
            
            console.log(names.document)

           
            const docLink = document.createElement('a');
            docLink.textContent = 'Download'; 

            if (names.document === "/1") {
                docLink.textContent = 'NO FILE';  
            } else {
                docLink.textContent = 'DOWNLOAD'; 
            }

            docLink.href = '../'+names.document; 
            docLink.setAttribute('download', ''); 

            docLink.addEventListener('click', (event) => {
                event.stopPropagation(); 
            });
        
            fileContent.appendChild(heading);
            fileContent.appendChild(Problem);
            fileContent.appendChild(docLink); 
            fileBox.appendChild(fileContent);
            filesContainer.appendChild(fileBox);
            
    });
}

)}

function fetchData() {
    var filterBy = document.getElementById('filters').value;
    var getGender = document.getElementById('filt-gender');
    var getType = document.getElementById('filt-type');
    var getRange = document.getElementById('filt-range');
    var getMarital = document.getElementById('filt-marital');
    var getStatus = document.getElementById('filt-status');
    var getEduc = document.getElementById('filt-educ');

        if (filterBy === 'All') {
            getGender.style.display = 'none';
            getType.style.display = 'none';
            getRange.style.display = 'none';
            getMarital.style.display = 'none';
            getStatus.style.display = 'none';
            getEduc.style.display = 'none';

            var input1 = filterBy;
            var input2 = 'All';
        }
        else if (filterBy === 'Gender') {
            getGender.style.display = 'flex';
            getType.style.display = 'none';
            getRange.style.display = 'none';
            getMarital.style.display = 'none';
            getStatus.style.display = 'none';
            getEduc.style.display = 'none';

            var input1 = filterBy;
            var input2 = getGender.value;

        }
        else if (filterBy === 'Type') {
            getGender.style.display = 'none';
            getType.style.display = 'flex';
            getRange.style.display = 'none';
            getMarital.style.display = 'none';
            getStatus.style.display = 'none';
            getEduc.style.display = 'none';
            
            var input1 = filterBy;
            var input2 = getType.value;
        }
        else if (filterBy === 'Age Range') {
            getGender.style.display = 'none';
            getType.style.display = 'none';
            getRange.style.display = 'flex';
            getMarital.style.display = 'none';
            getStatus.style.display = 'none';
            getEduc.style.display = 'none';  
            
            var input1 = filterBy;
            var input2 = getRange.value;
        }
        else if (filterBy === 'Social Status') {
            getGender.style.display = 'none';
            getType.style.display = 'none';
            getRange.style.display = 'none';
            getMarital.style.display = 'none';
            getStatus.style.display = 'flex';
            getEduc.style.display = 'none';  
            
            var input1 = filterBy;
            var input2 = getStatus.value;
        }
        else if (filterBy === 'Marital Status') {
            getGender.style.display = 'none';
            getType.style.display = 'none';
            getRange.style.display = 'none';
            getMarital.style.display = 'flex';
            getStatus.style.display = 'none';
            getEduc.style.display = 'none';   
            
            var input1 = filterBy;
            var input2 = getMarital.value;
        }
        else if (filterBy === 'Educational Attainment') {
            getGender.style.display = 'noe';
            getType.style.display = 'none';
            getRange.style.display = 'none';
            getMarital.style.display = 'none';
            getStatus.style.display = 'none';
            getEduc.style.display = 'flex';   
            
            var input1 = filterBy;
            var input2 = getEduc.value;
        }
        else {
            var input1 = filterBy;
            var input2 = 'All';
        }

        const filter1 = input1
        const filter2 = input2

        console.log(filter1)
        console.log(filter2)
        
        const formData = {
                    filter1: filter1,
                    filter2: filter2
                };
        fetchFilter(formData)
}



