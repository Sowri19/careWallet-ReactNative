# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /STRIPE-SAMPLE-CODE

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port your app will run on
EXPOSE 4242

# Define the command to start your app
CMD ["node", "server/server.js"]
