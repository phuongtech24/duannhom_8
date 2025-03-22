package com.example.demo.service;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.entity.TaiKhoan;
import com.example.demo.repository.TaiKhoanRepository;

@Service
public class TaiKhoanService {

    private final TaiKhoanRepository taiKhoanRepository;
    private final PasswordEncoder passwordEncoder;

    public TaiKhoanService(TaiKhoanRepository taiKhoanRepository, PasswordEncoder passwordEncoder) {
        this.taiKhoanRepository = taiKhoanRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // ✅ Mã hóa mật khẩu khi đăng ký tài khoản
    public TaiKhoan registerUser(String email, String matKhau, int vaiTro) {
        String hashedPassword = passwordEncoder.encode(matKhau); // Mã hóa mật khẩu

        TaiKhoan taiKhoan = new TaiKhoan();
        taiKhoan.setEmail(email);
        taiKhoan.setMatKhau(hashedPassword); // Lưu mật khẩu đã mã hóa
        taiKhoan.setVaiTro(vaiTro);

        return taiKhoanRepository.save(taiKhoan);
    }

    // ✅ Kiểm tra đăng nhập
    public Optional<TaiKhoan> validateUser(String email, String matKhau) {
        Optional<TaiKhoan> user = taiKhoanRepository.findByEmail(email);

        // Kiểm tra mật khẩu đã mã hóa
        if (user.isPresent() && passwordEncoder.matches(matKhau, user.get().getMatKhau())) {
            return user;
        }

        return Optional.empty();
    }
}
