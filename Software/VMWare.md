## Vmware Player

-   ### 全屏隐藏工具条

    在 `~/AppData/Roaming/VMware/preferences.ini` 添加：`pref.vmplayer.fullscreen.nobar = "TRUE"`

-   ### 端口映射

    编辑 `C:\ProgramData\VMware\vmnetnat.conf`

    在 `[incomingtcp]` 下新增一行

    ```properties
    # [主机端口号] = [虚拟机 IP]:[端口号]
    8888 = 192.168.200.123:8080
    ```

    ![vmnetnat.conf.png](./images/vmnetnat.conf.png)

    即可在主机以 `127.0.0.1:8888` 访问虚拟机中 `:8080` 的服务