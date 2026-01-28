export type Gender = 'masculino' | 'feminino' | 'unisex';
export type UserSex = 'masculino' | 'feminino';

export type HomepageUserGender =
  | 'masculino'
  | 'feminino'
  | 'infantil';

export interface UserGenres {
  name: HomepageUserGender;
  active: boolean;
}

export const genders: Gender[] = ['masculino', 'feminino'];

export interface UserData {
  name: string;
  email: string;
  sex: UserSex;
  position: string;
  favorites?: [''];
  camisa?: string;
  calça?: string | number;
  calçado?: number;
}
