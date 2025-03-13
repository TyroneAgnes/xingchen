#!/bin/bash

# 获取本机 IP 地址
IP_ADDRESS=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -n 1)

echo "启动服务器，监听地址: $IP_ADDRESS"
echo "其他设备可以通过 http://$IP_ADDRESS:3000 访问"

# 使用 HOST 参数启动 Next.js
HOST=$IP_ADDRESS npm run dev 