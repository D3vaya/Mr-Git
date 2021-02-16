export class Administrator {
  private uid: string;
  public name: string;
  public lastName: string;
  public email: string;
  public created_at: Date;
  public roles: {
    subscriber: boolean;
    editor: boolean;
    admin: boolean;
  };
  constructor(uid: string, name, email) {
    this.uid = uid;
    this.created_at = new Date();
    this.email = email;
    this.name = name;
    this.generateRoles();
  }

  getUid(): string {
    return this.uid;
  }

  generateRoles() {
    this.roles = {
      admin: true,
      subscriber: true,
      editor: true,
    };
  }
}
