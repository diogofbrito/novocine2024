import express from 'express';
import cors from 'cors';
import subscribeRoute from './routes/subscribe.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api', subscribeRoute);

app.listen(PORT, () => {
	console.log(`Servidor backend rodando na porta ${PORT}`);
});
