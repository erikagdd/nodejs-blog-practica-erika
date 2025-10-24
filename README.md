Example of nextjs project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->
1. Introducció Teòrica: GitHub Actions 

GitHub Actions és una plataforma d'Integració Contínua i Desplegament Continu (CI/CD) que permet automatitzar tasques directament dins del repositori de GitHub. Amb els Workflows (fluxos de treball), he pogut definir una sèrie de Jobs (feines) que s'executen automàticament quan es produeix un esdeveniment específic, com ara un push a la branca main.

2. Configuració Inicial del Projecte
2.1. Descàrrega i Inicialització Local
He entrat al repositori de l'enunciat i he descarregat el codi.

He comprovat els fitxers amb ls a Git Bash.

He instal·lat totes les dependències amb npm install.

He comprovat que el projecte funcionava localment amb npm run dev.

2.2. Creació i Push al Repositori Remot
He creat un nou repositori a GitHub anomenat nodejs-blog-practica-erika.

He inicialitzat Git localment i he fet el primer commit amb el missatge "Primera versió del projecte base Next.js".

He vinculat i he fet el primer git push al repositori remot.

He creat la carpeta necessària per als workflows: .github/workflows.

3. Implementació dels Jobs
3.1.
Linter Job 
He creat el fitxer de workflow nodejs-blog-practica-erika_workflow.yml i he afegit el codi del Linter_job.

Problema i Correcció: El Linter ha fallat per errors de sintaxi:

M'ha donat error que les strings havien d'utilitzar cometes dobles. Ho he corregit al codi.


M'ha fallat per l'ús de var. Ho he corregit substituint-lo per const.


M'ha fallat per tenir un default que no era l'última clàusula en un switch. Ho he corregit.


Després de fer els commit i push necessaris , el Linter_job s'ha completat amb èxit.

3.2.
Cypress Job i Artefacte 
He editat el fitxer de workflow i he afegit el Cypress_job que s'executa amb needs: linter_job.

He configurat el job amb continue-on-error: true.

He afegit els passos per generar l'artefacte result.txt amb el resultat del job.

He fet commit i push, i el Cypress_job s'ha afegit al workflow.

3.3.
Add Badge Job (Acció Pròpia) 
He creat la carpeta per a l'acció pròpia: .github/actions/add-badge.

He creat el fitxer action.yml (amb cypress_outcome com a input) i el fitxer index.js (amb la lògica de lectura i actualització del README.md).

He afegit el add_badge_job al workflow principal.


Problema i Correcció: El job ha fallat amb exit code 128 per manca de permisos per fer el git push automàtic.


He solucionat l'error afegint la línia permissions: contents: write a l'inici del workflow.


3.4.
Deploy Job (Vercel) 
He configurat el projecte manualment a Vercel i he fet el primer desplegament.

He creat els Secrets necessaris per a GitHub: VERCEL_TOKEN, VERCEL_ORG_ID i VERCEL_PROJECT_ID.

He afegit el deploy_job al workflow utilitzant l'acció amondnet/vercel-action@v20.

Després d'algunes fallades inicials, he revisat i he copiat de nou els tokens de Vercel (com m'ha passat en altres pràctiques) , i el desplegament s'ha completat.

3.5.
Notification Job (Correu Electrònic) 
Inicialment, he creat una acció pròpia amb només console.log i el Secret USER_EMAIL. Després hem canviat la lògica per utilitzar l'acció dawidd6/action-send-mail@v3.

Explicació de la Correcció Final (El teu repte): He vingut amb un error al Notification_job perquè l'acció d'enviament de correu ha fallat amb un error de protocol SSL (wrong version number) en intentar connectar-me al servidor SMTP. He corregit això canviant el port de connexió de 587 a 465 per forçar l'ús de SSL implícit. Tot seguit, m'ha aparegut un error d'inici de sessió (Invalid login: Username and Password not accepted), que ha indicat que la meva Contrasenya d'Aplicació de Google no era vàlida. Finalment, he solucionat el problema eliminant els espais de la clau de 16 caràcters del Secret SMTP_PASSWORD i he rellançat el workflow, cosa que ha permès que el correu s'enviés correctament.




4. Requisit Final: Mètriques de Perfil
He completat l'últim requisit creant un repositori especial de perfil amb el meu nom d'usuari erikagdd.

Li he habilitat el README.md i he afegit el codi d'incrustació de github-readme-stats per mostrar les mètriques dels llenguatges més utilitzats al meu perfil de GitHub.


5. Lliurament
Link al Repositori de GitHub: https://github.com/erikagdd/nodejs-blog-practica-erika


Link al Projecte Vercel: [nodejs-blog-practica-erika-4krpwtejo-erikas-projects-92a7fdce.vercel.app](https://vercel.com/erikas-projects-92a71dce/nodejs-blog-practica-erika)

## RESULTAT DELS ÚLTIMS TESTS


![Tests](https://img.shields.io/badge/test-failure-red)

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
