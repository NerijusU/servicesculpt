export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type ImageMap = {
  imageId: string;
  imageUrl: URL | string;
};

export type ICompany = {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  bio: string;
  offers: IOffer[];
  customers: ICustomer[];
  appointments: IAppointment[];
};
export type INewCompany = {
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  bio: string;
};
export type IUpdateCompany = {
  companyId: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  bio: string;
};
export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
  offers: IOffer[];
  customers: ICustomer[];
  appointments: IAppointment[];
  company: ICompany;
};

export type INewAccount = {
  accountId: string;
  name: string;
  email: string;
  password: string;
};
export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type IOffer = {
  offerId: string;
  title: string;
  subtitle: string;
  description: string;
  duration: number;
  price: number;
  imageMap: ImageMap[];
  userId: string;
};
export type INewOffer = {
  title: string;
  subtitle: string;
  description: string;
  duration: number;
  price: number;
  imageMap: File[];
  userId: string;
};

export type IUpdateOffer = {
  offerId: string;
  title: string;
  subtitle: string;
  description: string;
  duration: number;
  price: number;
  files: File[];
  userId: string;
};

export type ICustomer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type INewCustomer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type IUpdateCustomer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type IAppointment = {
  id: string;
  userId: string;
  customerId: string;
  offerIds: string[];
  date: string;
  duration: number;
  time: string;
  notes: string;
};
export type INewAppointment = {
  id: string;
  userId: string;
  customerId: string;
  offerIds: string[];
  date: string;
  duration: number;
  time: string;
  notes: string;
};
export type IUpdateAppointment = {
  id: string;
  userId: string;
  customerId: string;
  offerIds: string[];
  date: string;
  duration: number;
  time: string;
  notes: string;
};
