FROM node:26-bookworm-slim AS builder

# Install dependencies
WORKDIR /app

COPY package*.json ./

RUN npm install

#Copy app source

COPY . .
RUN npm run build

# Production stage backend runner
FROM node:26-bookworm-slim AS backend-runner
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app

#Change user to non-root
USER node

COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/package*.json ./

RUN npm install --omit=dev

CMD ["node", "dist/main.js"]