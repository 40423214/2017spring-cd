var tipuesearch = {"pages":[{"title":"About","url":"./pages/about/","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","tags":"misc"},{"title":"201703018 Week 3","url":"./Week 3.html","text":"Fourbar 零件繪製 Link_30: SolveSpace Onshape 尺寸圖 Link_50: SolveSpace Onshape 尺寸圖 Link_60: SolveSpace Onshape 尺寸圖 Fourbar組裝: SolveSpace Onshape","tags":"Course"},{"title":"Week 2- Solvespace 畫出四連桿機","url":"./Week 2.html","text":"分組座位原始碼 #import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() #讀取w2b_cadlab.txt 檔案,讓裡面的內容成為資料, 因為檔案裡有中文, 所以設定encoding 使用utf-8 的編驛碼 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #print(adata) #用print 先檢查資料是否是我們需要的 alist = adata.splitlines() #利用splitlines 的方法把資料隔開, 就可以得到一個特定的數列 #print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: #從第2列開始, 因為第0列和第1列都不是我們要的 row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 #為了避免序號連續, 利用column = 0 將順序重製, 因為每一列算完之後要換下一列重新開始 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) #print(os.environ) 四連桿 利用 Solvespace 畫出四連桿機構雛形, 觀察此四連桿機構的運作模式 2017-03-15_11-31-51 from 李奇軒 on Vimeo . 心得 這機構因為是最基本的四連桿所組成﹐所以還算是簡單","tags":"Course"},{"title":"Week 1- stunnel.conf 的 IP 設定","url":"./Week 1.html","text":"更改stunnel.conf 的 IP 設定 打上ipconfig /all指令﹐找到此台電腦的IP位置﹐開啟launchLeo.py﹐更改成此台電腦的IP即完成 2017-04-12_08-48-14 from 李奇軒 on Vimeo . 心得: 每次做GITHUB作業前都會要設定一次stunnel的IP﹐所以看似簡單的步驟其實還是挺重要的","tags":"Course"},{"title":"Glyphicons","url":"./glyphicons.html","text":"glyphicon glyphicon-asterisk glyphicon glyphicon-plus glyphicon glyphicon-euro glyphicon glyphicon-minus glyphicon glyphicon-cloud glyphicon glyphicon-envelope glyphicon glyphicon-pencil glyphicon glyphicon-glass glyphicon glyphicon-music glyphicon glyphicon-search glyphicon glyphicon-heart glyphicon glyphicon-star glyphicon glyphicon-star-empty glyphicon glyphicon-user glyphicon glyphicon-film glyphicon glyphicon-th-large glyphicon glyphicon-th glyphicon glyphicon-th-list glyphicon glyphicon-ok glyphicon glyphicon-remove glyphicon glyphicon-zoom-in glyphicon glyphicon-zoom-out glyphicon glyphicon-off glyphicon glyphicon-signal glyphicon glyphicon-cog glyphicon glyphicon-trash glyphicon glyphicon-home glyphicon glyphicon-file glyphicon glyphicon-time glyphicon glyphicon-road glyphicon glyphicon-download-alt glyphicon glyphicon-download glyphicon glyphicon-upload glyphicon glyphicon-inbox glyphicon glyphicon-play-circle glyphicon glyphicon-repeat glyphicon glyphicon-refresh glyphicon glyphicon-list-alt glyphicon glyphicon-lock glyphicon glyphicon-flag glyphicon glyphicon-headphones glyphicon glyphicon-volume-off glyphicon glyphicon-volume-down glyphicon glyphicon-volume-up glyphicon glyphicon-qrcode glyphicon glyphicon-barcode glyphicon glyphicon-tag glyphicon glyphicon-tags glyphicon glyphicon-book glyphicon glyphicon-bookmark glyphicon glyphicon-print glyphicon glyphicon-camera glyphicon glyphicon-font glyphicon glyphicon-bold glyphicon glyphicon-italic glyphicon glyphicon-text-height glyphicon glyphicon-text-width glyphicon glyphicon-align-left glyphicon glyphicon-align-center glyphicon glyphicon-align-right glyphicon glyphicon-align-justify glyphicon glyphicon-list glyphicon glyphicon-indent-left glyphicon glyphicon-indent-right glyphicon glyphicon-facetime-video glyphicon glyphicon-picture glyphicon glyphicon-map-marker glyphicon glyphicon-adjust glyphicon glyphicon-tint glyphicon glyphicon-edit glyphicon glyphicon-share glyphicon glyphicon-check glyphicon glyphicon-move glyphicon glyphicon-step-backward glyphicon glyphicon-fast-backward glyphicon glyphicon-backward glyphicon glyphicon-play glyphicon glyphicon-pause glyphicon glyphicon-stop glyphicon glyphicon-forward glyphicon glyphicon-fast-forward glyphicon glyphicon-step-forward glyphicon glyphicon-eject glyphicon glyphicon-chevron-left glyphicon glyphicon-chevron-right glyphicon glyphicon-plus-sign glyphicon glyphicon-minus-sign glyphicon glyphicon-remove-sign glyphicon glyphicon-ok-sign glyphicon glyphicon-question-sign glyphicon glyphicon-info-sign glyphicon glyphicon-screenshot glyphicon glyphicon-remove-circle glyphicon glyphicon-ok-circle glyphicon glyphicon-ban-circle glyphicon glyphicon-arrow-left glyphicon glyphicon-arrow-right glyphicon glyphicon-arrow-up glyphicon glyphicon-arrow-down glyphicon glyphicon-share-alt glyphicon glyphicon-resize-full glyphicon glyphicon-resize-small glyphicon glyphicon-exclamation-sign glyphicon glyphicon-gift glyphicon glyphicon-leaf glyphicon glyphicon-fire glyphicon glyphicon-eye-open glyphicon glyphicon-eye-close glyphicon glyphicon-warning-sign glyphicon glyphicon-plane glyphicon glyphicon-calendar glyphicon glyphicon-random glyphicon glyphicon-comment glyphicon glyphicon-magnet glyphicon glyphicon-chevron-up glyphicon glyphicon-chevron-down glyphicon glyphicon-retweet glyphicon glyphicon-shopping-cart glyphicon glyphicon-folder-close glyphicon glyphicon-folder-open glyphicon glyphicon-resize-vertical glyphicon glyphicon-resize-horizontal glyphicon glyphicon-hdd glyphicon glyphicon-bullhorn glyphicon glyphicon-bell glyphicon glyphicon-certificate glyphicon glyphicon-thumbs-up glyphicon glyphicon-thumbs-down glyphicon glyphicon-hand-right glyphicon glyphicon-hand-left glyphicon glyphicon-hand-up glyphicon glyphicon-hand-down glyphicon glyphicon-circle-arrow-right glyphicon glyphicon-circle-arrow-left glyphicon glyphicon-circle-arrow-up glyphicon glyphicon-circle-arrow-down glyphicon glyphicon-globe glyphicon glyphicon-wrench glyphicon glyphicon-tasks glyphicon glyphicon-filter glyphicon glyphicon-briefcase glyphicon glyphicon-fullscreen glyphicon glyphicon-dashboard glyphicon glyphicon-paperclip glyphicon glyphicon-heart-empty glyphicon glyphicon-link glyphicon glyphicon-phone glyphicon glyphicon-pushpin glyphicon glyphicon-usd glyphicon glyphicon-gbp glyphicon glyphicon-sort glyphicon glyphicon-sort-by-alphabet glyphicon glyphicon-sort-by-alphabet-alt glyphicon glyphicon-sort-by-order glyphicon glyphicon-sort-by-order-alt glyphicon glyphicon-sort-by-attributes glyphicon glyphicon-sort-by-attributes-alt glyphicon glyphicon-unchecked glyphicon glyphicon-expand glyphicon glyphicon-collapse-down glyphicon glyphicon-collapse-up glyphicon glyphicon-log-in glyphicon glyphicon-flash glyphicon glyphicon-log-out glyphicon glyphicon-new-window glyphicon glyphicon-record glyphicon glyphicon-save glyphicon glyphicon-open glyphicon glyphicon-saved glyphicon glyphicon-import glyphicon glyphicon-export glyphicon glyphicon-send glyphicon glyphicon-floppy-disk glyphicon glyphicon-floppy-saved glyphicon glyphicon-floppy-remove glyphicon glyphicon-floppy-save glyphicon glyphicon-floppy-open glyphicon glyphicon-credit-card glyphicon glyphicon-transfer glyphicon glyphicon-cutlery glyphicon glyphicon-header glyphicon glyphicon-compressed glyphicon glyphicon-earphone glyphicon glyphicon-phone-alt glyphicon glyphicon-tower glyphicon glyphicon-stats glyphicon glyphicon-sd-video glyphicon glyphicon-hd-video glyphicon glyphicon-subtitles glyphicon glyphicon-sound-stereo glyphicon glyphicon-sound-dolby glyphicon glyphicon-sound-5-1 glyphicon glyphicon-sound-6-1 glyphicon glyphicon-sound-7-1 glyphicon glyphicon-copyright-mark glyphicon glyphicon-registration-mark glyphicon glyphicon-cloud-download glyphicon glyphicon-cloud-upload glyphicon glyphicon-tree-conifer glyphicon glyphicon-tree-deciduous","tags":"Course"}]};