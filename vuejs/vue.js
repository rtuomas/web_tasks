var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  },
  computed: {
    count: function() {
      return this.message.length
    }
  }
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  },
  methods: {
    Vaihda: function()  {
      this.seen = !this.seen;
    }
  }
});

const math = new Vue({
  el: '#math',
  data: {
    count: 0
  },
  methods: {
    Minus: function()  {
      this.count--;
    },
    Zero: function()  {
      this.count=0;
    },
    Plus: function()  {
      this.count++;
    }
  }
});

let todo = ['TODO1', 'TODO2'];
const list = new Vue({
  el: '#list',
  data: {
    message: '',
    list: todo
  },
  methods: {
    Add: function(){
      this.list.push(this.message);
      this.message='';
    },
    deleteFirst: function(){
      this.list.shift();
    },
    deleteThis: function(i){
      this.list.splice(i,1);
    }
  }
});