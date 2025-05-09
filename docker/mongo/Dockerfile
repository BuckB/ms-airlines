FROM bitnami/mongodb:8.0.8

# Set a working directory (optional, Mongo doesn't need it, but good practice)
WORKDIR /docker-entrypoint-initdb.d

# Copy any custom initialization scripts
# This way you can add your own .js or .sh scripts easily
# COPY ./scripts/ /docker-entrypoint-initdb.d/

# Define the default command (still running mongod with replica set mode)
ENTRYPOINT ["mongod"]
# CMD ["--replSet", "rs0"]

# Expose the MongoDB port
# Note: The default MongoDB port is 27017, but you can change it in the CMD line if needed
EXPOSE 27017
