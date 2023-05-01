export interface IUser {
  id: number;
  name: string;
  email: string;
  gender: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
}
