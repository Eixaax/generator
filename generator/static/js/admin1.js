function fetchtbl(){
    const getSetVal = document.getElementById('sett-val').value
    const gndrTable = document.getElementById('gndr-table')
    const mrtlTable = document.getElementById('mrtl-table')
    const rngsTable = document.getElementById('rngs-table')
    const dcTable = document.getElementById('dc-table')
    const sclTable = document.getElementById('scl-table')

    if (getSetVal === 'Gender') {
        gndrTable.style.display = 'flex';
        mrtlTable.style.display = 'none';
        rngsTable.style.display = 'none';
        dcTable.style.display = 'none';
        sclTable.style.display = 'none';
    }
    
    else if (getSetVal === 'Marital Status') {
        gndrTable.style.display = 'none';
        mrtlTable.style.display = 'flex';
        rngsTable.style.display = 'none';
        dcTable.style.display = 'none';
        sclTable.style.display = 'none';
    }

    else if (getSetVal === 'Social Status') {
        gndrTable.style.display = 'none';
        mrtlTable.style.display = 'none';
        rngsTable.style.display = 'none';
        dcTable.style.display = 'none';
        sclTable.style.display = 'flex';
    }

    else if (getSetVal === 'Ranges') {
        gndrTable.style.display = 'none';
        mrtlTable.style.display = 'none';
        rngsTable.style.display = 'flex';
        dcTable.style.display = 'none';
        sclTable.style.display = 'none';
    }

    else if (getSetVal === 'Educational Attainment') {
        gndrTable.style.display = 'none';
        mrtlTable.style.display = 'none';
        rngsTable.style.display = 'none';
        dcTable.style.display = 'flex';
        sclTable.style.display = 'none';
    }
}
function addGender() {
    const gndrValue = document.getElementById('addGen').value;
    const formData = { gndr: gndrValue };
 
    fetch('/add-gender/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const genders = JSON.parse(data.getGenders); // Parse the serialized JSON
        const todis = { genders: genders }; 

        fetchGenders(todis);
        
    });
}

function fetchGenders(data) {
    const genders = data.genders;
    console.log(genders);

    const table = document.getElementById('gndr-table');
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = ''; 

        const headerRow = document.createElement('tr');
        const gendersHeader = document.createElement('th');
        gendersHeader.textContent = 'Genders';
        headerRow.appendChild(gendersHeader);
        const settingsHeader = document.createElement('th');
        settingsHeader.textContent = 'Settings';
        headerRow.appendChild(settingsHeader);
        tbody.appendChild(headerRow);

        genders.forEach(gender => {
            const row = document.createElement('tr');
            const genderCell = document.createElement('td');
            genderCell.textContent = gender.fields.gndr_name;
            row.appendChild(genderCell);
            
            const settingsCell = document.createElement('td');
            settingsCell.style.display = 'flex';
            settingsCell.style.flexDirection = 'row';
            settingsCell.style.justifyContent = 'space-evenly';
            settingsCell.innerHTML = `<button onclick="editGender('${gender.pk}')">Edit</button><button style="background-color: #ff4949;" onclick="deleteGender('${gender.pk}')">Delete</button>`;
            row.appendChild(settingsCell);

            tbody.appendChild(row);
        });
}

function editGender(theid){
    const genderId = theid
    const formData = { gndr: genderId };
 
    fetch('/fetch-gender/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const genders = data.gndr_name;
        document.getElementById('addGen').value = genders;
    });
}

function deleteGender(theid){
    const genderId = theid
    console.log(genderId)
    const formData = { gndr: genderId };

    fetch('/del-gender/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const genders = JSON.parse(data.getGenders); // Parse the serialized JSON
        const todis = { genders: genders }; 

        fetchGenders(todis);
    });
}


function addMarital() {
    const mrtlValue = document.getElementById('addMar').value;
    const formData = { mrtl: mrtlValue };
 
    fetch('/add-marital/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const maritals = JSON.parse(data.getMaritals); // Parse the serialized JSON
        const todis = { maritals: maritals }; 

        fetchMaritals(todis);
        
    });
}

function fetchMaritals(data) {
    const maritals = data.maritals;
    console.log(maritals);

    const table = document.getElementById('mrtl-table');
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = ''; 

        const headerRow = document.createElement('tr');
        const gendersHeader = document.createElement('th');
        gendersHeader.textContent = 'Marital Status';
        headerRow.appendChild(gendersHeader);
        const settingsHeader = document.createElement('th');
        settingsHeader.textContent = 'Settings';
        headerRow.appendChild(settingsHeader);
        tbody.appendChild(headerRow);

        maritals.forEach(gender => {
            const row = document.createElement('tr');
            const genderCell = document.createElement('td');
            genderCell.textContent = gender.fields.maritals_name;
            row.appendChild(genderCell);
            
            const settingsCell = document.createElement('td');
            settingsCell.style.display = 'flex';
            settingsCell.style.flexDirection = 'row';
            settingsCell.style.justifyContent = 'space-evenly';
            settingsCell.innerHTML = `<button onclick="editMarital('${gender.pk}')">Edit</button><button style="background-color: #ff4949;" onclick="deleteMarital('${gender.pk}')">Delete</button>`;
            row.appendChild(settingsCell);

            tbody.appendChild(row);
        });
}


