fetch('./data.json')
    .then((response) => {
        return response.json();
    })
    .then((jobs) =>{
        console.log(jobs);
    })