# Start from official MongoDB nanoserver-based image
FROM mongo:nanoserver-ltsc2022

# Set a working directory (optional, Mongo doesn't need it, but good practice)
WORKDIR /docker-entrypoint-initdb.d

# Copy any custom initialization scripts
# This way you can add your own .js or .sh scripts easily
COPY ./scripts/ /docker-entrypoint-initdb.d/

# (Optional) Set environment variables if you want defaults baked into the image
# ENV MONGO_INITDB_DATABASE=kafka-book
# ENV MONGO_INITDB_ROOT_USERNAME=root
# ENV MONGO_INITDB_ROOT_PASSWORD=example

# Define the default command (still running mongod with replica set mode)
ENTRYPOINT ["mongod"]
CMD ["--replSet", "rs0"]
