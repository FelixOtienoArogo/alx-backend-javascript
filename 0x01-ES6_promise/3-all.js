import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise = uploadPhoto();
  const promise2 = createUser();
  return Promise.all([promise, promise2]).then((values) => {
    const { body } = values[0];
    const { firstName, lastName } = values[1];
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
