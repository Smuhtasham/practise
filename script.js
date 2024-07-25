
   
getData = () => {
  const url = "https://randomuser.me/api";

  fetch(url)
    .then((response) => {
      let data = response.json().then((data) => {
        console.log({ data });
        const name = data.results[0].name.first;
        const image = data.results[0].picture.medium;
        console.log({ name, image });

        const profileDiv = document.getElementById('data');
      profileDiv.innerHTML = `
        <h1>${name}</h1>
        <img src="${image}" alt="Profile Picture of ${name}">
      `;


      });
    })
    .catch((reject) => {
      return console.log(reject);
    });
};
