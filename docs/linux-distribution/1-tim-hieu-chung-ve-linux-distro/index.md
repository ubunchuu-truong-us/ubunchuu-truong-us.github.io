---
title: "Tìm hiểu chung về Linux Distro"
description: ""
authors: [thangbuiq, tuantran0910]
tags: [Distro]
hide_table_of_contents: false
date: 2023-02-24
sidebar-position: 1
---

:::info
Distro là từ viết tắt của linux distribution, có tên tiếng việt là phân phối của Linux.
:::

![](static/branches.png)

## 1. Khái niệm Distro

- Một bản phân phối của linux (hay distro) là một hệ điều hành được lập trình từ những tùy biến dựa trên nhân Linux. Những tùy biến này có thể giải thích đơn giản là sự thay đổi trong cách đóng gói packages bên trong hệ điều hành cùng với nhân Linux, cùng các công cụ GNU, thư viện cũng như tiện ích, ứng dụng khác nhau cho phù hợp với nhu cầu người sử dụng.
- Bên trong một distro bao gồm:
  - Nhân Linux (kernel)
  - Tổng hợp các ứng dụng và tiện ích đã tùy biến
  - Trình cài đặt và quản lý packages

:::warning :shamrock: **Ghi nhớ**
Distro đơn giản là một phiên bản "biến hóa" của hệ điều hành dựa trên nhân linux, được tùy biến tùy theo nhu cầu của người sử dụng.
:::

## 2. Các nhánh của linux và các bản phân phối

Linux được chia làm nhiều nhánh và các distro của nó được phát triển dựa trên từng nhánh riêng biệt này.
Linux hiện đang được chia làm các nhánh chính như sau:

### **Debian Based Linux Distributions**

- **Debian**: là nhánh mang hướng phi thương mại và là một trong những nhánh ra đời sớm nhất, được duy trì bởi cộng đồng phát triển mạnh mẽ. Có 3 nhánh chính của Debian được hỗ trợ dài hạn:
  - **Nhánh ổn định**: Đây là bản phát hành hiện tại, hướng tới độ tối ưu và ổn định một cách tối đa. Các phiên bản ổn định của Debian thường sẽ được phát hành sau một khoảng thời gian phiên bản thử nghiệm đã được nhà phát hành khắc phục gần hết lỗi lớn nhỏ (_thường có chữ LTS_).
  - **Nhánh thử nghiệm**: Đây là phiên bản tiếp theo của phiên bản ổn định ở hiện tại. Phiên bản thử nghiệm thường ẩn chứa nhiều lỗi trong hệ thống cùng packages không ổn định. Việc cập nhật lên phiên bản thử nghiệm quá sớm có thể khiến hệ thống của bạn không ổn định. Tuy nhiên đây cũng là lúc mà cộng đồng người dùng có thể đóng góp để giúp nhà phát hành khắc phục lỗi và cho ra thêm nhiều tính năng mới phù hợp với nhu cầu người dùng.
  - **Nhánh không ổn định**: Đây là nhánh được phát hành mà trong đó những packages chưa được thông qua kiểm tra nên sẽ tiêm ẩn nhiều nguy cơ xảy ra lỗi trong quá trình sử dụng.

![](static/dedian.png)

