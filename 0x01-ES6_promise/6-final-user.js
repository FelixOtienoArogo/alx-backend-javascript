import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName = '', lastName = '', fileName = '') {
  const promise = uploadPhoto(fileName);
  const promise1 = signUpUser(firstName, lastName);
  return Promise.allSettled([promise, promise1]);
}
