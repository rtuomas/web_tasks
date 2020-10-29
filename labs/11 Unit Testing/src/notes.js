//module code
var notes = (function() {
  var list = [];

  return {
    add: function(note) {
      if (note && note.trim().length) {
        var item = {timestamp: Date.now(), text: note};
        list.push(item);
        return true;
      }
      return false;
    },
    remove: function(index) {
      if(list.length>0 && index>-1 && index<list.length){
        list.splice(index,1);
        return true
      }
      return false
    },
    count: function() {
      return list.length;
    },
    list: function() {},

    find: function(str) {
      if(str===undefined || str==='') return false;
      for(let i=0;i<list.length;i++){
        if(str===list[i].text){
          return i;
        }
      }
      return -1;
    },

    clear: function() {
      list.splice(0, list.length);
    }
  }
}());