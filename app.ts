import 'dotenv/config';

import createServer from '@/server/server';

const PORT = process.env.PORT || 8000;

const app = createServer();

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port: ${PORT}`);
});
