function ready(fn){
  if(typeof document !== 'undefined'){
    if (document.readyState !== 'loading') {
      fn();
    } else {
      var listener = function() {
        document.removeEventListener('DOMContentLoaded', listener);
        
        fn();
      };

      document.addEventListener('DOMContentLoaded', listener);
    }
  }
}


export default ready;
