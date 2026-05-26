FROM node:26-bookworm-slim AS builder

# Install dependencies
WORKDIR /app

COPY package*.json ./

RUN npm install

#Copy app source

COPY . .
RUN npm run build

# Production stage frontend runner
FROM node:26-bookworm-slim AS frontend-runner
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app



#Change user to non-root
USER node

COPY --chown=node:node --from=builder /app/.next ./.next
COPY --chown=node:node --from=builder /app/public ./public
COPY --chown=node:node --from=builder /app/package*.json ./

RUN npm install --omit=dev

CMD ["npm", "run", "start"]