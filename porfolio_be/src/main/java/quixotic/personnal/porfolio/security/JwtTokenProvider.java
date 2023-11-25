package quixotic.personnal.porfolio.security;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import quixotic.personnal.porfolio.exceptions.badRequestException.InvalidJwtException;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtTokenProvider{
	@Value("${application.security.jwt.expiration}")
	private int expirationInMs;
	@Value("${application.security.jwt.secret-key}")
	private String SECRET_KEY;
	private final byte[] apiKeySecretBytes = Base64.getDecoder().decode(SECRET_KEY);

	public String generateToken(Authentication authentication){
		SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
		long nowMillis = System.currentTimeMillis();
		Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
		JwtBuilder builder = Jwts.builder()
			.setSubject(authentication.getName())
			.setIssuedAt(new Date(nowMillis))
			.setExpiration(new Date(nowMillis + expirationInMs))
			.claim("authorities", authentication.getAuthorities())
			.signWith(signingKey, signatureAlgorithm);
		return builder.compact();
	}

	public String getEmailFromJWT(String token){
		return Jwts.parserBuilder()
			.setSigningKey(apiKeySecretBytes)
			.build()
			.parseClaimsJws(token)
			.getBody()
			.getSubject();
	}

	public void validateToken(String token){
		try{
			Jwts.parserBuilder().setSigningKey(apiKeySecretBytes).build().parseClaimsJws(token);
		}catch(SecurityException ex){
			throw new InvalidJwtException("Invalid JWT signature");
		}catch(MalformedJwtException ex){
			throw new InvalidJwtException("Invalid JWT token");
		}catch(ExpiredJwtException ex){
			throw new InvalidJwtException("Expired JWT token");
		}catch(UnsupportedJwtException ex){
			throw new InvalidJwtException("Unsupported JWT token");
		}catch(IllegalArgumentException ex){
			throw new InvalidJwtException("JWT claims string is empty");
		}
	}
}
