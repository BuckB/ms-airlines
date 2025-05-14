FROM confluentinc/cp-kafka-connect-base:7.9.1@sha256:82a9e1e0e57cc77a3fba76469f4799fa61cd7c358797b24f04dd4b6c81e0515c

ENV KAFKA_CONNECT_PLUGINS_DIR=/etc/confluent/connect

RUN mkdir -p $KAFKA_CONNECT_PLUGINS_DIR

RUN echo ">>>>>>>>>> Installing plugin for Mongodb <<<<<<<<<<<"
RUN wget https://repo1.maven.org/maven2/io/debezium/debezium-connector-mongodb/3.1.1.Final/debezium-connector-mongodb-3.1.1.Final-plugin.tar.gz
RUN tar -xzf debezium-connector-mongodb-3.1.1.Final-plugin.tar.gz -C $KAFKA_CONNECT_PLUGINS_DIR
RUN rm -rf debezium-connector-mongodb-3.1.1.Final-plugin.tar.gz

# RUN echo ">>>>>>>>>> Installing plugin for Mysql   <<<<<<<<<<<"
# RUN wget https://repo1.maven.org/maven2/io/debezium/debezium-connector-mysql/3.1.1.Final/debezium-connector-mysql-3.1.1.Final-plugin.tar.gz
# RUN tar -xzf debezium-connector-mysql-3.1.1.Final-plugin.tar.gz -C $KAFKA_CONNECT_PLUGINS_DIR
# RUN rm -rf debezium-connector-mysql-3.1.1.Final-plugin.tar.gz

RUN echo ">>>>>>>>>> Installing plugin for Postgres <<<<<<<<<<<"
RUN wget https://repo1.maven.org/maven2/io/debezium/debezium-connector-postgres/3.1.1.Final/debezium-connector-postgres-3.1.1.Final-plugin.tar.gz
RUN tar -xzf debezium-connector-postgres-3.1.1.Final-plugin.tar.gz -C $KAFKA_CONNECT_PLUGINS_DIR
RUN rm -rf debezium-connector-postgres-3.1.1.Final-plugin.tar.gz

RUN echo ">>>>>>>>>> Installing Libraries for Single Message Transformations (SMT) <<<<<<<<<<"
RUN wget https://repo1.maven.org/maven2/io/debezium/debezium-scripting/3.1.1.Final/debezium-scripting-3.1.1.Final.tar.gz
RUN tar xvfz debezium-scripting-3.1.1.Final.tar.gz -C $KAFKA_CONNECT_PLUGINS_DIR
RUN rm -rf debezium-scripting-3.1.1.Final.tar.gz

RUN echo ">>>>>>>>>> Installing JSR-223 <<<<<<<<<<"
RUN wget https://repo1.maven.org/maven2/org/apache/groovy/groovy-jsr223/4.0.26/groovy-jsr223-4.0.26.jar
RUN cp groovy-jsr223-4.0.26.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-scripting
RUN cp groovy-jsr223-4.0.26.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-connector-postgres
RUN mv groovy-jsr223-4.0.26.jar $KAFKA_CONNECT_PLUGINS_DIR

RUN wget https://repo1.maven.org/maven2/org/apache/groovy/groovy/4.0.26/groovy-4.0.26.jar
RUN cp groovy-4.0.26.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-scripting
RUN cp groovy-4.0.26.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-connector-postgres
RUN mv groovy-4.0.26.jar $KAFKA_CONNECT_PLUGINS_DIR

RUN wget https://repo1.maven.org/maven2/org/apache/groovy/groovy-json/4.0.26/groovy-json-4.0.26.jar
RUN cp groovy-json-4.0.26.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-scripting
RUN cp groovy-json-4.0.26.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-connector-postgres
RUN mv groovy-json-4.0.26.jar $KAFKA_CONNECT_PLUGINS_DIR

RUN echo ">>>>>>>>>> Installing Debezium Libraries <<<<<<<<<<"
RUN wget https://repo1.maven.org/maven2/io/debezium/debezium-core/3.1.1.Final/debezium-core-3.1.1.Final.jar
RUN mv debezium-core-3.1.1.Final.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-scripting

RUN wget https://repo1.maven.org/maven2/io/debezium/debezium-ddl-parser/3.1.1.Final/debezium-ddl-parser-3.1.1.Final.jar
RUN mv debezium-ddl-parser-3.1.1.Final.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-scripting

RUN wget https://repo1.maven.org/maven2/org/antlr/antlr4-runtime/4.13.2/antlr4-runtime-4.13.2.jar
RUN mv antlr4-runtime-4.13.2.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-scripting

RUN wget https://repo1.maven.org/maven2/io/debezium/debezium-api/3.1.1.Final/debezium-api-3.1.1.Final.jar
RUN mv debezium-api-3.1.1.Final.jar $KAFKA_CONNECT_PLUGINS_DIR/debezium-scripting
