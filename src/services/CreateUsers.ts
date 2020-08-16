export default function CreateUsers(
  name = '',
  email: string,
  password: string
) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
