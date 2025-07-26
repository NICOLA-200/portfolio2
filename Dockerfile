# Step 1: Use official Node.js base image
FROM node:20-alpine

# Step 2: Set working directory in the container
WORKDIR /app

# Step 3: Copy package.json and lock file
COPY package.json ./
COPY package-lock.json* ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the project
COPY . .

# Step 6: Build the project
RUN npm run build

# Step 7: Use a minimal web server to serve the build (e.g., `vite preview` or `serve`)
# Option A: Use vite preview
EXPOSE 5173
CMD ["npm", "run", "preview"]
