import packageJson from "./package.json"
const { version } = packageJson
import { defineManifest } from "@crxjs/vite-plugin"

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = "0"] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, "")
  // split into version parts
  .split(/[.-]/)

export default defineManifest((env) => ({
  manifest_version: 3,
  name: env.mode === "DEVELOPMENT" ? "[DEV] Pallad" : "Pallad",
  description:
    "Discover the Future of Web3 with Pallad. Unlock the power of the world's lightest blockchain 🪶",
  icons: {
    "16": "icons/16.png",
    "32": "icons/32.png",
    "48": "icons/48.png",
    "128": "icons/128.png",
  },
  version: `${major}.${minor}.${patch}.${label}`,
  version_name: version,
  action: { default_title: "Click to open panel" },
  side_panel: { default_path: "index.html" },
  permissions: ["storage", "activeTab", "background", "sidePanel"],
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["https://*/*"],
      js: ["src/inject/index.ts"],
      run_at: "document_start",
      all_frames: true,
    },
  ],
  web_accessible_resources: [
    {
      resources: ["pallad_rpc.js"],
      matches: ["https://*/*"],
    },
  ],
  host_permissions: [
    "https://*/*",
    // Add other URLs or patterns as needed
  ],
  commands: {
    _execute_action: {
      suggested_key: {
        windows: "Alt+Shift+P",
        mac: "Alt+Shift+P",
        chromeos: "Alt+Shift+P",
        linux: "Alt+Shift+P",
      },
      description: "Open the Pallad extension",
    },
  },
}))