> Khám phá thêm về **Debian** [tại đây](https://www.debian.org/index.vi.html).

- **Ubuntu**: Được phát hành vào năm 2004, Ubuntu được dựa trên phiên bản không ổn định của Debian. Với sự phát triển, đóng góp của cộng đồng, Ubuntu đã và đang trở thành một trong những distro được sử dụng nhiều nhất. Ubuntu sử dụng giao diện đồ họa người dùng (GUI) **GNOME** (GNU Network Object Model Environment) mang đến một giao diện thân thiện với người dùng và chính nhờ vậy, đây là một distro phù hợp cho những người mới tiếp cận đến "Linux".

![](static/ubuntu.png)

> Khám phá thêm về **Ubuntu** [tại đây](https://ubuntu.com/).

- **Linux Mint**: Đây là một bản phân phối dựa trên Ubuntu. Linux Mint được đánh giá là có giao diện thân thiện nhất với người dùng Windows. Tương tự như các distro khác, Linux Mint có cộng đồng người dùng lớn, giúp cho distro này ngày càng phát triển mạnh và trở thành lựa chọn thay thế tốt cho Ubuntu.

![](static/mint.png)

> Khám phá thêm về **Linux Mint** [tại đây](https://linuxmint.com/).

- **Kali linux**: Là một bản phân phối dựa trên Debian, mục tiêu của nó là: tập hợp nhiều công cụ kiểm tra bảo mật và thâm nhập tốt nhất có thể trong một môi trường hệ điều hành. Bạn có thể tìm thấy nhanh gọn nhiều công cụ mã nguồn mở để thực hiện các quy trình kiểm thử (pentest), tấn công, điều tra số, dịch ngược, ... Kali Linux là hệ điều hành ưa thích của nhiều hacker trên thế giới.

![](static/kali.png)

> Khám phá thêm về **Kali Linux** [tại đây](https://www.kali.org/).

### **RPM Based Linux Distributions**

- **Fedora**: là nhánh được phân phối phi thương mại được phát hành bởi Red Hat, được tạo ra nhằm kiểm thử các công nghệ cho một bản phân phối thương mại khác của Red Hat, nơi mà các phần mềm nguồn mở mới được tạo lập, phát triển và kiểm thử trong phiên bản miễn phí trước khi đưa tính năng ấy chính thức vào Red Hat Enterprise.

![](static/fedora.jpg)

> Khám phá thêm về **Fedora** [tại đây](https://getfedora.org/).

- **OpenSUSE**: Đây là một dự án mã nguồn mở với các bản phân phối dựa trên Linux do SUSE - một công ty phần mềm mã nguồn mở, đa quốc gia, có trụ sở tại Đức phát triển và kinh doanh Linux cho các khách hàng doanh nghiệp. OpenSuse được biết đến với cả KDE Desktop và Gnome Desktop mang đến sự đa dạng cho người dùng.

![](static/opensuse.png)

> Khám phá thêm về **OpenSuse** [tại đây](https://www.opensuse.org/).

- **CentOS**: CentOS là một dự án mã nguồn mở được phát triển bởi Red Hat, Inc. là một công ty phần mềm Mỹ cung cấp sản phẩm phần mềm mã nguồn mở cho cộng đồng doanh nghiệp. CentOS sở hữu hai bản phân phối riêng biệt: CentOS Stream và CentOS Linux. CentOS Stream là nền tảng phát triển cho những bản phân phối Linux trong tương lai của Red Hat® Enterprise.

![](static/centos.png)

> Khám phá thêm về **CentOS** [tại đây](https://www.centos.org/).

### Một số bản phân phối khác

- **Slackware**: là nhánh đầu tiên được phân phối trên nhân linux. Slackware không có trình quản lý packages và tất cả phần mềm được biên dịch bởi quản trị viên hệ thống hoặc người dùng bình thường của hệ thống.

![](static/slackware.png)

> Khám phá thêm về **Slackware** [tại đây](http://www.slackware.com/).

- **Arch Linux**: một bản phân phối nhắm vào những người dùng Linux có kinh nghiệm và được duy trì bởi một cộng đồng mạnh mẽ trên tinh thần tình nguyện, cung cấp các packages chính thức và một loạt các packages không chính thức do người dùng gửi. Các packages thường được định hình để cài đặt bởi một tệp văn bản gọi là PKGBUILD (Ubunchuu sẽ có một chủ đề riêng tất tần tật về Arch Linux).

![](static/arch.png)

> Khám phá thêm về **Arch Linux** [tại đây](https://archlinux.org/).

:::info :bulb: **Hint**
Hãy cân nhắc chọn một Distro phù hợp với mình và có mục đích sử dụng phù hợp với nhu cầu của mình.
:::

> Không cần là người tốt nhất, chỉ cần đó là người phù hợp nhất.