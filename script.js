
   
getData = () => {
  const url = "https://randomuser.me/api";

  fetch(url)
    .then((response) => {
      let data = response.json().then((data) => {
        console.log({ data });
        const name = data.results[0].name.first;
        const email = data.results[0].email;
        const cell = data.results[0].cell;
        const dob = data.results[0].dob.age;
        const gender = data.results[0].gender;
        const location = data.results[0].location.city;
        const img = data.results[0].picture.medium;

        
        // console.log({ name, img });

    document.getElementById('name').innerHTML=`Name: ${name}`;
    document.getElementById('email').innerHTML=`Email:${email}`;
    document.getElementById('cell').innerHTML=`Phone: ${cell}`;
    document.getElementById('dob').innerHTML=`Age: ${dob} Years`;
    document.getElementById('gender').innerHTML=`gender: ${gender}`;
    document.getElementById('location').innerHTML=`Location: ${location}`;
    document.getElementById('img').innerHTML=`<img src="${img}"/>`;


      });
    })
    .catch((reject) => {
      return console.log(reject);
    });
};
