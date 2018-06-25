const App = {
    count: 0,
    init(){
      this.cacheDom();
      this.bindEventListeners();
      this.render();
    },
    cacheDom(){
      this.root = document.querySelector('#app');
      this.forwardBtn = this.root.querySelector('.forward');
      this.backBtn = this.root.querySelector('.back');
      this.display = this.root.querySelector('.display');
    },
    bindEventListeners(){
      this.forwardBtn.addEventListener('click', this.goForward.bind(this));
      this.backBtn.addEventListener('click', this.goBack.bind(this));
    },
    goBack(){
      this.count -= 1;
      this.render();
      //if count = 0,3,6,9,12 show RED + or -
      //if count = 1,4,7,10,13 show GREEN + or -
      //if count = 2,5,8,11, 14 show BLUE + or -


    },
    goForward(){
      this.count += 1;
      this.render();
    },
    render(){
     this.display.textContent = this.count;

     if {
         //(index + arr.lenght) % arr.length = 0 SHOW RED
     }
     else if {
         //(index + arr.lenght) % arr.length = 1 SHOW GREEN
     }

     else if {
         //(index + arr.lenght) % arr.length = 2 SHOW BLUE
     }

     else {
         console.log('Do you need some help?')
     }

    }
  };
  
  App.init();
  window.App = App;