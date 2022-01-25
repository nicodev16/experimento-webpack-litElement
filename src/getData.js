
export default async function getData() {

    return fetch("https://randomuser.me/api/?page=3&results=10&seed=abc")
      .then((resp) => resp.json())
      .then((data) => {
          this.personajes = data.results;
          console.log(this.personajes);
        });
};