function editMarital(theid){
    const maritalId = theid
    const formData = { mrtl: maritalId };
 
    fetch('/fetch-marital/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const martial = data.mrtl_name;
        document.getElementById('addMar').value = martial;
    });
}

function deleteMarital(theid){
    const maritalId = theid
    const formData = { mrtl: maritalId };

    fetch('/del-marital/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const maritals = JSON.parse(data.getMaritals); // Parse the serialized JSON
        const todis = { maritals: maritals }; 
        fetchMaritals(todis);
        
    });
}

function addRanges(){
    const rngValue = document.getElementById('addRange').value;
    const rngDetValue = document.getElementById('addRange1').value;
    const rngDetValue1 = document.getElementById('addRange2').value;

    const formData = { rng: rngValue,
                        rngDet: rngDetValue,
                        rngDet1: rngDetValue1 };
 
    fetch('/add-range/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const ranges = JSON.parse(data.getRanges); // Parse the serialized JSON
        const todis = { ranges: ranges }; 

        fetchRanges(todis);
        
    });
}

function editRanges(theid){
    const rangeID = theid
    const formData = { rngs: rangeID };
 
    fetch('/fetch-ranges/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const ranges = data.range_names;
        const range1 = data.range1s;
        const range2 = data.range2s;
        document.getElementById('addRange').value = ranges;
        document.getElementById('addRange1').value = range1;
        document.getElementById('addRange2').value = range2;
    });
}

function fetchRanges(data) {
    const ranges = data.ranges;
    console.log(ranges);

    const table = document.getElementById('rngs-table');
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = ''; 

        const headerRow = document.createElement('tr');
        const gendersHeader = document.createElement('th');
        gendersHeader.textContent = 'Range Name';
        const gendersHeader1 = document.createElement('th');
        gendersHeader1.textContent = 'Range Details';
        headerRow.appendChild(gendersHeader);
        headerRow.appendChild(gendersHeader1);
        const settingsHeader = document.createElement('th');
        settingsHeader.textContent = 'Settings';
        headerRow.appendChild(settingsHeader);
        tbody.appendChild(headerRow);

        ranges.forEach(gender => {
            const row = document.createElement('tr');
            const genderCell = document.createElement('td');
            genderCell.textContent = gender.fields.ranges_name;
            const genderCell1 = document.createElement('td');
            genderCell1.textContent = gender.fields.ranges_details;
            row.appendChild(genderCell);
            row.appendChild(genderCell1);
            
            const settingsCell = document.createElement('td');
            settingsCell.style.display = 'flex';
            settingsCell.style.flexDirection = 'row';
            settingsCell.style.justifyContent = 'space-evenly';
            settingsCell.innerHTML = `<button onclick="editRanges('${gender.pk}')">Edit</button><button style="background-color: #ff4949;" onclick="deleteRanges('${gender.pk}')">Delete</button>`;
            row.appendChild(settingsCell);

            tbody.appendChild(row);
        });
}



function deleteRanges(theid){
    const rangeId = theid
    const formData = { rng: rangeId };

    fetch('/del-range/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const ranges = JSON.parse(data.getRanges); // Parse the serialized JSON
        const todis = { ranges: ranges }; 
        fetchRanges(todis);
        
    });
}




function addType() {
    const typeValue = document.getElementById('addType').value;
    const formData = { type: typeValue };
 
    fetch('/add-type/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const types = JSON.parse(data.getTypes); // Parse the serialized JSON
        const todis = { types: types }; 

        fetchTypes(todis);
        
    });
}

function fetchTypes(data) {
    const types = data.types;
    console.log(types);

        const table = document.getElementById('typ-table');
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = ''; 

        const headerRow = document.createElement('tr');
        const gendersHeader = document.createElement('th');
        gendersHeader.textContent = 'Types';
        headerRow.appendChild(gendersHeader);
        const settingsHeader = document.createElement('th');
        settingsHeader.textContent = 'Settings';
        headerRow.appendChild(settingsHeader);
        tbody.appendChild(headerRow);

        types.forEach(gender => {
            const row = document.createElement('tr');
            const genderCell = document.createElement('td');
            genderCell.textContent = gender.fields.type_name;
            row.appendChild(genderCell);
            
            const settingsCell = document.createElement('td');
            settingsCell.style.display = 'flex';
            settingsCell.style.flexDirection = 'row';
            settingsCell.style.justifyContent = 'space-evenly';
            settingsCell.innerHTML = `<button onclick="editType('${gender.pk}')">Edit</button><button style="background-color: #ff4949;" onclick="deleteType('${gender.pk}')">Delete</button>`;
            row.appendChild(settingsCell);

            tbody.appendChild(row);
        });
}

function editType(theid){
    const typeId = theid
    console.log(typeId)
}

function deleteType(theid){
    const typeId = theid
    console.log(typeId)
    const formData = { type: typeId };

    fetch('/del-type/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const types = JSON.parse(data.getTypes); // Parse the serialized JSON
        const todis = { types: types }; 

        fetchTypes(todis);
    });
}

