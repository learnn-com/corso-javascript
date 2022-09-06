const fastify = require('fastify')({
  logger: true
})

const data = require('./data.json') 

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
})

fastify.get('/users', (request, reply) => {
  const q = request.query;
  const limit = parseInt(q.limit) || 10;
  const offset = parseInt(q.offset) || 0;
  const users = data.slice(offset, offset + limit);

  reply.send({ users });
})

fastify.get('/users/:id', (request, reply) => {
  const id = request.params.id;
  const user = data.find(user => user.id === parseInt(id));

  if (!user) {
    return reply.send({
      error: 'User not found'
    })
  }

  reply.send({ user });
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(`Fastify server listening at ${address}`)
})