# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app for production
RUN npm run build

# Expose the port on which the app will run
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev", "--host", "0.0.0.0"]