function addEduc() {
    const educValue = document.getElementById('addEduc').value;
    const formData = { educ: educValue };
 
    fetch('/add-educ/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const educ = JSON.parse(data.getEduc); // Parse the serialized JSON
        const todis = { educ: educ }; 

        fetchEduc(todis);
        
    });
}

function editEduc(theid){
    const educId = theid
    const formData = { educId: educId };
 
    fetch('/fetch-educ/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const educ = data.educ_name;
        document.getElementById('addEduc').value = educ;
    });
}

function fetchEduc(data) {
    const educ = data.educ;
    console.log(educ);

    const table = document.getElementById('dc-table');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = ''; 

    const headerRow = document.createElement('tr');
    const gendersHeader = document.createElement('th');
    gendersHeader.textContent = 'Educational Attainment';
    headerRow.appendChild(gendersHeader);
    const settingsHeader = document.createElement('th');
    settingsHeader.textContent = 'Settings';
    headerRow.appendChild(settingsHeader);
    tbody.appendChild(headerRow);

    educ.forEach(gender => {
        const row = document.createElement('tr');
        const genderCell = document.createElement('td');
        genderCell.textContent = gender.fields.educ_name;
        row.appendChild(genderCell);
        
        const settingsCell = document.createElement('td');
        settingsCell.style.display = 'flex';
        settingsCell.style.flexDirection = 'row';
        settingsCell.style.justifyContent = 'space-evenly';
        settingsCell.innerHTML = `<button onclick="editEduc('${gender.pk}')">Edit</button><button style="background-color: #ff4949;" onclick="deleteEduc('${gender.pk}')">Delete</button>`;
        row.appendChild(settingsCell);

        tbody.appendChild(row);
    });
}

function editType(theid){
    const typeId = theid
    console.log(typeId)
}

function deleteEduc(theid){
    const educId = theid
    console.log(educId)
    const formData = { educ: educId };

    fetch('/del-educ/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const educ = JSON.parse(data.getEduc); // Parse the serialized JSON
        const todis = { educ: educ }; 

        fetchEduc(todis);
    });
}

function addSocials(){
    const estValue = document.getElementById('addEst').value;
    const addSocValue = document.getElementById('addSocial').value;
    const formData = { est: estValue,
                        soc: addSocValue };
 
    fetch('/add-social/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const socials = JSON.parse(data.getSocials); // Parse the serialized JSON
        const todis = { socials: socials }; 

        fetchSocials(todis);
        
    });
}

function editSocial(theid){
    const socialId = theid
    const formData = { socId: socialId };
 
    fetch('/fetch-social/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const social_name = data.social_name;
        const social_det = data.social_det;
        document.getElementById('addSocial').value = social_name;
        document.getElementById('addEst').value = social_det;
    });
}

function fetchSocials(data) {
    const socials = data.socials;
    console.log(socials);

    const table = document.getElementById('scl-table');
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = ''; 

        const headerRow = document.createElement('tr');
        const gendersHeader = document.createElement('th');
        gendersHeader.textContent = 'Estimated Income';
        const gendersHeader1 = document.createElement('th');
        gendersHeader1.textContent = 'Social Status';
        headerRow.appendChild(gendersHeader);
        headerRow.appendChild(gendersHeader1);
        const settingsHeader = document.createElement('th');
        settingsHeader.textContent = 'Settings';
        headerRow.appendChild(settingsHeader);
        tbody.appendChild(headerRow);

        socials.forEach(gender => {
            const row = document.createElement('tr');
            const genderCell = document.createElement('td');
            genderCell.textContent = gender.fields.est_income_details;
            const genderCell1 = document.createElement('td');
            genderCell1.textContent = gender.fields.est_income_name;
            row.appendChild(genderCell);
            row.appendChild(genderCell1);
            
            const settingsCell = document.createElement('td');
            settingsCell.style.display = 'flex';
            settingsCell.style.flexDirection = 'row';
            settingsCell.style.justifyContent = 'space-evenly';
            settingsCell.innerHTML = `<button onclick="editSocial('${gender.pk}')">Edit</button><button style="background-color: #ff4949;" onclick="deleteSocial('${gender.pk}')">Delete</button>`;
            row.appendChild(settingsCell);

            tbody.appendChild(row);
        });
}

function deleteSocial(theid){
    const socialId = theid
    const formData = { scl: socialId };

    fetch('/del-social/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const socials = JSON.parse(data.getSocials); // Parse the serialized JSON
        const todis = { socials: socials }; 
        fetchSocials(todis);
        
    });
}

function accept(id){
    const requestId = id;
    console.log(requestId)
    formData = { reqID: requestId}

    fetch('/accept-request/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            window.location.reload();
        } else {
            console.error('Error accepting request:', response.status);
        }
    })
}

function decline(id){
    const requestId = id;
    console.log(requestId)
    formData = { reqID: requestId}

    fetch('/decline-request/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            window.location.reload();
        } else {
            console.error('Error accepting request:', response.status);
        }
    })
}


