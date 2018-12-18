# Miniapp Performance Test


### Page setData VS Component setData

**Code Snippet**

[Page setData](https://developers.weixin.qq.com/s/Aw06ZLmT7s4N)

[Component setData](https://developers.weixin.qq.com/s/i50aOLm37y4W)

**Key Code**

```
load () {
  let self = this;
  let s = +new Date();

  this.setData({ list: testData }, function () {
    let e2 = +new Date();
    self.setData({ loadtime: e2 - s });
  });
  let e1 = +new Date();
  this.setData({ runtime: e1 - s });
}
```

**Test Data Size**

924.802kb

**Result Screenshot**
![untitled-1](https://user-images.githubusercontent.com/2182004/50156157-f8c82a00-0308-11e9-9bbf-c2f972b1a314.png)


**Conclusion**

Component setData is much faster than Page setData
