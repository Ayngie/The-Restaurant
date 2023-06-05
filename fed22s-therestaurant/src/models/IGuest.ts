export interface IGuest {
  _id?: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export const defaultGuest: IGuest = {
  name: "",
  email: "",
  phoneNumber: "",
};
