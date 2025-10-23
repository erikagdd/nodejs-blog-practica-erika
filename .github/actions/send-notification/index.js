const core = require('@actions/core');

try {
  const email = core.getInput('user_email');
  const subject = core.getInput('subject');
  const body = core.getInput('body');

  console.log(`--- ENVIANT NOTIFICACIÓ ---`);
  console.log(`Destinatari: ${email}`);
  console.log(`Assumpte: ${subject}`);
  console.log(`Cos del missatge:\n${body}`);
  console.log(`---------------------------`);

} catch (error) {
  core.setFailed(`Error en enviar la notificació: ${error.message}`);
}
