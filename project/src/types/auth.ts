export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'investor' | 'advisor' | 'analyst';
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData extends LoginFormData {
  name: string;
  role: 'investor' | 'advisor';
}