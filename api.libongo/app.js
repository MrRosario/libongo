const app   = require('./bin/express');
const porta = process.env.PORT || 3000;

app.listen(porta,() => {
  console.log(`Servidor funcionando na porta ${porta}`);
});