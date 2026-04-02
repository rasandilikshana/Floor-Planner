---
name: Dev server startup
description: How to start the react-planner dev server given environment constraints
type: project
---

Port 9000 is occupied by Keycloak on this machine. Start the dev server on port 8082 instead:

```
export NODE_OPTIONS=--openssl-legacy-provider
npx webpack-dev-server --inline --config demo/webpack.config.js --port 8082 --mode development
```

Node.js v22 requires `--openssl-legacy-provider` because Webpack 4 uses legacy OpenSSL APIs. Without it, the build fails with `ERR_OSSL_EVP_UNSUPPORTED`.

**Why:** Node 22 + Webpack 4 OpenSSL incompatibility; Keycloak holds port 9000.

**How to apply:** Always set NODE_OPTIONS before starting `npm start` or any webpack command on this machine. Use port 8082 (or any free port) instead of 9000.
