const alertBanner = document.getElementById("alert");

// create the HTMl for the banner
alertBanner.innerHTML = 
    <div>
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>


alertBanner.addEventListener('click' , e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alert.style.display = "none"
    }
})

// Alert Notifications 

const bellNotification = document.getElementsByClassName("bell-icon")
const 
