import userModel, { UserModel } from "./user";

export interface StoreModel {
  user: UserModel;
}

const store: StoreModel = {
  user: userModel,
};

export default store;
