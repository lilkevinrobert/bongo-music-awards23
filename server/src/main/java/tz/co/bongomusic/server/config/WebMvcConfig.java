package tz.co.bongomusic.server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry
        .addMapping("/api/v1/")
        .allowedOrigins("http://localhost:5173")
        .allowedMethods("GET","POST","PUT","OPTION","HEAD","DELETE");
    }   
}
