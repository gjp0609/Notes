
```shell
apt install vim
apt install ca-certificates apt-transport-https
vim /etc/apt/sources.list
apt update
apt install curl wget tmux rsync

vim ~/.bashrc
source ~/.bashrc
```

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
export GRAALVM_HOME=/data/jdks/graalvm-ce-17
export JAVA_HOME=$GRAALVM_HOME
export PATH=$JAVA_HOME/bin:$PATH

########## Maven Config ##########
export MAVEN_HOME=/root/.m2/apache-maven
export PATH=$MAVEN_HOME/bin:$PATH

########## Go Config ##########
export GO_PATH=/data/go/path
export GO_HOME=/data/go/go
export PATH=$GO_HOME/bin:$PATH
```

```shell
mkdir /data/
mkdir /data/bash/
mkdir /data/frp/
mkdir /data/code/
mkdir /data/go/
mkdir /data/go/go/
mkdir /data/go/path/
mkdir ~/.ssh/
cd ~/.ssh
touch authorized_keys
vim authorized_keys
```

```
apt install maven
mkdir ~/.m2/
yes | cp /mnt/c/Users/gjp06/.m2/settings-wsl.xml ~/.m2/settings.xml
```

#同步
##基础配置
log_bin=mysql-bin
server-id=2
binlog_format=mixed
relay_log_recovery=on
relay_log=mysql-relay-bin
slave-skip-errors=all
log-slave-updates=ON
auto-increment-increment=2
auto-increment-offset=2
##选择需要同步的库
binlog-do-db=epay_db
replicate-do-db=epay_db
