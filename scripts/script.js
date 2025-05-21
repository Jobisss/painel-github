fetch("https://api.github.com/users/Jobisss")
    .then(response => response.json())
    .then(response => console.dir(response))
    .catch(error => console.log(error))