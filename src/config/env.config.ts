import { registerAs } from '@nestjs/config';

export default registerAs('environment', () => ({
  environment: process.env.NODE_ENV,
  apiKey: process.env.API_KEY,
}));
