#删除input的第六行
iptables -D INPUT 6

#拦截所有入站流量，注意！先加IP白名单后使用
iptables -P INPUT DROP

#往input里增加允许访问的ip，
iptables -A INPUT -s 222.129.39.169 -j ACCEPT

#查看列表
iptables -nL --line-number
