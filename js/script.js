/* ======================== Typing Animation ======================== */
var typed = new Typed(".typing", {
    strings:["","Software Developer","Web Developer", "Web Designer"],
    typeSpeed:100,
    backSpeed:30,
    loop:true
})
/* ======================== Aside ======================== */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

// Add click event listeners to each navigation link
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        // Remove 'active' class from all navigation links
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
          if (navList[j].querySelector("a").classList.contains("active")) {
            addBackSection(j);
          }
          navList[j].querySelector("a").classList.remove("active");
        }
        // Add 'active' class to the clicked navigation link
        this.classList.add("active");
        // Show the corresponding section
        showSection(this);
        if (window.innerWidth < 1200) {
          asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let h = 0; h < totalSection; h++) {
        allSection[h].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    // Get the target section's ID from the href attribute
    const targetId = element.getAttribute("href").split("#")[1];
    
    // Remove 'active' class from all sections
    for (let k = 0; k < totalSection; k++) {
        allSection[k].classList.remove("active");
    }
    
    // Add 'active' class to the target section
    const targetSection = document.querySelector(`#${targetId}`);
    if (targetSection) {
        targetSection.classList.add("active");
    }
}

function updateNav(targetId) {
    for (let i = 0; i < totalNavList; i++) {
        const navLink = navList[i].querySelector("a");
        navLink.classList.remove("active");
        if (targetId === navLink.getAttribute("href").split("#")[1]) {
            navLink.classList.add("active");
        }
    }
}

// Handling the "Hire Me" button click
document.querySelector(".hire-me").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const sectionIndex = parseInt(this.getAttribute("data-section-index"));
    // Ensure the index is valid
    if (sectionIndex >= 0 && sectionIndex < totalSection) {
        // Get the target section based on index
        const targetSection = allSection[sectionIndex];
        if (targetSection) {
            // Remove back-section class from all sections
            removeBackSection();
            // Add back-section class to all other sections
            addBackSection(sectionIndex);
            // Show the target section
            targetSection.classList.add("active");
            // Update the navigation
            updateNav(targetSection.id);

            // Update URL without hash
            history.pushState(null, null, window.location.pathname);
        }
    }
});

// Handling the navigation toggler button
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
/* =================================== Download CV =================================== */
document.addEventListener("DOMContentLoaded", function() {
  // Download CV button click handler
  document.querySelector(".home .btn").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      
      // Use jsPDF to generate the CV
      generateCV();
  });
});

function generateCV() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Add Title
  doc.setFontSize(22);
  doc.text("Resume", 10, 10);
  
  // Add Name
  doc.setFontSize(18);
  doc.text("Name: Sylwyn Franz Zayas", 10, 30);

  // Add Profession
  doc.setFontSize(16);
  doc.text("Profession: Junior Software Developer", 10, 40);

  // Add Personal Info
  doc.setFontSize(14);
  doc.text("Personal Information:", 10, 50);
  doc.setFontSize(12);
  doc.text("Birthday: August 09, 2000", 10, 60);
  doc.text("Age: 23", 10, 70);
  doc.text("Degree: BSIT", 10, 80);
  doc.text("Website: www.domain.com", 10, 90);
  doc.text("Email: sylwynfranz.zayas@gmail.com", 10, 100);
  doc.text("Phone: +639917731837", 10, 110);
  doc.text("Country: Philippines", 10, 120);
  doc.text("City: Iligan, 9200", 10, 130);
  doc.text("Freelance: Available", 10, 140);
  
  // Add Skills
  doc.setFontSize(14);
  doc.text("Skills:", 10, 160);
  doc.setFontSize(12);
  doc.text("HTML5: 76%", 10, 170);
  doc.text("CSS3: 76%", 10, 180);
  doc.text("JavaScript: 76%", 10, 190);
  doc.text("PHP: 76%", 10, 200);
  doc.text("MySQL: 76%", 10, 210);

  // Add Education
  doc.setFontSize(14);
  doc.text("Education:", 10, 230);
  doc.setFontSize(12);
  doc.text("Baccalaureate Degree (2019 - 2023)", 10, 240);
  doc.text("Details: ", 10, 250);
  
  // Add Experience
  doc.setFontSize(14);
  doc.text("Experience:", 10, 270);
  doc.setFontSize(12);
  doc.text("Baccalaureate Degree (2019 - 2023)", 10, 280);
  doc.text("Details: Lorem ipsum dolor sit amet...", 10, 290);
  
  // Save the PDF
  doc.save('Zayas-Resume.pdf');
}

/* =================================== Send Email =================================== */
const alertMessage = "Email Sent Successfully!";

// Function to call the custom alert
function callAlert(message) {
    customAlert(message, 3000); // Call the custom alert with the message and timeout
}

// Custom alert function
function customAlert(message, timeout = null) {
    const alertDiv = document.createElement('div');
    const alertButton = document.createElement('button'); // Correct element creation
    alertButton.innerText = 'OK';

    // Add styles to the alert box
    alertDiv.classList.add('custom-alert');
    alertDiv.setAttribute('style',
        `
        position: fixed;
        top: 100px;
        left: 50%;
        padding: 20px;
        border-radius: 10px; /* Fix the CSS property */
        box-shadow: 0 10px 5px 0 #00000022;
        display: flex;
        flex-direction: column;
        border: 1px solid #333;
        transform: translateX(-50%);
        background: #f8f8f8; /* Add a background color for better visibility */
        z-index: 1000; /* Ensure the alert is on top of other content */
        `
    );
    alertButton.setAttribute('style',`
        border: 1px solid #333;
        background: white;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer; /* Make it clear it's clickable */
    `);
    alertDiv.innerHTML = `<span style="padding: 10px">${message}</span>`; // Use the correct variable name
    alertDiv.appendChild(alertButton);
    alertButton.addEventListener("click", () => {
        alertDiv.remove();
    });

    // Automatically remove the alert after the specified timeout
    if (timeout != null) {
        setTimeout(() => {
            alertDiv.remove();
        }, Number(timeout));
    }
    document.body.appendChild(alertDiv);
}

// Handle form submission
const emailName = document.getElementById("name"),
      emailFrom = document.getElementById("email"),
      emailSubj = document.getElementById("subject"),
      emailBody = document.getElementById("message"),
      sendEmail = document.querySelector("button.btn");

sendEmail.addEventListener("click", function(e) {
    e.preventDefault();

    let ebody = `
        <b>Name: </b>${emailName.value}
        <br>
        <b>Email: </b>${emailFrom.value}
        <br>
        <p>${emailBody.value}</p>
    `;

    Email.send({
        SecureToken: "7eb6c649-7778-4cea-bfc4-bc4afd94bc71",
        To: 'sylwynfranz.zayas@gmail.com',
        From: 'sylwynfranz.zayas@gmail.com',
        Subject: emailSubj.value,
        Body: ebody
    }).then(() => {
        callAlert(alertMessage);  // Call the custom alert with the success message
    }).catch((error) => {
        callAlert("Failed to send email. Please try again."); // Handle errors
    });
});
