---
slug: what-is-sudo
title: SUDO là gì mà quyền lực thế?
authors: [thangbuiq]
tags: [tipsntricks, terminal]
---

![](./sudo.jpg)

Sudo là gì? Sudo là chữ viết tắt của "Superuser Do", dịch dễ hiểu là “Siêu người dùng làm [điều gì đó]“, cho phép người dùng có thể thực hiện một lệnh nào đó trong hệ thống dưới quyền của superuser (quyền của tài khoản root). 

<!-- truncate -->

Hay nói ngắn gọn, với sudo, bạn có thể thực thi bất cứ thứ gì, làm bất cứ thứ gì bạn muốn, là quyền tối cao nhất trong Linux/Unix, và dĩ nhiên bạn sẽ phải cần nhập mật khẩu user để sử dụng "sudo".

:::info
Ví dụ: `sudo apt install google-chrome`
=> Bạn sẽ phải cần quyền sudo để có thể cài một ứng dụng nào đó vào một hệ thống Linux.
:::

Sudo là một lệnh trong hệ điều hành Linux/Unix, cho phép người dùng có quyền thực thi các lệnh hoặc chương trình với đặc quyền người dùng cao hơn, thường là quyền quản trị hệ thống (root). Việc sử dụng sudo giúp tăng cường bảo mật và kiểm soát quyền truy cập trên hệ thống.

:::warning fact
Đây cũng là tính năng dẫn đến sự bảo mật toàn vẹn của hệ điều hành Linux/Unix, vì đến người dùng còn phải biết pass để truy cập các lệnh dưới quyền sudo, thì nói gì đến các "hắc kẻ" (hacker 😂) khi thực hiện tấn công vào hệ thống của các bạn.
:::