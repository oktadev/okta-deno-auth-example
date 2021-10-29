import { opine, serveStatic } from 'https://deno.land/x/opine@1.9.0/mod.ts';
import { renderFileToString } from 'https://deno.land/x/dejs@0.10.1/mod.ts';
import { join, dirname } from 'https://deno.land/x/opine@1.9.0/deps.ts';

import { ensureAuthenticated } from './middleware/authmiddleware.ts';
import users from './controllers/usercontroller.ts';
import auth from './controllers/authcontroller.ts';

const app = opine();
const __dirname = dirname(import.meta.url);

app.engine('.html', renderFileToString);
app.use(serveStatic(join(__dirname, 'public')));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index', { title: 'Deno Sample' });
});

app.use('/users', ensureAuthenticated, users);
app.use('/auth', auth)

app.listen(3000);
console.log('running on port 3000');