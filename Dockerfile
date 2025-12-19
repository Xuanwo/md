FROM node:22.16.0-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git

RUN npm install -g pnpm@10.26.1

COPY . .

RUN pnpm install --frozen-lockfile

ENV SERVER_ENV=NETLIFY
RUN pnpm --filter @md/web build:h5-netlify:only

FROM nginx:alpine

COPY --from=builder /app/apps/web/dist /usr/share/nginx/html
