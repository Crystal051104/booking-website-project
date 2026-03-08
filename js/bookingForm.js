document.addEventListener('DOMContentLoaded',function() {

    const destinationPrices = {
        "1": 1240, // Istanbul
        "2": 2570, // Hong Kong
        "3": 3260, // Lisbon
    };

    const addOnPrices = {
        "1": 150,  // Car Rentals
        "2": 225,  // Guided Tours
        "3": 275,  // Hotel Bookings
    };

    const adultFeePrice = 30
    const childFeePrice = 15

    // variables 
    const packageSelect = document.getElementById("package");
    const adultInput = document.getElementById("qty_adults");
    const childInput = document.getElementById("qty_children");
    const addOnCheckboxes = document.querySelectorAll("input[name='pick_add_on']");
    const itemPriceEl = document.getElementById("item-price");
    const totalTravelersEl = document.getElementById("total-travelers");
    const addOnPriceEl = document.getElementById("add-on-price");
    const subtotalEl = document.getElementById("subtotal");
    const taxEl = document.getElementById("tax");
    const totalEl = document.getElementById("total");

    function updateTotals() {
        const selectedDestination = packageSelect.value;
        const packagePrice = destinationPrices[selectedDestination] || 0;

        const adults = parseInt(adultInput.value) || 0;
        const children = parseInt(childInput.value) || 0;
        const adultFee = adults > 1 ? (adults - 1) * adultFeePrice : 0;
        const childFee = children > 2 ? (children - 2) * childFeePrice : 0;
        const totalTravelers = adults + children;

        let addOnPrice = 0;
        addOnCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                addOnPrice += addOnPrices[checkbox.value];
            }
        });

        const subtotal = packagePrice + addOnPrice + adultFee + childFee;
        const tax = subtotal * 0.1; // 10% tax
        const total = subtotal + tax;

        itemPriceEl.textContent = packagePrice.toFixed(2);
        totalTravelersEl.textContent = totalTravelers;
        addOnPriceEl.textContent = addOnPrice.toFixed(2);
        subtotalEl.textContent = subtotal.toFixed(2);
        taxEl.textContent = tax.toFixed(2);
        totalEl.textContent = total.toFixed(2);
    }

    // listen for changes
    packageSelect.addEventListener("change", updateTotals);
    adultInput.addEventListener("input", updateTotals);
    childInput.addEventListener("input", updateTotals);
    addOnCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateTotals);
    });
    updateTotals();
});

const form = document.getElementById('bookingForm');

