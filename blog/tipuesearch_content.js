var tipuesearch = {"pages":[{"title":"About","text":"2016Fall 修課成員網誌","url":"./pages/about/","tags":"misc"},{"title":"2017-06-27  Ubuntu中啟動stunnel和fossil","text":"stunnel和fossil的安裝 1.sudo apt update 先更新 2.sudo apt install stunnel4 -y 安裝stunnel 3.sudo apt install fossil 安裝fossil 啟動設定: 進入/etc/environment中 改HTTPS=on 進入/etc/default/stunnel4中 改ENABLED=1 stunnel設定和fossil: stunnel.conf sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt 建立local.key和local.crt /etc/stunnel/stunnel.conf設定支援IPV6 [https] accept = :::443 cert = /etc/stunnel/localhost.crt key = /etc/stunnel/localhost.key exec = /usr/bin/fossil execargs = /usr/bin/fossil http /home/user/ repository/mde2a1.fossil --https --nojail --nojail 目的在 drop the root privilege but do not enter the chroot jail 重新啟動 stunnel4 則使用 /etc/init.d/stunnel4 restart 設定完成後, 重新開機即可以 https://yourip 連結至自己組別的主機 由於本人電腦不給力,無法拍攝影片","url":"./2017-06-27-ubuntuzhong-qi-dong-stunnelhe-fossil.html","tags":"Misc"},{"title":"2017-06-26  安裝Ubuntu16.04","text":"安裝Unbutu的前置作業 這學期我們學了另一種作業系統Unbutu16.04 先準備2台舊電腦把還原卡拔除.拔起電池3秒再裝回.把硬碟裝一起.把2個4G的RAM合併成8G的RAM.開機測試B一聲OK B好幾聲不OK 之後在BIOS模式下設定開機順序由光碟先 安裝完後設定: 1.開機順序由硬碟優先 2.側蓋打開能繼續操作 3.斷電.恢復電時自動開機 之後就等安裝完成 sudo apt-get install ubuntu-desktop 安裝介面","url":"./2017-06-26-an-zhuang-ubuntu1604.html","tags":"Misc"},{"title":"2017-06-25  IPV4跳IPV6","text":"啟動Xming sever 打開putty 設定Host Name:wcmg7.kmol.info proxy設定:1.點選HTTP 2.proxy hostname:proxy.kmol.info(Port:3128) 2017-06-25_20-01-39 from 陳崴 on Vimeo .","url":"./2017-06-25-ipv4tiao-ipv6.html","tags":"Misc"},{"title":"2017-04-26  期中心得","text":"1.這次老師也教了很多新的東西,雖然有很多我還是不懂,但是我 也盡力了,像是virtualbox的安裝.ubuntu的安裝加上裡面也要設定 網路和一些小地方. 2.上次老師教的如何在虛擬主機開啟伺服器,這個我就沒做成功, 開一個伺服器原來是那麼難的一件事情,雖然我很想學但是再 短時間內學會可能有些困難. 3.從一開始上課到現在目前教過的程式加上一些實用的技能,真的 很謝謝老師那麼用心的教導,雖然不是全部都有學起來,但我相信以 後一定會應用上的.","url":"./2017-04-26-qi-zhong-xin-de.html","tags":"Misc"},{"title":"2017-04-25  製作網路線心得","text":"須先準備1條568B線.壓線鉗.接頭 先用壓線鉗把外套拆掉.再把裡面4對線分別分開 把8條線按照(白橘.橘.白綠.藍.白藍.綠.白棕.棕) 用整齊再對齊.套入接頭用力壓到底 再用壓線鉗壓緊.大功告成 這是第一次自己拆線再組起來 作起來超麻煩的 而且做出來還不一定就成功 還有可能失敗 失敗就又要再來過 原來做網路線是很麻煩的事情","url":"./2017-04-25-zhi-zuo-wang-lu-xian-xin-de.html","tags":"Misc"},{"title":"2017-04-24-2  IP指令","text":"1.查自己的IP:ipconfing /all 2.ping 自己 IP 3.ping Gateway IP 4.ping 外部 Gateway 5.ping 外部 Ip 6.tracert 區域網路主要網站 7.tracert 廣域網路主要 8.ls -l 長型列印 long list 9.clear (cls)","url":"./2017-04-24-2-ipzhi-ling.html","tags":"Misc"},{"title":"2017-04-24-3  fossil指令","text":"1.fossil clone uri fossil_file 載 uri fossil_file下來 2.fossil open 開啟fossil 3.fossil add 更新fossil 4.fossil commint -m 附加訊息 5.fossil remote-url off 遙控 url 關閉 6.fossil push 回推 7.fossil sql -R vcp.fossil 查資料 select login,pw,cap from user; 選擇要的資料","url":"./2017-04-24-3-fossilzhi-ling.html","tags":"Misc"},{"title":"2017-04-24-4  nginx安裝","text":"1.sudo apt update 下載安裝更新 2.sudo rm /var/lib/dpkg/lock 刪除lock 3.sudo apt install nginx 安裝nginx 4.ifconfig 查ip 5.cd /var/www/html 指定到/var/www/html 6.ls -l 列出目前資料夾 7.sudo vi index.nginx-debian.html 進入index.nginx-debian.html編輯 8.clear 清除所有指令 9.history 列出所有指令","url":"./2017-04-24-4-nginxan-zhuang.html","tags":"Misc"},{"title":"2017-04-24  上課筆記","text":"即便我不知道完整答案我也會舉例 設計是一種表達 表達意義在\"設\"上 1.口語表達 2.文字表達 3.2D圖像表達 4.3D圖像表達 5.量化.定性方法 6.實際操作 精巧配置東西 用固體.液體.軟體 機:很多元件批湊合成可運作 械:控制在一個範圍 器物有特定功能 設:表達出來給別人做 計:經過很多思考討論考量 熱泵(HEAT PUMP):可將能量由低溫處（低溫熱庫）傳送到高溫處（高溫熱庫） 在各種元件間最佳化 我們要利用 虛實整合設計工程師 虛:數位化 實:實作 網際內容管理在\"虛\"裡做\"實\"的內容 10/100 Mbps 1byte= 8bits DNS:網域名稱系統(Domain Name System)","url":"./2017-04-24-shang-ke-bi-ji.html","tags":"Misc"},{"title":"2017-04-23 如何開啟USB裡的cmsimfly","text":"開啟USB裡的cmsimfly 利用指令在近端開啟cmsimfly: 1.cd tmp 2.cd cmsimfly 3.python wsgi.py 2017-04-25_17-33-29 from 陳崴 on Vimeo .","url":"./2017-04-23-ru-he-kai-qi-usbli-de-cmsimfly.html","tags":"Misc"}]};