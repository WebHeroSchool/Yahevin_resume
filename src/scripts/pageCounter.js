var pagesCounter = function () {
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
    return pages.onscr ()
}
