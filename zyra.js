#!/usr/bin/env node
const VERSAO_ZYRA = "4.0.0"; 

function executarNoTerminal() {
    const args = process.argv.slice(2);
    if (args.includes('--versao') || args.includes('-v')) {
        console.log(`ZyraScript Versão ${VERSAO_ZYRA}`);
        return;
    }
    console.log("Bem-vindo ao Zyra CLI. Use '--versao' ou '-v' para ver a versão.");
}

executarNoTerminal();