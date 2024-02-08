---
title: Day 0 - Chào mừng đến với Linux
description: Chào mừng bạn đến với Linux!
slug: welcome-to-linux
authors: [lelouvincx]
tags: [15DFWT, Installation]
hide_table_of_contents: false
date: 2022-12-24
sidebar-position: 1
---

![Cover](./static/day0-cover.jpg)

Xin chào, lại là Tux đây! Sau khi cài đặt thành công Ubuntu, bước tiếp theo chúng ta cần làm là thiết lập Ubuntu để có thể sử dụng. Cùng mình đi tiếp những bước cài đặt nhé!

## 1. Làm quen với môi trường dòng lệnh (CLI)

Nhìn chung, các hệ máy UNIX như Linux, MacOS đều cung cấp một giao diện làm việc với dòng lệnh (Command Line Interface), hay gọi dân dã là Terminal. Bạn có thể mở terminal bằng icon này hoặc ấn tổ hợp `Crtrl + Alt + T`.

### Check package update
```bash
sudo apt-get update
sudo apt-get dist-upgrade
```

> :information_source: Nhớ dùng mật khẩu đã nhập ở khâu cài đặt nhé!

### Cài đặt các thư viện cần thiết
```bash
sudo apt-get install software-properties-common build-essential openssl-dev dirmngr gnupg apt-transport-https ca-certificates -y
sudo apt-get install curl wget -y
```

> **Note:** Thêm tag `-y` vào giúp bạn không cần chọn `yes/no` trong quá trình cài đặt

### Cài bộ gõ tiếng Việt

Có một vài bộ gõ tiếng Việt trên mạng như IBus Unikey, IBus Bamboo, IBus Teni, ... nhưng ở đây Tux sẽ hướng dẫn bạn cài IBus Bamboo, hiện tại là phiên bản hoàn thiện nhất để gõ tiếng Việt trên Linux.

Trang chủ của [IBus Bamboo](https://github.com/BambooEngine/ibus-bamboo).

Chạy từng dòng một như dưới đây nhé:

```bash
sudo add-apt-repository ppa:bamboo-engine/ibus-bamboo
sudo apt-get update
sudo apt-get install ibus ibus-bamboo --install-recommends
ibus restart
env DCONF_PROFILE=ibus dconf write /desktop/ibus/general/preload-engines "['BambooUs', 'Bamboo']" && gsettings set org.gnome.desktop.input-sources sources "[('xkb', 'us'), ('ibus', 'Bamboo')]"
```

Sau khi chạy xong, bạn Log Out lại máy để IBus được khởi động.

(Cần có máy để viết chính xác)

## 2. Cài đặt ứng dụng cơ bản

### Htop và neofetch - kiểm tra tình trạng của máy

Htop giúp bạn kiểm tra tài nguyên hiện tại của máy như CPU, RAM, swap, ... Bạn cũng có thể tìm kiếm, filter, sắp xếp các process đang chạy.

![](https://i.imgur.com/88xvSO5.png)

Kiểm tra htop đã được cài hay chưa:

```bash
htop --version
# Nếu chưa được cài
sudo apt install htop
```

Bên cạnh htop, neofetch cho bạn cái nhìn tổng quan về hiện trạng của Linux với một giao diện đẹp:

![](https://i.imgur.com/XX3ewNG.png)

Kiểm tra neofetch đã được cài hay chưa:
```bash
neofetch
# Nếu chưa được cài
sudo apt install neofetch
```

### Flameshot - chụp màn hình

Tiếp theo là ứng dụng để chụp màn hình, ở đây Tux dùng flameshot vì độ nhẹ và dễ chỉnh sửa:

```bash
sudo apt-get install flameshot -y
```

> :information_source: Thêm tag `-y` để tự động chọn yes khi cài đặt

(config flameshot vào autostart, bind phím tắt nhưng mà để có máy rồi làm)

### Zoom

Zoom là ứng dụng không thể thiếu sau thời đại dịch Covid-19. Hiện tại Zoom đã release phiên bản .deb cho các hệ Debian. Truy cập trang download của Zoom: https://zoom.us/download?os=linux

Chọn như trong hình:

![](https://i.imgur.com/dmAReAH.png)

Sau khi download về, bạn có thể vào thư mục Downloads và click vào link để chạy gói cài đặt, y như Windows vậy :D

### VLC

VLC là ứng dụng mã nguồn mở để xem video phổ biến trên Linux.

```bash
# Kiểm tra VLC đã cài trong máy
vlc --version
# Cài đặt VLC
sudo apt-get install vlc -y
```

### Visual Studio Code

Tương tự như Zoom, Visual Studio Code cũng cung cấp bộ cài cho bạn. Truy cập trang download của VSCode: https://code.visualstudio.com/download

Chọn file .deb, sau đó tải về và cài đặt như bình thường.

![](https://i.imgur.com/2MewLMw.png)

Tới đây chắc bạn cũng hình dung được cách cài đặt ứng dụng trên Linux rồi đúng không nào. Tux sẽ tổng hợp lại giúp các bạn.

Giả sử bạn cần cài ứng dụng tên là **ubunchuu**:

- Cài đặt bằng terminal

```bash
sudo apt update
sudo apt install ubunchuu
```

- Cài đặt bằng gói deb
    - Search trên mạng: download ubunchuu for ubuntu
    - Tìm kiếm file .deb phù hợp với phiên bản của mình (22.04)
    - Tải về và cài đặt

- Ngoài 2 cách phổ biến trên, với một số ứng dụng sẽ có câu lệnh chuyên dụng để cài đặt, ví dụ như để cài Fig Terminal, bạn chỉ cần copy và chạy câu lệnh này:

![](https://i.imgur.com/g48j4ao.png)

### R và R Studio

Truy cập trang download của R Studio và follow theo hướng dẫn trên trang: https://posit.co/download/rstudio-desktop/

### Challenge: Cài đặt browser ưa thích của bạn 
*E.g:* edge/chrome/brave/opera

Dựa theo kiến thức ở trên, hãy thử tự cài browser ưa thích của bạn vào máy nhé! Nếu gặp bất cứ khó khăn nào, hãy liên hệ với **Ubunchuu** qua messenger.

![](https://i.imgur.com/K0tnDFP.png)

## 3. Những ứng dụng non-native trên Linux và cách khắc phục

### Microsoft Office

Để thay thế Microsoft Office, bạn có thể dùng ứng dụng cài sẵn như Libre Office. Hoặc WPS Office cho UI đẹp hơn và chức năng tốt hơn. Nhưng cũng trade-off vì WPS sẽ nặng hơn và cần config để Linux mở mặc định bằng WPS. 

Link download WPS: https://www.wps.com/office/linux/

### Matlab, R Studio

Matlab không hỗ trợ Linux, nhưng bạn có thể sử dụng online ở nlink sau:
- Matlab: https://matlab.mathworks.com/
- R Studio: https://posit.cloud/ (có thể sử dụng R Studio bản online nếu thấy package R Studio bên trên khá nặng)

### Maple

Hiện tại có phiên bản Maple cho Linux, nhưng khá nặng và việc cài đặt rườm rà nên Tux không viết vào. Bạn có thể xem hướng dẫn [ở đây](https://cyanogenmods.org/how-to-install-maple-in-ubuntu-linux/) nhé.

### Visual Studio

Hiện tại không có phiên bản cho Linux/Ubuntu. Nhưng bạn có thể sử dụng VSCode thay thế, bằng việc cài plugin liên quan.

### Zalo

Hiện tại không có phiên bản Zalo cho Linux, bạn có thể dùng Zalo web để thay thế.