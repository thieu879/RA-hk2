export interface UserProfile {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialProfile: UserProfile[] = [{
  id: 1,
  userName: "Thiều",
  gender: "nam",
  dateBirth: "11/02/2005",
  address: "nhà",
}];

const reducerProfile = (state = initialProfile, action: any): UserProfile[] => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerProfile;
