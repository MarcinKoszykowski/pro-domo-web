const name = {
  name: 'name',
  label: 'imię i nazwisko',
};
const firm = {
  name: 'firm',
  label: 'firma',
};
const nip = {
  name: 'nip',
  label: 'nip (xxx-xxx-xx-xx)',
  pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$',
};
const email = {
  name: 'email',
  label: 'adres email',
};
const tel = {
  name: 'tel',
  label: 'numer telefonu (xxxxxxxxx)',
  pattern: '[0-9]{9}',
};
const city = {
  name: 'city',
  label: 'miasto',
};
const postCode = {
  name: 'postCode',
  label: 'kod pocztowy (xx-xxx)',
  pattern: '^[0-9]{2}-[0-9]{3}$',
};
const message = {
  name: 'message',
  label: 'treść wiadomości',
};
const button = 'wyślij';
const title = 'formularz kontaktowy';

export { name, firm, nip, email, tel, city, postCode, message, button, title };
