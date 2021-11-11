-   #### apt mirror

    ```bash
    # 替换为清华镜像源
    cat>/etc/apt/sources.list<<EOF
    deb http://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free
    deb http://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free
    deb http://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free
    deb http://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free
    EOF
    # 更新
    apt update
    # 更换为 https
    apt install ca-certificates apt-transport-https
    awk '{ sub(/http/,"https"); print $0 }' /etc/apt/sources.list > /etc/apt/sources.list.tmp && mv -f /etc/apt/sources.list.tmp /etc/apt/sources.list
    apt update
    # 安装常用软件
    apt install vim curl wget tmux rsync
    ```

-   #### bashrc

    编辑 `~/.bashrc`，执行 `source ~/.bashrc` 立即生效。文件内容：

    ```bash
    ########## 基础配置 ##########
    export LS_OPTIONS='--color=auto'
    eval "`dircolors`"
    alias ls='ls $LS_OPTIONS'
    alias ll='ls $LS_OPTIONS -l'
    alias l='ls $LS_OPTIONS -lA'
    # Some more alias to avoid making mistakes:
    alias rm='rm -i'
    alias cp='cp -i'
    alias mv='mv -i'

    ########## History Config ##########
    # 忽略重复、忽略空格开头、删除重复
    export HISTCONTROL=ignoreboth:erasedups
    # 日期格式
    export HISTTIMEFORMAT='%y-%m-%d %T '
    # 缓存数量
    export HISTSIZE=10000
    # 存储数量
    export HISTFILESIZE=100000
    # 存储文件位置
    export HISTFILE=/data/bash/.bash_history

    ########## GraalVM Config ##########
    export GRAALVM_HOME=/data/jdks/graalvm-ce-java17
    export JAVA_HOME=$GRAALVM_HOME
    export PATH=$JAVA_HOME/bin:$PATH

    ########## Maven Config ##########
    export MAVEN_HOME=/root/.m2/apache-maven
    export PATH=$MAVEN_HOME/bin:$PATH

    ########## Go Config ##########
    export GO_PATH=/data/go/path
    export GO_HOME=/data/go/go1.17.1
    export PATH=$GO_HOME/bin:$PATH
    ```

    ```shell
    mkdir -p /data/bash/
    mkdir -p /data/code/
    mkdir -p /data/frp/
    mkdir -p /data/go/path/
    mkdir -p /data/go/go1.17.1/
    mkdir -p /data/jdks/graalvm-ce-java17/
    ```
