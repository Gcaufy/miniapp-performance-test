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
    self.setData({ loadtime: e1 - s });
  });
  let e1 = +new Date();
  this.setData({ runtime: e1 - s });
}
```

**Test Data Size**

924.802kb

**Result**
![untitled-1](https://user-images.githubusercontent.com/2182004/50155314-bdc4f700-0306-11e9-855e-06e71b38641f.png)


**Conclusion**

Component setData is much faster than Page setData
