# Step 1: Build React App
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Step 2: Serve bằng Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
