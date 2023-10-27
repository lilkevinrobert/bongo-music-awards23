package tz.co.bongomusic.server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration {


    public WebMvcConfigurer webMvcConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry
                        .addMapping("/**")
                        .allowedMethods("GET","PUT","POST","OPTION","HEAD","DELETE")
                        .allowedHeaders("*")
                        .allowedOriginPatterns("*")
                        .allowCredentials(true);

            }
        };
    }
}