form.addEventListener('submit',function(e) {
    const numAdults = document.getElementById('qty_adults');
    const numChildren = document.getElementById('qty_children');
    
    const destination = document.getElementById('package');
    
    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const phoneNumber = document.getElementById('phone_number');
    const email = document.getElementById('email');

    const address1 = document.getElementById('address_line1')
    const address2 = document.getElementById('address_line2')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const zipCode = document.getElementById('zip_code')
    const country = document.getElementById('country')
    
    const cardname = document.getElementById('card_name')
    const cardnumber = document.getElementById('card_number')
    const exp = document.getElementById('exp')
    const cvv = document.getElementById('cvv')

    // 

    const adultValue = parseFloat(numAdults.value);
    const childValue = parseFloat(numChildren.value);

    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const phoneNumberValue = phoneNumber.value
    const emailValue = email.value

    const address1Value = address1.value
    const address2Value = address2.value
    const cityValue = city.value
    const stateValue = state.value
    const zipCodeValue = zipCode.value
    const countryValue = country.value

    const cardnameValue = cardname.value
    const cardnumberValue = cardnumber.value
    const expValue = exp.value
    const cvvValue = cvv.value

    //
   
    firstName.classList.remove('error');
    lastName.classList.remove('error');
    numAdults.classList.remove('error');
    numChildren.classList.remove('error');
    destination.classList.remove('error');
    cardname.classList.remove('error');
    cardnumber.classList.remove('error');
    cvv.classList.remove('error');
    address1.classList.remove('error');
    address2.classList.remove('error');
    city.classList.remove('error');
    state.classList.remove('error');
    zipCode.classList.remove('error');
    country.classList.remove('error');

    // Check for blank fields
    if (firstNameValue === "") {
        e.preventDefault();
        firstName.classList.add('error');
        alert('First name is required.');
    } else if (lastNameValue === "") {
        e.preventDefault();
        lastName.classList.add('error');
        alert('Last name is required.');
    } else if (phoneNumberValue === "") {
        e.preventDefault();
        phoneNumber.classList.add('error');
        alert('Phone number is required.');
    } else if (emailValue === "") {
        e.preventDefault();
        email.classList.add('error');
        alert('Email is required.');
    } else if (adultValue === "") {
        e.preventDefault();
        numAdults.classList.add('error');
        alert('Number of adults must be positive.');
    } else if (childValue === "") {
        e.preventDefault();
        numChildren.classList.add('error');
        alert('Number of children must be positive.');
    } else if (cardnameValue === "") {
        e.preventDefault();
        cardname.classList.add('error');
        alert('Name on card is required.');
    } else if (cardnumberValue === "") {
        e.preventDefault();
        cardnumber.classList.add('error');
        alert('Credit card number is required.');
    } else if (cvvValue === "") {
        e.preventDefault();
        cvv.classList.add('error');
        alert('CVV is required.');
    } else if (address1Value === "") {
        e.preventDefault();
        address1.classList.add('error');
        alert('Address line 1 is required.');
    } else if (address2Value === "") {
        e.preventDefault();
        address2.classList.add('error');
        alert('Address line 2 is required.');
    } else if (cityValue === "") {
        e.preventDefault();
        city.classList.add('error');
        alert('City is required.');
    } else if (stateValue === "") {
        e.preventDefault();
        state.classList.add('error');
        alert('State is required.');
    } else if (zipCodeValue === "") {
        e.preventDefault();
        zipCode.classList.add('error');
        alert('Zip code is required.');
    } else if (countryValue === "") {
        e.preventDefault();
        country.classList.add('error');
        alert('Country is required.');
    };


    // Flight Details
    if (!firstNameValue.match(/^[a-zA-Z]+$/)) {
        e.preventDefault();
        firstName.classList.add('error');
        alert("Your first name can only consist of alphanumeric characters");
    } else if (!lastNameValue.match(/^[a-zA-Z]+$/)) {
        e.preventDefault();
        lastName.classList.add('error');
        alert("Your last name can only consist of alphanumeric characters");
    } else if (adultValue < 1) {
        e.preventDefault();
        numAdults.classList.add('error');
        alert('Please select at least one adult.');
    } else if (childValue < 0) {
        e.preventDefault();
        numChildren.classList.add('error');
        alert('Number of children must be positive.');
    } else if (destination.value === '') {
        e.preventDefault(); 
        destination.classList.add('error')
        alert('Please select a package.');


    // Payment Information
    } else if (!cardnameValue.match(/^[a-zA-Z]+$/)) {
        e.preventDefault(); 
        cardname.classList.add('error')
        alert('Your name on your credit card can only consist of alphanumeric characters.');
    } else if (isNaN(Number(cardnumberValue.replace(/\s+/g, ""))) || cardnumberValue.trim() === "") {
        e.preventDefault(); 
        cardnumber.classList.add('error')
        alert('Your credit card number can only contain numbers.');
    } else if (expValue === "" || !expValue.match(/^[0-9]+$/)) {
        e.preventDefault(); 
        exp.classList.add('error')
        alert('Your credit card expiration date must be in the format MM/YY.');
    } else if (!(!isNaN(Number(cvv)) && cvv.length === 3)) {
        e.preventDefault(); 
        cvv.classList.add('error')
        alert('Your credit card CVV can only contain numbers, must be 3 digits long, and must be positive.');


    //Address Information
    } else if (!address1Value.match(/^[a-zA-Z0-9\s.,\-\/]+$/)) {
        e.preventDefault();
        address1.classList.add('error');
        alert("Address Line 1 can only consist of letters, numbers, spaces, commas, hyphens, and slashes.");
    } else if (!address2Value.match(/^[a-zA-Z0-9\s.,\-\/]+$/)) {
        e.preventDefault();
        address2.classList.add('error');
        alert("Address Line 2 can only consist of letters, numbers, spaces, commas, hyphens, and slashes.");
    } else if (!cityValue.match(/^[a-zA-Z\s]+$/)) {
        e.preventDefault();
        city.classList.add('error');
        alert("City must contain only letters and spaces.");
    } else if (!stateValue.match(/^[a-zA-Z\s]+$/)) {
        e.preventDefault();
        state.classList.add('error');
        alert("State/Province must contain only letters and spaces.");
    } else if (!zipCodeValue.match(/^\d{5}(-\d{4})?$|^[A-Z]\d[A-Z] \d[A-Z]\d$/)) {
        e.preventDefault();
        zipCode.classList.add('error');
        alert("ZIP/Postal Code must be valid (e.g., 12345 or A1B 2C3).");
    } else if (!countryValue.match(/^[a-zA-Z\s]+$/)) {
        e.preventDefault();
        country.classList.add('error');
        alert("Country must contain only letters and spaces.");
    } else {
        alert("Your form has been submitted")
    }
});

// Removing all error classes when resetting the form
form.addEventListener('reset', function(e) {
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach((field) => {
        field.classList.remove('error');
    });
});
