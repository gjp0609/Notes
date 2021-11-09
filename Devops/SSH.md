### 免密登陆

-   ##### 生成公私钥

    客户端进入`~/.ssh/` 文件夹，生成公私钥

    ```shell
    ssh-keygen -t rsa -C "server_name"
    ```

-   ##### 复制公钥到服务端

    复制客户端生成的 `server_name_rsa.pub` 文件内容到服务端 `~/.ssh/authorized_keys`

-   ##### ssh 关闭密码登陆

    修改服务端 `/etc/ssh/sshd_config` 文件

    ```properties
    #PasswordAuthentication yes
    PasswordAuthentication no
    ```

    服务端执行

    ```shell
    systemctl restart sshd.service
    ```

-   ##### 客户端配置

    编辑 `~/.ssh/config` 文件，新增服务器配置

    ```config
    # Server Name
    Host servername
    HostName 192.168.1.123
    User root
    Port 22
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/server_name_rsa
    ```

    执行 `ssh root@servername` 即可登录服务器

### ssh via proxy

-   命令行

    执行 `ssh -o ProxyCommand="xxxx" root@servername`，ProxyCommand 内容参考下文

-   配置文件

    配置 `~/.ssh/config` 对应服务器新增一行

    -   Linux

        ```config
        # 走 HTTP 代理
        ProxyCommand socat - PROXY:127.0.0.1:%h:%p,proxyport=1080
        # 走 SOCKS 代理
        #ProxyCommand nc -v -x 127.0.0.1:1080 %h %p
        ```

    -   Windows

        ```config
        ProxyCommand connect -S 127.0.0.1:1080 -a none %h %p
        ```
