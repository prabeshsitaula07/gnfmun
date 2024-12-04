# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vite project
RUN npm run build

# Install `serve` to serve the built files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Serve the built files using `serve`
CMD ["serve", "-s", "dist"]
