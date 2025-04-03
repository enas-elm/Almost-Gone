export class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = this.constructor.name; // Définit le nom de l'erreur dynamiquement
  }
}
