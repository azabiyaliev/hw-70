export interface IContactForm {
  name: string;
  phone: string;
  email: string;
  photoUrl: string;
}

export interface IContact {
  id: string;
  name: string;
  phone: string;
  email: string;
  photoUrl: string;
}

export interface IContactAPI {
  [id: string]: IContact;
}

