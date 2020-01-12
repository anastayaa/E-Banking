package com.ebanking.coreservice.security;


import com.ebanking.coreservice.models.Admin;
import io.jsonwebtoken.*;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.ebanking.coreservice.security.SecurityConstants.EXPIRATION_TIME;
import static com.ebanking.coreservice.security.SecurityConstants.SECRET;
@Component
public class JwtTokenProvider {
    public Long getAdminIdFromJWT(String token){
        Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
        String id = (String)claims.get("id");

        return Long.parseLong(id);
    }

    public boolean validateToken(String token){
        try{
            Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token);
            return true;
        }catch (SignatureException ex){
            System.out.println("Invalid JWT Signature");
        }catch (MalformedJwtException ex){
            System.out.println("Invalid JWT Token");
        }catch (ExpiredJwtException ex){
            System.out.println("Expired JWT token");
        }catch (UnsupportedJwtException ex){
            System.out.println("Unsupported JWT token");
        }catch (IllegalArgumentException ex){
            System.out.println("JWT claims string is empty");
        }
        return false;
    }

    public String generateToken(Authentication authentication){
        Admin admin = (Admin) authentication.getPrincipal();
        Date now = new Date(System.currentTimeMillis());

        Date expiryDate = new Date(now.getTime()+EXPIRATION_TIME);

        String Id = Long.toString(admin.getId());

        Map<String,Object> claims = new HashMap<>();
        claims.put("id", (Long.toString(admin.getId())));
        claims.put("username", admin.getUsername());
        claims.put("firstName", admin.getNom());
        claims.put("lastName", admin.getPrenom());

        return Jwts.builder()
                .setSubject(Id)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }
}
