import dotenv from 'dotenv';
dotenv.config()

const config = {
	mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
	mailchimpListId: process.env.MAILCHIMP_LIST_ID,
	mailchimpServerPrefix: process.env.MAILCHIMP_SERVER_PREFIX,
};

export default config
