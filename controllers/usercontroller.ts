import { Router } from 'https://deno.land/x/opine@1.9.0/mod.ts';

const users = new Router();

// users routes
users.get('/me', (req, res) => {
  res.render('users/me', { title: 'My Profile', user: res.app.locals.user });
});

export default users;