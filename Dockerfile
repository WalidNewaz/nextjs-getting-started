# Base image
FROM node:18-alpine

# File Author / Maintainer
LABEL com.walidnewaz.image.authors="mdwalid@gmail.com"

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]

