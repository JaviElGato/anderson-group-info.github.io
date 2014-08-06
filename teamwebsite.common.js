            function setpanelheights()
            {
                var winheight = $(window).height();
                $('.panel').each(function(){
                   //$(this).height(winheight);
                   $(this).css('minHeight', winheight);
                });                        

            }


            function resizecallbacks()
            {
                setpanelheights();
            }



            $(function() {
                setpanelheights();   
                //arrangegallerygrid();
                $(window).resize(resizecallbacks);
            }); 
