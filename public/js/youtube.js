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
        });
    }

removeButton();

/* function showUser() {
    fetch('auth/protected')
        if(response.ok => {
            const 
        })
} */