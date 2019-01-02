var scroll, timer, anchor;

var sideMenu = {
    works: document.getElementById('works__button'),
    skills: document.getElementById('skills__button'),
    repository: document.getElementById('repository__button'),

    works2: document.getElementById('works__button2'),
    skills2: document.getElementById('skills__button2'),
    repository2: document.getElementById('repository__button2'),

    works3: document.getElementById('works__button3'),
    skills3: document.getElementById('skills__button3'),
    repository3: document.getElementById('repository__button3'),

    contact: document.getElementById('contact__button'),
    about2: document.getElementById('about__button2'),
    works4: document.getElementById('works__button4'),
    skills4: document.getElementById('skills__button4'),
    repository4: document.getElementById('repository__button4'),
    
    about: document.getElementById('about__button'),
    burger: document.getElementById('sideMenu__burger'),
    sideBar: document.getElementById('sideMenu__sideBar'),
    pageBlock: document.getElementById('sideMenu__page'),
    burgSnippet1: document.getElementById('sideMenu__burger_snippet1'),
    burgSnippet2: document.getElementById('sideMenu__burger_snippet2'),
    burgSnippet3: document.getElementById('sideMenu__burger_snippet3'),
    swipeMenu: document.getElementById('swipeMenu'),
    swipeBar: document.getElementById('swipeBar'),
    closeButton: document.getElementById('swipeMenu__closeButton'),
    openButton: document.getElementById('header__swipeButton'),
    tapChek: 0,
      

    makeButtons: function () {
        this.works4.onclick = function () {          
            sideMenu.viewSideBar(sideMenu.scrollToWork);       
        }
        this.skills4.onclick = function () {          
            sideMenu.viewSideBar (sideMenu.scrollToSkills);       
        }
        this.repository4.onclick = function () {          
            sideMenu.viewSideBar (sideMenu.scrollToRepository);       
        }
        this.about2.onclick = function () {          
            sideMenu.viewSideBar (sideMenu.scrollToTop);       
        }
        this.contact.onclick = function () {          
            sideMenu.viewSideBar (sideMenu.scrollToContacts);       
        }

        this.works3.onclick = function () {          
            sideMenu.viewSideBar (4, sideMenu.scrollToWork);       
        }
        this.skills3.onclick = function () {          
            sideMenu.viewSideBar (4, sideMenu.scrollToSkills);       
        }
        this.repository3.onclick = function () {          
            sideMenu.viewSideBar (4, sideMenu.scrollToRepository);       
        }
        
        this.works2.onclick = this.scrollToWork;
        this.skills2.onclick = this.scrollToSkills;
        this.repository2.onclick = this.scrollToRepository; 
        this.works.onclick = this.scrollToWork;
        this.skills.onclick = this.scrollToSkills;
        this.repository.onclick = this.scrollToRepository; 
        this.about.onclick = this.scrollToTop; 
        this.burger.onclick = this.viewSideBar;

        this.closeButton.onclick = function () {          
            sideMenu.viewSwipeMenu (4);
        }
        this.openButton.onclick = function () {          
            sideMenu.viewSwipeMenu (2);
        }
    },

    viewSwipeMenu: function (direction,callback) {
        if (direction == 2) { 
            sideMenu.swipeMenu.classList.add('swipeMenu__open');
            let SMR = sideMenu.swipeMenu.style.right;
            if (SMR == '') {SMR = '-100vw'};        
            (function open () {        
                SMR = SMR.slice(0,SMR.lastIndexOf('v'));
                if (SMR < 0) {
                    SMR = (+SMR + 5* Math.sin(0.1 + 3*SMR/-100))+'vw';
                    sideMenu.swipeMenu.style.right = SMR;   
                    timer = setTimeout(open,5);
                }
                else {
                    clearTimeout(timer);
                    sideMenu.swipeMenu.style.right = '0vw';
                    sideMenu.swipeBar.style.left = 0; 
                }              
            }())                                
        }
        if (direction == 4) {    
            (function close () { 
                SMR = sideMenu.swipeMenu.style.right;
                SMR = SMR.slice(0,SMR.lastIndexOf('v'));
                if (SMR > -100) {
                    SMR = (+SMR - 5* Math.sin(0.1 + 3*SMR/-100))+'vw';
                    sideMenu.swipeMenu.style.right = SMR;
                    timer = setTimeout(close,5);
                }
                else {
                    clearTimeout(timer);
                    sideMenu.swipeMenu.classList.remove('swipeMenu__open');
                    sideMenu.swipeMenu.style.right = "-100vw";
                    sideMenu.swipeBar.style.right = 0;
                    sideMenu.swipeBar.style.left = 'inherit';
                    if (callback) {
                        callback ();
                    }
                }              
            }())
        }
    },

    viewSideBar: function (callback) {    
        let SBR = sideMenu.sideBar.style.right;
        let BR = sideMenu.burger.style.right;
        let PB = sideMenu.pageBlock.style.right;
        sideMenu.burgSnippet1.classList.toggle('taped1');
        sideMenu.burgSnippet2.classList.toggle('taped2');
        sideMenu.burgSnippet3.classList.toggle('taped3');
        if (!sideMenu.tapChek) {
            sideMenu.tapChek = 1;
            if (SBR == '') {SBR = '-280px'};
            if (BR == '') {BR = '20px'};
            if (PB == '') {PB = '138px'};
            (function open () {  
                PB = PB.slice(0,PB.lastIndexOf('p'));
                BR = BR.slice(0,BR.lastIndexOf('p'));
                SBR = SBR.slice(0,SBR.lastIndexOf('p'));
                if (SBR < 0) {
                    PB = (+PB + 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    BR = (+BR + 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    SBR = (+SBR + 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    sideMenu.sideBar.style.right = SBR;  
                    sideMenu.burger.style.right = BR; 
                    sideMenu.pageBlock.style.right = PB;   
                    timer = setTimeout(open,5);
                }
                else {
                    clearTimeout(timer);
                    sideMenu.sideBar.style.right = 0;
                    sideMenu.burger.style.right = '300px';
                    sideMenu.pageBlock.style.right = '418px';
                    callback ();
                }              
            }())  
        }
        else {
            sideMenu.tapChek = 0;
            (function close () { 
                PB = PB.slice(0,PB.lastIndexOf('p')); 
                BR = BR.slice(0,BR.lastIndexOf('p'));
                SBR = SBR.slice(0,SBR.lastIndexOf('p'));
                if (SBR > -280) {
                    PB = (+PB - 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    BR = (+BR - 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    SBR = (+SBR - 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    sideMenu.sideBar.style.right = SBR;  
                    sideMenu.burger.style.right = BR;
                    sideMenu.pageBlock.style.right = PB;  
                    timer = setTimeout(close,5);
                }
                else {
                    clearTimeout(timer);
                    sideMenu.sideBar.style.right = '-280px';
                    sideMenu.burger.style.right = '20px';
                    sideMenu.pageBlock.style.right = '138px';
                    callback ();
                }              
            }()) 
        }        
    },
    scrollToTop: function () {
        scroll = window.pageYOffset;
        anchor = scroll;
        function go () {
            if (scroll > 0) {
                window.scrollTo(0,scroll);
                scroll = scroll - 25 * Math.sin(0.1 + 3*scroll/anchor);               
                timer = setTimeout(go,5);
            }
            else {
                clearTimeout(timer);
                window.scrollTo(0,0);
            }
        }
        return go ();
    },
    scrollToSkills: function () {
        scroll = window.pageYOffset;
        box = document.getElementById('skills').getBoundingClientRect()
        anchor = box.top + scroll; 
        function go () {
            if (scroll < (anchor - 5)) {    
                window.scrollTo(0,scroll)
                scroll = scroll + 15 * Math.sin(0.1 + 3*scroll/anchor);
                timer = setTimeout(go,5);
            }
            else if (scroll > (anchor + 5)) {
                window.scrollTo(0,scroll)
                scroll = scroll - 15 * Math.sin(0.1 + 3*anchor/scroll);
                timer = setTimeout(go,5);
            }
            else {
                clearTimeout(timer);
                window.scrollTo(0,anchor+5)
            }   
        }
        return go ();
    },
    scrollToRepository: function () {
        scroll = window.pageYOffset;
        box = document.getElementById('repository').getBoundingClientRect()
        anchor = box.top + scroll;        
        function go () {
            if (scroll < (anchor - 5)) {    
                window.scrollTo(0,scroll)
                scroll = scroll + 15 * Math.sin(0.1 + 3*scroll/anchor);
                timer = setTimeout(go,5);
            }
            else if (scroll > (anchor + 5)) {
                window.scrollTo(0,scroll)
                scroll = scroll - 15 * Math.sin(0.1 + 3*anchor/scroll);
                timer = setTimeout(go,5);
            }
            else {
                clearTimeout(timer);
                window.scrollTo(0,anchor)
            }   
        }
        return go ();
    },
    scrollToWork: function () {
        scroll = window.pageYOffset;
        box = document.getElementById('works').getBoundingClientRect()
        anchor = box.top + scroll;        
        function go () {
            if (scroll < (anchor - 5)) {    
                window.scrollTo(0,scroll)
                scroll = scroll + 15 * Math.sin(0.1 + 3*scroll/anchor);  
                timer = setTimeout(go,5);
            }
            else if (scroll > (anchor + 5)) {
                window.scrollTo(0,scroll)
                scroll = scroll - 15 * Math.sin(0.1 + 3*anchor/scroll);
                timer = setTimeout(go,5);
            }
            else {
                clearTimeout(timer);
                window.scrollTo(0,anchor)
            }   
        }
        return go ();
    },
    scrollToContacts: function () {
        scroll = window.pageYOffset;
        box = document.getElementById('footer').getBoundingClientRect()
        anchor = box.top + scroll;        
        function go () {
            if (scroll < (anchor - 5)) {    
                window.scrollTo(0,scroll)
                scroll = scroll + 15 * Math.sin(0.1 + 3*scroll/anchor);  
                timer = setTimeout(go,5);
            }
            else if (scroll > (anchor + 5)) {
                window.scrollTo(0,scroll)
                scroll = scroll - 15 * Math.sin(0.1 + 3*anchor/scroll);
                timer = setTimeout(go,5);
            }
            else {
                clearTimeout(timer);
                window.scrollTo(0,anchor)
            }   
        }
        return go ();
    },
    
}


sideMenu.makeButtons();


var pages = {
    page1: 0,
    page2: 0,
    page3: 0,
    page4: 1,
    pageNumber: document.getElementById('sideMenu__pageBlock'),
    pageBar: document.getElementById('sideMenu__page'),

    onscr: function() {
        window.onscroll = function() {
            let scrolled = window.pageYOffset;
            let page1 = document.getElementById('header').getBoundingClientRect();
            let page2 = document.getElementById('skills').getBoundingClientRect();
            let page3 = document.getElementById('repository').getBoundingClientRect();
            let page4 = document.getElementById('hire').getBoundingClientRect();
         
            if ((page2.top>0)*(pages.page2<0))  {      
                pages.page2 = page2.top;             
                pages.pageAnimation ();            
                return pages.pageNumber.innerHTML = '1';   
            }
            if (((page3.top>0)*(pages.page3<0)) || ((page2.top<0)*(pages.page2>0))) {      
                pages.page3 = page3.top;
                pages.page2 = page2.top;
                pages.pageAnimation ();
                return pages.pageNumber.innerHTML = '2';   
            }
            if (((page4.top>0)*(pages.page4<0)) || ((page3.top<0)*(pages.page3>0))) {      
                pages.page4 = page4.top;
                pages.page3 = page3.top;
                pages.pageAnimation ();
                return pages.pageNumber.innerHTML = '3';   
            }
            if ((page4.top<0)*(pages.page4>0)) {
                pages.page4 = page4.top;
                pages.pageAnimation ();
                return pages.pageNumber.innerHTML = '4'; 
            }

            pages.page1 = page1.top;
            pages.page2 = page2.top;
            pages.page3 = page3.top;
            pages.page4 = page4.top;
            return    
        }
    },
    pageAnimation: function () {
        this.pageBar.animate(
            [   {opacity: 0},
                {opacity: 1, offset: 0.1},
                {opacity: 1, offset: 0.75},
                {opacity: 0}         
            ],3000)
    }
}
pages.onscr ()

