import * as yup from 'yup';

const matchSchema = yup.object().shape({
  id: yup.number(),
  winner_id: yup.number().required(),
  loser_id: yup.number().required(),
  winner_score: yup.number().required().positive(),
  loser_score: yup.number().required(),
  match_date: yup.string().required(),
  match_type: yup.number()
});

export default matchSchema;
