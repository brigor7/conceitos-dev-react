interface techObjects {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | techObjects>;
}

export default function CreateUsers({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
