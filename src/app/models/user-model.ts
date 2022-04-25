export interface UserModel {
  _id?: string,
  username: string,
  email: string,
  token?:string | null,


}

class UserTokenException extends Error{}


export class loggedUser implements UserModel{

  _id?: string;
  username: string;
  email: string;

  private _token: string;
  private createdAt: number;

  constructor(username: string, email: string, token: string| null, id?: string){
    if (!token){
      throw new UserTokenException(`invalid value: "${token}" for token`)
    }
    this.createdAt = Date.now();
    this.username = username;
    this.email = email;
    this._token = token;
    this._id = id;
  }


  get expiration(){
    return this.createdAt + 3600*2*1000 // 2 hours
  }

  private isExpired():boolean{
    return this.expiration > Date.now();
  }

  get token(){
    return this.isExpired() ?  null : this._token;
  }
}
