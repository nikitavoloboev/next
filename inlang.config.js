export async function defineConfig(env) {
  const plugin = await env.$import(
    "https://cdn.jsdelivr.net/gh/samuelstroschein/inlang-plugin-json@1/dist/index.js"
  )

  const pluginConfig = {
    pathPattern: "./{language}.json",
  }

  return {
    referenceLanguage: "en",
    languages: ["en", "de"],
    readResources: (args) => plugin.readResources({ ...args, ...env, pluginConfig }),
    writeResources: (args) => plugin.writeResources({ ...args, ...env, pluginConfig }),
  }
}
