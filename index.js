document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');
    const bloodList = document.getElementById('bloodList');

    // const donorcontactnumber = document.getElementById('donorcontactnumber');

    donationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const donorName = document.getElementById('donorName').value;
        const donorcontactnumber = document.getElementById('donorcontactnumber').value;

        // const donorcontactnumber = document.getElementById('donorcontactnumber').value;

        const bloodType = document.getElementById('bloodType').value;
        const donoraddress = document.getElementById('donoraddress').value;

        
        


        const listItem = document.createElement('li');
        const listItem1 = document.createElement('li');
        const listItem2 = document.createElement('li');
        const listItem3 = document.createElement('li');
        // listItem.textContent = `Donor: ${donorName},Contactno:${donorcontactnumber},Blood Type: ${bloodType} `;
        listItem.textContent = `Donor: ${donorName} `;
        listItem1.textContent = `Contactno:${donorcontactnumber} `;
        listItem2.textContent = `Blood Type: ${bloodType} `;
        listItem3.textContent = `Address: ${donoraddress} `;
        bloodList.appendChild(listItem);
        bloodList.appendChild(listItem1);
        bloodList.appendChild(listItem2);
        bloodList.appendChild(listItem3);

        // You can add code here to save the donation information to the backend.
    });
});