-   ### Debain Versions

    | Version | Codename |
    | ------: | :------: |
    |      12 | bookworm |
    |      11 | bullseye |
    |      10 |  buster  |
    |       9 | stretch  |
    |       8 |  jessie  |

-   ### Debian apt mirror

    ```bash
    apt install apt-transport-https ca-certificates
    vim /etc/apt/sources.list
    ```

    version: debian buster

    ```yaml
    deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free
    deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free
    deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free
    deb https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free
    ```
