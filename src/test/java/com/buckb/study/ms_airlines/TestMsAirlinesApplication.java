package com.buckb.study.ms_airlines;

import org.springframework.boot.SpringApplication;

public class TestMsAirlinesApplication {

	public static void main(String[] args) {
		SpringApplication.from(MsAirlinesApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
