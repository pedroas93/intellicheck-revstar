# Use Node.js 
FROM node:18-alpine
# Set the working directory to /app
WORKDIR /app
# Copy project files into the container
COPY package*.json ./
COPY . .
# Install dependencies
RUN npm install
# Expose the port on which the application will run
EXPOSE 3000
# Command to run the application
CMD ["npm", "run", "dev"]
