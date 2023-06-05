export interface IGuest {
  name: string;
  email: string;
  phoneNumber: string;
}

export const defaultGuest: IGuest = {
  name: "",
  email: "",
  phoneNumber: "",
};

