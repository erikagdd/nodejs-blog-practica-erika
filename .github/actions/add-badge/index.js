import { readFileSync, writeFileSync } from "fs";

const outcome = process.env.INPUT_CYPRESS_OUTCOME || "failure";

const successBadge = "![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)";
const failureBadge = "![Tests](https://img.shields.io/badge/test-failure-red)";
const badge = outcome === "success" ? successBadge : failureBadge;

const README_PATH = "README.md";
const MARKER = "RESULTAT DELS ÚLTIMS TESTS";

try {
  let readme = readFileSync(README_PATH, "utf8");

  // Si no existix la secció del marcador, es crea
  if (!readme.includes(MARKER)) {
    readme += `\n\n## ${MARKER}\n\n`;
  }

  // Afig el badge després del marcador
  readme += `\n${badge}\n`;

  writeFileSync(README_PATH, readme, "utf8");
  console.log(`Badge afegit correctament amb outcome: ${outcome}`);
} catch (error) {
  console.error("Error modificant el README:", error);
  process.exit(1);
}
