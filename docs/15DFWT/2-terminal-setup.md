---
title: Day 2 - Cấu hình Terminal Emulator
description: Cài đặt alacritty
slug: terminal-setup
authors: [lelouvincx, thangbuiq]
tags: [15DFWT, Terminal]
hide_table_of_contents: false
date: 2024-01-04
sidebar-position: 3
---

![](./static/day2-cover.png)

Trong bài viết này, chúng ta sẽ học cách cài đặt và tùy chỉnh terminal trên Ubuntu. Terminal là một phần quan trọng trong quá trình làm việc với Linux. Chúng ta sẽ sử dụng **Alacritty** làm terminal emulator.

![](static/day2-alacritty.png)


## Alacritty là gì? Vì sao rất nên dùng làm Terminal Emulator?

**Alacritty** là một terminal emulator nhanh và nhẹ, có tích hợp **GPU**. Nó được viết bằng **Rust** và có thể chạy trên nhiều hệ điều hành khác nhau như **Linux, macOS, Windows**.

> Ghé thăm trang chủ của Alacritty ở đây nhé: https://alacritty.org

![](static/day2-image.png)

Lý do nên yêu ngay Alacritty:
- Giao diện rất modern và đẹp (ngay cả khi để default): Alacritty được thiết kế để trông đẹp mắt ngay cả khi bạn không tùy chỉnh gì cả. Em nó có một **giao diện tối giản, nhưng rất thẩm mỹ.**

- Khả năng customizing cao: Alacritty cho phép ta tùy chỉnh mọi thứ, từ font chữ, màu sắc, đến các phím tắt. Nếu cánh cụt là một ubunchuu-er thì chắc chắn sẽ thích vọc vạch cả ngày với Alacritty.

- Hiệu năng cao: Alacritty được viết bằng Rust, một ngôn ngữ lập trình rất nổi tiếng về hiệu năng. Alacritty có thể chạy rất nhanh và nhẹ nhàng, đặc biệt là khi ta sử dụng nó để làm việc với các tools khác như vim, tmux, ...

## Cài đặt Alacritty

### Cài các packages dependencies

```bash
sudo apt-get install cmake pkg-config libfreetype6-dev libfontconfig1-dev libxcb-xfixes0-dev libxkbcommon-dev python3 git-core -y
```

### Thêm PPA repository và cài đặt thôi

``` bash
sudo add-apt-repository ppa:aslatter/ppa -y
sudo apt-get update
sudo apt-get install alacritty -y
```

> Mở Alacritty bằng cách search trong danh sách App thôi 🎉

## Welcome to Alacritty

![](static/day2-welcome.png)

Lúc này, Alacritty cơ bản đã được cài đặt thành công vào máy của bạn. Tuy nhiên, Alacritty vẫn sử dụng các config default và những thứ này hoàn toàn có thể customize lại được tùy ý theo ý thích của mình.

:::tip
Bạn có thể config thành như này
:::

![image](./static/day2-sample-alacritty.png)

## Tùy chỉnh Alacritty

Những config của Alacritty thường nằm trong một file YAML. Bạn có thể tìm default config tại **`~/.config/alacritty/alacritty.yml`** và chỉnh sửa theo ý muốn.

> Nếu không thấy file default, hãy clone ở đây về:
> https://github.com/tmcdonell/config-alacritty/blob/master/alacritty.yml

Một số field cần lưu ý khi config Alacritty:
* **font**: cho phép bạn chọn font chữ mặc định.
* **colors**: Bạn có thể tùy chỉnh màu sắc của terminal.
* **key_bindings**: cho phép bạn định nghĩa các phím tắt tùy chỉnh.

Hãy xem qua cấu trúc của file config YAML của Alacritty:

```yaml
env:
  TERM: xterm-256color

window:
  padding:
    x: 6
    y: 6

scrolling:
  history: 5000

font:
  normal:
    family: JetBrainsMono Nerd Font Mono
    style: Regular
  bold:
    family: JetBrainsMono Nerd Font Mono
    style: Bold
  italic:
    family: JetBrainsMono Nerd Font Mono
    style: Italic
  bold_italic:
    family: JetBrainsMono Nerd Font Mono
    style: Bold Italic
  size: 14.0 # Kích thước font chữ
  offset:
    x: 1
    y: 1

colors:
  # Chỗ này dùng để config theme cho terminal
  # Cánh cụt nhà mình có thể tham khảo thêm tại:
  # https://github.com/alacritty/alacritty-theme
background_opacity: 0.95 # Độ trong suốt của background

key_bindings:
  # Đây là phần config các shortcut, tùy chỉnh theo ý thích của mình thôi nhé
  # Xem syntax mẫu dưới đây nhé
  - { key: Home, mods: Shift, action: ScrollToTop, mode: ~Alt }
```

## Cài Alacritty làm terminal mặc định

```bash
sudo update-alternatives --install /usr/bin/x-terminal-emulator x-terminal-emulator $(which alacritty) 10
sudo update-alternatives --config x-terminal-emulator
```

## Cài đặt Nerd Font

Một list các nerd fonts mà nhà cánh cụt recommend:
```text
https://github.com/ryanoasis/nerd-fonts
```

Có nhiều nerd fonts cho bạn lựa chọn, nhưng ở đây recommend `JetBrains Mono Nerd Font Mono`.
Link download:
```text 
https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/JetBrainsMono.zip
```

1. Download file zip trên về bằng lệnh `wget` hoặc `curl`.
```bash
# Dùng wget để download
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/JetBrainsMono.zip

# Dùng curl để download
curl -L https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/JetBrainsMono.zip -O  JetBrainsMono.zip
```

:::info
Nếu không tìm được, có lẽ bạn đã chọn nhầm phiên bản release. Thử đổi về 1, 2 phiên bản cũ hơn nhé!
:::

![image](./static/day2-font-jetbrains.png)

2. Extract file zip vừa download về
```bash
unzip JetBrainsMono.zip
```
3. Place them into `~/.fonts`
```bash
mkdir -p ~/.fonts
cp JetBrainsMono/*.ttf ~/.fonts
```
4. Refresh font cache
```bash
fc-cache -f -v
```

**Alternative fonts**: Fira Code, Consolas, DejaVu Sans Mono, ...

## Config của Tux (bằng Toml)

### Config của Tux

Dựa vào hướng dẫn trên, Tux tin bạn có thể tự config theo ý thích của mình, hãy dành thời gian chơi đùa với alacritty nhé!

![image](./static/day2-config_meme.png)

Còn đây là config của Tux, bạn thấy hứng thứ có thể nghía qua nhe: https://github.com/ubunchuu-truong-us/dotfiles/blob/main/alacritty.toml

:::info
Nó sẽ trông như này
:::

![](./static/day2-preview_terminal.png)

## Uninstall alacritty

Nếu không thích emulator này, các bạn có thể bye bye em nó bằng lệnh:

```bash
sudo apt-get remove -y alacritty
```

### Other options

Về terminal emulator sẽ có rất nhiều option khác cho mọi người lựa chọn, như:
- Yakuake
- Terminator
- Tilda
- ...

Tuy nhiên, chúng mình sẽ không bao giờ giới thiệu và guide một cái gì không tốt cho mọi người. Khi mới bắt đầu học Linux và muốn nhập môn với bộ môn custom, tụi mình vẫn khuyên các bạn nên sử dụng **Alacritty**, đây cũng là cơ hội để chúng mình tập làm quen với việc config những cái cơ bản bằng file **YAML** (nếu bạn chưa dùng qua YAML bao giờ).

:::tip
Tin chúng mình đi, sau khi thử qua tất cả Emulator thì chúng mình đã nhận ra, **Alacritty** là mượt nhất 🌻
:::
