    同步 ##基础配置
    log_bin=mysql-bin
    server-id=2
    binlog_format=mixed
    relay_log_recovery=on
    relay_log=mysql-relay-bin
    slave-skip-errors=all
    log-slave-updates=ON
    auto-increment-increment=2
    auto-increment-offset=2 ##选择需要同步的库
    binlog-do-db=xxx_db
    replicate-do-db=xxx_db