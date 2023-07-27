function removeButton() {
    fetch('/auth/protected')
        .then(response => {
            // If the response status is 200 (OK), the user is authenticated
            if (response.ok) {
                const loginLink = document.getElementById('loginLink');
                loginLink.parentNode.removeChild(loginLink);
            }
        })
        .catch(error => {
            console.error('Error checking authentication status:', error);
        })
    }


function showUser() {
    fetch('/auth/protected')
        .then(response => {
            if(response.ok){
                const profile = document.createElement('h1'); 
                profile.textContent = 'Welcome!';
                const parentElement = document.querySelector('.title');
                parentElement.appendChild(profile);
            }
        })
        .catch(error => {
            console.error("Can't display button", error);
        })
    }

removeButton();
showUser();