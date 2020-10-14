const alertsSection = document.querySelector(".alerts-section");

const alerts = {
    alertDanger(message){
        return `<div class="alert alert-danger" role="alert">${message}</div>`
    }
}

export const renderAlert = (alertType, message) => alertsSection.innerHTML += alerts[alertType](message)