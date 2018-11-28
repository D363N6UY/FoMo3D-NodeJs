# 合約發布

利用[Remix](https://remix.ethereum.org/#optimize=false&version=soljson-v0.4.24+commit.e67f0147.js)

1. 順序為TeamJust、PlayberBook、fomo3d.sol，合約內相關地址要互相綁定

2. 發布完畢後

    在Playbook要調用`addGame`，
    添加fomo3d的地址，再調用`activate`, 運行fomo3d。

`note`:

1. 在```TeamJust.sol裡面有很多個0x0000000000000000000000000000000000000000```
是用來設定合約權限管理員，要修改成自己的地址，才能調用像是```addGame、activate```的動作

2. 在```PlayerBook.sol內的0x0000000000000000000000000000000000000000```是開場就註冊，可以直接邀請使用者獲得推薦獎勵的內建地址，不用花0.01eth註冊費，name1...這些是註冊名稱

3.這裡是拆FoMo3D Short山寨版的
