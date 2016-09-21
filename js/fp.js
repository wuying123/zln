$(function(){
    $('.fullpage').fullpage({
        "navigation":true,
        "navigationPosition":"left",
        "navigationColor":"red",
        "css3":true,
        menu: '#menu',
        'anchors':['page1','page2','page3','page4','page5','page6','page7','page8'],
        'navigationTooltips':["Why Choose Me?","My   Skill","My   Product","My   Product","contact me"],
        afterLoad:function(anchorLink,index){
            if(index==1){
                $('.nav').transition({'top':0},500,'ease');
            }
            if(index==2){
                $('.two-list .title').transition({'scale':1},500,'ease',function () {
                    $('.two-list .xian').transition({'scale':1},300,'ease',function () {
                        $('.two-list .small-title').transition({'scale':1},200,'ease')
                    });
                });
                $('.two-list ul').transition({'scale':1},500,'ease');
            }
            if(index==3){
                $('.show-skill h1').transition({'scale':1},300,'ease',function(){
                    $('.tip').transition({'scale':1},500,'ease',function(){
                        $('.xian').transition({'scale':1},500,'ease',function(){})
                    });
                });
                $('.show-skill .title li').eq(0).transition({x:0},800,'ease');
                $('.show-skill .title li:eq(1)').transition({y:0},800,'ease');
                $('.show-skill .title li:eq(2)').transition({x:0},800,'ease');
                $('.show-skill .box-ban .item:eq(0)').transition({y:0,'opacity':1},1000,'ease')
            }
            if(index==4){
                $('.show-product1 h1').transition({'scale':1},0,'ease',function(){
                    $('.show-product1 .small-title').transition({'scale':1},100,'ease',function(){
                        $('.show-product1 .con-title').transition({'scale':1},500,'ease',function(){})
                    });
                });
                $('.show-product1 .con li:eq(0)').transition({y:0},0,'ease',function () {
                    $('.show-product1 .con li:eq(1)').transition({y:0},300,'ease',function () {
                        $('.show-product1 .con li:eq(2)').transition({y:0},300,'ease',function () {
                            $('.show-product1 .con li:eq(3)').transition({y:0},300,'ease',function () {
                            })
                        })
                    })
                })
            }
            if(index==5){
                $('.show-product2 h1').transition({'scale':1},0,'ease',function(){
                    $('.show-product2 .small-title').transition({'scale':1},300,'ease',function(){
                        $('.show-product2 .con-title').transition({'scale':1},300,'ease',function(){})
                    });
                });
                $('.show-product2 .zz-con li').transition({'opacity':1},500,'ease')
            }
            if(index==6){
                $('.show-product3 h1').transition({'scale':1},100,'ease',function(){
                    $('.show-product3 .small-title').transition({'scale':1},300,'ease',function(){
                        $('.show-product3 .con-title').transition({'scale':1},300,'ease',function(){})
                    });
                });
                $('.icon-show .icon-item:eq(0)').transition({y:0},200,'ease',function () {
                    $('.icon-show .icon-item:eq(1)').transition({y:0},200,'ease',function () {
                        $('.icon-show .icon-item:eq(2)').transition({y:0},200,'ease',function () {
                            $('.icon-show .icon-item:eq(3)').transition({y:0},200,'ease',function () {
                                $('.icon-show .icon-item:eq(4)').transition({y:0},200,'ease',function () {
                                    $('.icon-show .icon-item:eq(5)').transition({y:0},200,'ease',function () {
                                    })
                                })
                            })
                        })
                    })
                })
            }
            if(index==7){
                $('.show-product4 .con-list li').animate({'opacity':1},100,function(){
                    $(this).transition({y:0},500,'ease');
                });
                $('.show-product4 h1').transition({'scale':1},100,'ease',function(){
                    $('.show-product4 .small-title').transition({'scale':1},300,'ease',function(){
                        $('.show-product4 .con-title').transition({'scale':1},300,'ease',function(){
                            $('.show-product4 .class').transition({'scale':1},300,'ease',function(){
                            })
                        })
                    });
                });
            }
            if(index==8){
                $('.foot .title h1').transition({'scale':1},500,'ease',function(){
                    $('.foot .title span').transition({'scale':1},300,'ease',function(){
                        $('.foot .title .small-title').transition({'scale':1},500,'ease',function(){
                        })
                    });
                });
                $('.foot .con li').transition({'opacity':1,y:0},500,'ease');
            }
        },
        onLeave:function(index,direction){
            if(index==1){
                $('.nav').transition({'top':-130},500,'ease');
                $('.two-list .title').transition({'scale':0},1000,'ease');
                $('.two-list ul').transition({'scale':0},500,'ease');
            }
            if(index==2){
                $('.two-list .title').transition({'scale':0},1000,'ease',function () {
                    $('.two-list .xian').transition({'scale':0},300,'ease',function () {
                        $('.two-list .small-title').transition({'scale':0},200,'ease')
                    });
                });
                $('.two-list ul').transition({'scale':0},500,'ease');
            }
            if(index==3){
                $('.show-skill h1').transition({'scale':0},500,'ease',function(){
                    $('.tip').transition({'scale':0},100,'ease',function(){
                        $('.xian').transition({'scale':0},100,'ease')
                    });
                });
                $('.show-skill .title li:eq(0)').transition({x:-450},800,'ease');
                $('.show-skill .title li:eq(1)').transition({y:500},500,'ease');
                $('.show-skill .title li:eq(2)').transition({x:450},800,'ease');
                $('.show-skill .box-ban .item:eq(0)').transition({y:100,'opacity':0},1000,'ease')
            }
            if(index==4){
                $('.show-product1 h1').transition({'scale':0},100,'ease',function(){
                    $('.show-product1 .small-title').transition({'scale':0},100,'ease',function(){
                        $('.show-product1 .con-title').transition({'scale':0},100,'ease',function(){})
                    });
                });
                $('.show-product1 .con li:eq(0)').transition({y:425},0,'linear',function () {
                    $('.show-product1 .con li:eq(1)').transition({y:425},0,'linear',function () {
                        $('.show-product1 .con li:eq(2)').transition({y:425},0,'linear',function () {
                            $('.show-product1 .con li:eq(3)').transition({y:425},0,'linear',function () {
                            })
                        })
                    })
                })
            }
            if(index==5){
                $('.show-product2 h1').transition({'scale':0},500,'ease',function(){
                    $('.show-product2 .small-title').transition({'scale':0},100,'ease',function(){
                        $('.show-product2 .con-title').transition({'scale':0},300,'ease',function(){})
                    });
                });
                $('.show-product2 .zz-con li').transition({'opacity':0},500,'ease')
            }
            if(index==6){
                $('.show-product3 h1').transition({'scale':0},100,'ease',function(){
                    $('.show-product3 .small-title').transition({'scale':0},300,'ease',function(){
                        $('.show-product3 .con-title').transition({'scale':0},300,'ease',function(){})
                    });
                });
                $('.icon-show .icon-item:eq(0)').transition({y:-700},0,'ease',function () {
                    $('.icon-show .icon-item:eq(1)').transition({y:-700},0,'ease',function () {
                        $('.icon-show .icon-item:eq(2)').transition({y:-700},0,'ease',function () {
                            $('.icon-show .icon-item:eq(3)').transition({y:-700},0,'ease',function () {
                                $('.icon-show .icon-item:eq(4)').transition({y:-700},0,'ease',function () {
                                    $('.icon-show .icon-item:eq(5)').transition({y:-700},0,'ease',function () {
                                    })
                                })
                            })
                        })
                    })
                })
            }
            if(index==7){
                $('.show-product4 .con-list li').animate({'opacity':0},100,function(){
                    $(this).transition({y:120},2000,'ease');
                });
                $('.show-product4 h1').transition({'scale':0},100,'ease',function(){
                    $('.show-product4 .small-title').transition({'scale':0},300,'ease',function(){
                        $('.show-product4 .con-title').transition({'scale':0},300,'ease',function(){
                            $('.show-product4 .class').transition({'scale':0},300,'ease',function(){
                            })
                        })
                    });
                });
                if(index==8){
                    $('.foot .title h1').transition({'scale':0},500,'ease',function(){
                        $('.foot .title span').transition({'scale':0},300,'ease',function(){
                            $('.foot .title .small-title').transition({'scale':0},500,'ease',function(){
                            })
                        });
                    });
                    $('.foot .con li').transition({'opacity':0,y:200},500,'ease');
                }
            }
        }
    })

    $(".ban-next").click(function(){
        $.fn.fullpage.moveSectionDown();
    });



























































































})
