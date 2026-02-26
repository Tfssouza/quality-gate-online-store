const { spawn } = require("child_process");

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: "inherit", shell: true, ...opts });
    p.on("close", (code) => (code === 0 ? resolve() : reject(new Error(code))));
  });
}

(async () => {
  let api;
  try {
    // sobe API
    api = spawn("node", ["api/src/server.ts"], { stdio: "inherit", shell: true });

    // espera um pouco pra API subir
    await new Promise((r) => setTimeout(r, 1200));

    // roda testes
    await run("npx", ["playwright", "test"], {
      env: { ...process.env, API_URL: "http://localhost:4000" }
    });

    console.log("\n✅ QUALITY GATE: PASSOU");
    process.exit(0);
  } catch (e) {
    console.log("\n❌ QUALITY GATE: FALHOU");
    process.exit(1);
  } finally {
    if (api) api.kill();
  }
})();