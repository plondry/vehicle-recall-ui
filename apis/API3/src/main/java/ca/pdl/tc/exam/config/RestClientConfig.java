package ca.pdl.tc.exam.config;

import ca.pdl.tc.exam.util.SSLUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestClientConfig {


    @Bean
    public RestTemplate restTemplate() throws Exception {

        SSLUtil.turnOffSslChecking();
        return new RestTemplate();
    }
}
