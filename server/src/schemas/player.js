import * as yup from 'yup';

const playerSchema = yup.object().shape({
  id: yup.number(),
  login: yup.string().required('Введите логин пользователя')
});

export default playerSchema;
