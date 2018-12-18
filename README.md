# Miniapp Performance Test


### Page setData VS Component setData

**Code Snippet**

[Page setData]()

[Component setData]()

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

282kb

**Result**


**Conclusion**

Component setData is much faster than Page setData
