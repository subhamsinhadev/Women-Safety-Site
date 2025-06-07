const districtData = {
    'maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
    'karnataka': ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum'],
    'uttar_pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi'],
    // Add more states and districts here
};

const helplineNumbers = {
    'maharashtra': {
        'Mumbai': '1800-111-1111',
        'Pune': '1800-111-1112',
        'Nagpur': '1800-111-1113',
        'Thane': '1800-111-1114',
        'Nashik': '1800-111-1115'
    },
    'karnataka': {
        'Bangalore': '1800-222-2221',
        'Mysore': '1800-222-2222',
        'Mangalore': '1800-222-2223',
        'Hubli': '1800-222-2224',
        'Belgaum': '1800-222-2225'
    },
    'uttar_pradesh': {
        'Lucknow': '1800-333-3331',
        'Kanpur': '1800-333-3332',
        'Ghaziabad': '1800-333-3333',
        'Agra': '1800-333-3334',
        'Varanasi': '1800-333-3335'
    }
    // Add more helpline numbers here
};

function updateDistricts() {
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const selectedState = stateSelect.value;

    districtSelect.innerHTML = '<option value="" disabled selected>Select your district</option>';

    if (selectedState && districtData[selectedState]) {
        districtData[selectedState].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function updateHelpline() {
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const helplineDiv = document.getElementById('helpline');
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;

    if (selectedState && selectedDistrict && helplineNumbers[selectedState] && helplineNumbers[selectedState][selectedDistrict]) {
        const helplineNumber = helplineNumbers[selectedState][selectedDistrict];
        helplineDiv.innerHTML = `Helpline Number: <a href="tel:${helplineNumber}">${helplineNumber}</a>`;
    } else {
        helplineDiv.innerHTML = `Helpline Number: <a href="#">Not available</a>`;
    }
}
