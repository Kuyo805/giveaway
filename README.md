# Hướng Dẫn Chạy Dự Án Next.js

Chào mừng bạn đến với dự án Next.js! Dưới đây là hướng dẫn từng bước để thiết lập và chạy dự án trên máy tính của bạn.

## Yêu Cầu Hệ Thống

- **Node.js**: Phiên bản 18.x hoặc cao hơn. Bạn có thể tải tại [nodejs.org](https://nodejs.org).
- **npm** hoặc **yarn**: npm được cài sẵn với Node.js, hoặc bạn có thể cài yarn bằng lệnh `npm install -g yarn`.
- Một trình chỉnh sửa mã nguồn như Visual Studio Code (khuyến nghị).

## Hướng Dẫn Cài Đặt

1. **Clone Repository**
   - Clone dự án về máy tính của bạn bằng lệnh:
     ```bash
     git clone https://github.com/Kuyo805/giveaway
     cd giveaway
     ```

2. **Cài Đặt Các Phụ Thuộc**
   - Chạy lệnh sau để cài đặt các gói phụ thuộc:
     ```bash
     npm install
     ```
     Hoặc nếu dùng yarn:
     ```bash
     yarn install
     ```

3. **Chạy Dự Án Ở Chế Độ Phát Triển**
   - Chạy lệnh sau để khởi động server phát triển:
     ```bash
     npm run dev
     ```
     Hoặc với yarn:
     ```bash
     yarn dev
     ```
   - Mở trình duyệt và truy cập `http://localhost:3000` để xem ứng dụng.

## Giải Quyết Sự Cố

- **Lỗi "Node.js version không tương thích"**: Đảm bảo bạn đang dùng phiên bản Node.js được yêu cầu (18.x hoặc cao hơn). Kiểm tra bằng lệnh:
  ```bash
  node -v
  ```
- **Lỗi thiếu phụ thuộc**: Xóa thư mục `node_modules` và file `package-lock.json` (hoặc `ទ
`yarn.lock`), sau đó chạy lại `npm install` hoặc `yarn install`.
- **Không truy cập được localhost:3000**: Kiểm tra xem port 3000 có đang được sử dụng bởi ứng dụng khác không. Bạn có thể đổi port bằng cách thêm biến môi trường `PORT` trong `.env.local`.

## Liên Hệ

Bạn có thể kết nối với tôi qua:

- 💼 **LinkedIn**: [Võ Minh Quân](https://www.linkedin.com/in/v%C3%B5-minh-qu%C3%A2n-821704325/)
- 📝 **Blog**: [Quan Notes](https://mquannotes.vercel.app)
- 🌐 **Facebook**: [Minh Quân](https://www.facebook.com/quan.minh.780514/)

Cảm ơn bạn đã quan tâm đến dự án!