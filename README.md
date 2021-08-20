# frida_termux

## 需求: 不依赖pc, 让frida hook操作在手机上实现.

## 环境: Pixel 8.1, ubantu 18.04 LTS, termux(一款app, 模拟linux系统, 就相当于一台linux主机) 已上传termux.该app版本需要 Android 7.0 及以上版本。 

## 实操

 
    # 安装apk, 将脚本推入手机
    adb install com.termux_117.apk
    adb push java.js /sdcard/
    
    # 进入到手机, 修改frida脚本的文件权限, 并将该脚本移动到 /data/data/com.termux/files/home/ 目录
    adb shell
    su
    mv /sdcard/java.js /storage/　　　# 踩坑处, 在/sdcard目录下修改java.js文件权限不生效
    cd /storage/
    chmod 777 java.js
    cp java.js /data/data/com.termux/files/home/　　# 将hook脚本放在在termux 目录中
    
    # 在termux中准备python,以及frida环境
    手机打开termux 输入pwd 可以看到目前路径位于 /data/data/com.termux/files/home/
    输入  pkg install python  安装python最新版本3.9
    
    安装依赖
    在termux 中输入  termux-setup-storage   获取android设备文件操作
    pkg install python
    pkg install tsu
    pkg install root-repo
    pkg install frida-tools   # 注意　frida-tools 要通过 包管理来装, 不要通过pip3 安装
    pip3 install -r requirements.txt
    
    启动frida监听27042端口, 以及执行hook脚本
    cd /data/local/tmp
    ./frida_server -l 0.0.0.0:27042  
    frida -H 172.16.91.33:27042  com.comeback.data  -l java.js
    当然也可以通过frida -U 的方式来指定usb设备, 我测试的时候, adb devices正常，但是frida -U 就是wating for usb device appear