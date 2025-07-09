# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build Next.js app
RUN npm run build

# Expose port and run app
EXPOSE 3000
CMD ["npm", "start"]
