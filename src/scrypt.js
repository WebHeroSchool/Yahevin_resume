var scroll, timer, anchor, box, b;

var sideMenu = {
    works: document.getElementById('works__button'),
    skills: document.getElementById('skills__button'),
    repository: document.getElementById('repository__button'),
    burger: document.getElementById('sideMenu__burger'),
    sideBar: document.getElementById('sideMenu__sideBar'),
    burgSnippet1: document.getElementById('sideMenu__burger_snippet1'),
    burgSnippet2: document.getElementById('sideMenu__burger_snippet2'),
    burgSnippet3: document.getElementById('sideMenu__burger_snippet3'),
    tapChek: 0,
      

    makeButtons: function () {
        console.log() 
        this.works.onclick = this.scrollToWork;
        this.skills.onclick = this.scrollToSkills;
        this.repository.onclick = this.scrollToRepository;  
        this.burger.onclick = this.viewSideBar;
    },

    viewSideBar: function () {    
        let burger = sideMenu.burger;
        let sideBar = sideMenu.sideBar;
        let SBR = sideMenu.sideBar.style.right;
        let BR = sideMenu.burger.style.right;
        sideMenu.burgSnippet1.classList.toggle('taped1');
        sideMenu.burgSnippet2.classList.toggle('taped2');
        sideMenu.burgSnippet3.classList.toggle('taped3');
        if (!this.tapChek) {
            this.tapChek = 1;
            if (SBR == '') {SBR = '-280px'};
            if (BR == '') {BR = '20px'};
            (function open () {  
                BR = BR.slice(0,BR.lastIndexOf('p'));
                SBR = SBR.slice(0,SBR.lastIndexOf('p'));
                if (SBR < 0) {
                    BR = (+BR + 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    SBR = (+SBR + 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    sideBar.style.right = SBR;  
                    burger.style.right = BR;       
                    timer = setTimeout(open,5);
                }
                else {
                    clearTimeout(timer);
                    sideBar.style.right = 0;
                    burger.style.right = '300px'
                }              
            }())  
        }
        else {
            this.tapChek = 0;
            (function close () {  
                BR = BR.slice(0,BR.lastIndexOf('p'));
                SBR = SBR.slice(0,SBR.lastIndexOf('p'));
                if (SBR > -280) {
                    BR = (+BR - 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    SBR = (+SBR - 10* Math.sin(0.1 + 3*SBR/-280))+'px';
                    sideBar.style.right = SBR;  
                    burger.style.right = BR;       
                    timer = setTimeout(close,5);
                }
                else {
                    clearTimeout(timer);
                    sideBar.style.right = '-280px';
                    burger.style.right = '20px'
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
                scroll = scroll - 15 * Math.sin(0.1 + 3*scroll/anchor);
                timer = setTimeout(go,5);
            }
            else {
                clearTimeout(timer);
                window.scrollTo(0,anchor)
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
                scroll = scroll - 15 * Math.sin(0.1 + 3*scroll/anchor);
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
                scroll = scroll - 15 * Math.sin(0.1 + 3*scroll/anchor);
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