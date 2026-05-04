# -------- Stage 1: Builder --------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# Install dependencies (if any)
RUN npm install

# Copy rest of the project
COPY . .

# If later you add a build step (React/Vite), it will run here
# RUN npm run build


# -------- Stage 2: Production --------
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy only required files from builder
COPY --from=builder /app /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]