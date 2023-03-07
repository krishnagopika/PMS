package com.revature.apigateway.security;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsWebFilter;

import com.ctc.wstx.shaded.msv_core.verifier.identity.PathMatcher;

import io.netty.handler.codec.http.HttpMethod;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {
	

	@Value("${auth0.audience}")
	private String audience;

	@Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
	private String issuer;

	@Bean
	JwtDecoder jwtDecoder() {

		NimbusJwtDecoder jwtDecoder = (NimbusJwtDecoder) JwtDecoders.fromOidcIssuerLocation(issuer);

		OAuth2TokenValidator<Jwt> audienceValidator = new AudienceValidator(audience);
		OAuth2TokenValidator<Jwt> withIssuer = JwtValidators.createDefaultWithIssuer(issuer);
		OAuth2TokenValidator<Jwt> withAudience = new DelegatingOAuth2TokenValidator<>(withIssuer, audienceValidator);

		jwtDecoder.setJwtValidator(withAudience);

		return jwtDecoder;
	}

	@Bean
	public SecurityWebFilterChain publicfilterChain(ServerHttpSecurity http) throws Exception {

		http.cors().configurationSource(request -> {
            CorsConfiguration configuration = new CorsConfiguration();
            configuration.addAllowedOriginPattern("*");
            configuration.setAllowedMethods(List.of("*"));
            configuration.setAllowedHeaders(List.of("*"));
           
            return configuration;
        });
		http.csrf(csrf -> csrf.disable())
				.authorizeExchange(
						auth -> auth.pathMatchers("/api/**", "/api/patient/login", "/api/patient/register","/api/appointment/public")
								.permitAll().anyExchange().authenticated())
				.oauth2ResourceServer().jwt();

		return http.build();

	}
	
	/*
	 * @Bean public CorsWebFilter corsWebFilter() {
	 * 
	 * 
	 * final CorsConfiguration corsConfig = new CorsConfiguration();
	 * corsConfig.setAllowedOrigins(Collections.singletonList("*"));
	 * corsConfig.setMaxAge(3600L);
	 * corsConfig.setAllowedMethods(Arrays.asList("GET", "POST",));
	 * corsConfig.addAllowedHeader("*");
	 * 
	 * final UrlBasedCorsConfigurationSource source = new
	 * UrlBasedCorsConfigurationSource(); source.registerCorsConfiguration("/**",
	 * corsConfig); return new CorsWebFilter(source);
	 * 
	 * }
	 */

}