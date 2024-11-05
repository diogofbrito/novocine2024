import axios from 'axios';
import config from '../config/config.js';

export const subscribeUser = async (req, res) => {
	const { firstName, lastName, email } = req.body;
	const data = {
		email_address: email,
		status: 'subscribed',
		merge_fields: { FNAME: firstName, LNAME: lastName },
	};

	try {
		await axios.post(`https://${config.mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${config.mailchimpListId}/members`, data, {
			headers: {
				Authorization: `apikey ${config.mailchimpApiKey}`,
			},
		});
		res.status(200).json({ message: 'Inscrição realizada com sucesso!' });
	} catch (error) {
		if (error.response) {
			console.error('Error response from Mailchimp:', error.response.data);

			// Tratar o erro "Member Exists"
			if (error.response.data.title === 'Member Exists') {
				res.status(400).json({ message: 'Este e-mail já se encontra na nossa lista.' });
			} else {
				res.status(400).json({ message: 'Erro ao se inscrever1. Tente novamente mais tarde.' });
			}
		} else {
			res.status(500).json({ message: 'Erro ao se inscrever. Tente novamente mais tarde.' });
		}
	}
};
