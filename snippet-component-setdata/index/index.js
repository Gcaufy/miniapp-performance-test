import mock from '../data/data';


let totalLength = mock.length;
let testData = mock.slice(0, totalLength);


Component({
  data: {
    title: 'Native Data Binding Test (Best)',
    totalLength: totalLength,
    loadtime: '---',
    runtime: '---'
  },
  methods: {
    load() {
      let self = this;
      let s = +new Date();

      this.setData({ list: testData }, function () {
        let e2 = +new Date();
        self.setData({ loadtime: e1 - s });
      });
      let e1 = +new Date();
      this.setData({ runtime: e1 - s });
    }
  }
})
