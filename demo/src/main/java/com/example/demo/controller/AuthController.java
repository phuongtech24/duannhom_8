package com.example.demo.controller;

import com.example.demo.service.TaiKhoanService;
import com.example.demo.dto.LoginRequest;
import com.example.demo.entity.TaiKhoan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final TaiKhoanService taiKhoanService;

    public AuthController(TaiKhoanService taiKhoanService) {
        this.taiKhoanService = taiKhoanService;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest request) {
        Map<String, Object> response = new HashMap<>();

        if (request.getEmail() == null || request.getMatKhau() == null) {
            response.put("status", "error");
            response.put("message", "Email và mật khẩu không được để trống.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        Optional<TaiKhoan> user = taiKhoanService.validateUser(request.getEmail(), request.getMatKhau());

        if (user.isEmpty()) {
            response.put("status", "error");
            response.put("message", "Email hoặc mật khẩu không đúng.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        TaiKhoan taiKhoan = user.get();
        response.put("status", "success");
        response.put("message", "Đăng nhập thành công.");
        response.put("user", Map.of(
            "id", taiKhoan.getId(), // Thêm id
            "email", taiKhoan.getEmail(),
            "vaiTro", taiKhoan.getVaiTro() // Đổi từ `specialty` sang `vaiTro`
        ));

        return ResponseEntity.ok(response);
    }
}
