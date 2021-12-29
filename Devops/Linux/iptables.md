### iptables

简单使用：

```bash
# 查看列表
iptables -nL --line-number

# 注意：操作实时生效，重启后失效
# 往 INPUT 里增加允许访问的 IP
iptables -A INPUT -s 222.129.39.169 -j ACCEPT

# 拦截所有入站流量，注意！先加 IP 白名单后使用
iptables -P INPUT DROP

# 删除 INPUT 的第六行
iptables -D INPUT 6
```
