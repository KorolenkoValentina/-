document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('about').style.display = 'block';
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            sections.forEach(section => {
                section.style.display = 'none';
            });

            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).style.display = 'block';

            event.preventDefault();
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const guestIcon = document.querySelector('.guest-icon');
    const registrationForm = document.querySelector('#registration-form');
    const bankCardLink = document.querySelector('#bank-card-link');
    const bankCardForm = document.querySelector('#bank-card-form');
    guestIcon.addEventListener('click', () => {
        registrationForm.style.display = "block";
    });
    bankCardLink.addEventListener('click', () => {
        bankCardForm.style.display = "block";
    });
});

const data = {
    week: {
        visitors: "500",
        registrations: "150",
        sales: "50",
        returns: "10"
    },

    month: {
        visitors: "3500",
        registrations: "1500",
        sales: "510",
        returns: "120"
    },

    year: {
        visitors: "40500",
        registrations: "10050",
        sales: "5000",
        returns: "1000"
    }
}

function updateData(period) {
    document.getElementById("visitors").textContent = data[period].visitors;
    document.getElementById("registrations").textContent = data[period].registrations;
    document.getElementById("sales").textContent = data[period].sales;
    document.getElementById("returns").textContent = data[period].returns;
}