export async function POST(req) {
	const { firstName, lastName, email } = req.body;
	const data = {
		email_address: email,
		status: 'subscribed',
		merge_fields: { FNAME: firstName, LNAME: lastName },
	};

	const result = await fetch(`https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
		},
	});

	if (result.status === 200) {
		return Response.json(
			{ message: 'Inscrição realizada com sucesso!' },
			{
				status: 200,
			},
		);
	}

	const restData = await result.json();
	console.log(restData);
	if (restData.title === 'Member Exists') {
		return Response.json(
			{ message: 'Este e-mail já se encontra na nossa lista.' },
			{
				status: 400,
			},
		);
	} else {
		return Response.json(
			{
				message: 'Erro ao se inscrever. Tente novamente mais tarde.',
			},
			{
				status: 400,
			},
		);
	}
}
