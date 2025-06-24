FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apk add --no-cache nginx pandoc

COPY . .

RUN npm run build

# Copy the built frontend files to the Nginx default directory
RUN mkdir /usr/share/nginx/html
RUN cp -r ./dist/* /usr/share/nginx/html/

# Copy the Nginx configuration file (assuming a default one or custom one will be added later if needed)
COPY nginx.conf /etc/nginx/nginx.conf

# Make the start script executable
RUN chmod +x start_services.sh

EXPOSE 5010 88 3001

CMD ["./start_services.sh"]