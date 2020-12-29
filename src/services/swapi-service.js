export default class SwapiService {
  _apiBase = "https://swapi.dev/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const body = await this.getResource(`/people/`);
    return body.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const newPerson = await this.getResource(`/people/${id}/`);
    return this._transformPerson(newPerson);
  };

  getAllPlanets = async () => {
    const body = await this.getResource(`/planets/`);
    return body.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const newPlanet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(newPlanet);
  };

  getAllStarships = async () => {
    const body = await this.getResource(`/starships/`);
    return body.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const newStarship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(newStarship);
  };

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  _transformStarship = (starShip) => {
    return {
      id: this._extractId(starShip),
      name: starShip.name,
      model: starShip.model,
      manufacturer: starShip.manufacturer,
      costInCredits: starShip.costInCredits,
      length: starShip.length,
      crew: starShip.crew,
      passengers: starShip.passengers,
      cargoCapacity: starShip.cargoCapacity,
    };
  };
}
