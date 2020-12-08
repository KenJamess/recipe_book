export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imageURL: string;

  constructor(id: number, name: string, description: string, imageURL: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
  }
}
