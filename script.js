getData = () => {
  const url = "https://randomuser.me/api?results=10&gender=female";

  fetch(url)
    .then((response) => {
      let data = response.json().then((data) => {
        console.log({ data });
        let userData = data.results.map((data) => {
          return `<div style="align-items:center; justify-content:center;">
             <span> Name: ${data.name.first}</span>
               <span>Email:${data.email}</span>
                <span>Phone: ${data.cell}</span>
                 <span>Age: ${data.dob.age} Years </span>
                  <span>gender: ${data.gender}</span>
                   <span>Location: ${data.location.city}</span>
              <span><img src="${data.picture.medium}" /></span></div>  `;
        });
        document.getElementById("data").innerHTML = userData;
      });
      console.log(data);
    })
    .catch((reject) => {
      return console.log(reject);
    });
};
