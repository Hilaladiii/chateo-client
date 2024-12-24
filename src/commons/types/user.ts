interface IUserToken {
  sub: string;
  username: string;
  email: string;
}

interface IUser {
  id: string;
  username: string;
  email: string;
  image?: string;
  bio: string;
}
