import { config } from 'https://deno.land/x/dotenv@v3.1.0/mod.ts';

export const ensureAuthenticated = async (req:any, res:any, next:any) => {
  const user = req.app.locals.user;
  if(!user){
    const reqUrl = req.originalUrl;
    const {issuer, clientId, redirectUrl, state} = config();
    const authUrl = `${issuer}/v1/authorize?client_id=${clientId}&response_type=code&scope=openid%20email%20profile&redirect_uri=${encodeURIComponent(redirectUrl)}&state=${state}:${reqUrl}`;
    res.location(authUrl).sendStatus(302);
  }
  next();
}
