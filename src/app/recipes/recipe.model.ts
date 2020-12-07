export class Recipe {
  public id: Number;
  public name: String;
  public description: String;
  public imageURL: String;

  constructor(id: Number, name: String, description: String, imageURL: String) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
  }
}
