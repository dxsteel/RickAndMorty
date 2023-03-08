export default class ApiService {

  _apiBase = 'https://rickandmortyapi.com/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
  
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + 
      `, received ${res.status}`)
    }
    return await res.json();
  }

  getAllPeople() {
    return this.getResource(`/character/`)
  }

  getPerson(id) {
    return this.getResource(`/character/${id}/`)
  }
}

// const people = new ApiService()

// people.getAllPeople().then((body) => {
//   console.log(body)
// })