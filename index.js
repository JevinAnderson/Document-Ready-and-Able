var ready = fn => {
  if(typeof document !== 'undefined'){
    if (document.readyState !== 'loading') {
      fn();
    } else {
      var listener = () => {
        document.removeEventListener('DOMContentLoaded', listener);
        
        fn();
      };

      document.addEventListener('DOMContentLoaded', listener);
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = ready;
} else {
  exports.ready = ready;
}

