import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(c.req.param('id'));
  console.log(c.req.header('Authorization'));
  console.log(body);
  return c.text('mkc');
})

export default app;
