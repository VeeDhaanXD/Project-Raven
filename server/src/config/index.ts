import dotenv from 'dotenv';
dotenv.config();

const bool = (v: string|undefined, fallback=false) => v === undefined ? fallback : v.toLowerCase() === 'true';
const required = (name: string) => {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required environment variable: ${name}`);
  return v;
};
export const config = {
  port: Number(process.env.PORT || 3001),
  mongoUri: process.env.MONGODB_URI || '',
  jwtSecret: process.env.JWT_SECRET || '',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  demoMode: bool(process.env.DEMO_MODE, true),
  apiUrl: process.env.API_URL || 'http://localhost:3001/api',
  llmProvider: process.env.LLM_PROVIDER || 'mock',
};
export function validateConfig(startup=false) {
  if (!config.mongoUri) throw new Error('MONGODB_URI is required');
  if (!config.jwtSecret || config.jwtSecret.length < 32) throw new Error('JWT_SECRET must be set and at least 32 characters');
  if (startup) return;
  required('MONGODB_URI'); required('JWT_SECRET');
}
