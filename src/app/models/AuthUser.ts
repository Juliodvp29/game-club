export class AuthUser {
  public nickname: string | undefined = '';
  public name: string | undefined = '';
  public picture: string | undefined = '';
  public updated_at: string | undefined = '';
  public email: string | undefined = '';
  public email_verified: string | undefined = '';
  public sub: string | undefined = '';

  constructor() {
    this.nickname = '';
    this.name = '';
    this.picture = '';
    this.updated_at = '';
    this.email = '';
    this.email_verified = '';
    this.sub = '';
  }

  public getNickname(): string | undefined {
    return this.nickname;
  }

  public getName(): string | undefined {
    return this.name;
  }

  public getPicture(): string | undefined {
    return this.picture;
  }

}


