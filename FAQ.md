FAQ: env-sync

Q: Does env-sync expose real secrets in .env.example?
A: Never. Values are stripped and replaced with typed placeholder strings such as `your_api_key_here`.

Q: Which languages and frameworks are supported?
A: Node.js (process.env, import.meta.env), Python (os.environ, os.getenv), and PHP ($_ENV, getenv).
