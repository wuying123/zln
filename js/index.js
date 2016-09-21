$(function(){
//  ban
    $('.ban .mask').hover(function(){
        $(this).css({'opacity':0.3,background:"#fff"});
        $(this).find('p').css({'color':'#000','fontWeight':500});
        $(this).find('h1').css({'color':'#000','fontWeight':700});
        $(this).addClass('active')    
    },function(){
        $(this).css('opacity',0)
    });
//    2.基本信息  opacity
    $('.two-list .mask').hover(function(){
        $(this).find('span').transition({perspective: '100px',
            rotateY: '180deg'},500,'ease');
    },function(){
        $(this).find('span').transition({perspective: '100px',
            rotateY: '0'},100,'ease');
    })
//    3.变色轮播
        var colorArr=["#C91BCC","#35CC0F","#0D20CC","#FF42EF","#FF42EF","#CC2838","#0F0E23"];
        var num=0;
        setInterval(function(){
            num++;
            if(num==6){
                num=0;
            }
            $('.show-skill  .mask').css({'background':colorArr[num]});
            $('.ban .big-mask').css({'background':colorArr[num]});
        },2000)
    
//4.skill
    $('.show-skill li').mouseover(function(){
        $(this).transition({rotateY:'360deg'},1000, 'ease')
    }).mouseout(function(){
        $(this).transition({rotateY:'-10deg'},1000, 'ease')
    })
//5.文字的轮播
    var item=$('.show-skill .box-ban .item');
    var pre=0;
    var next=0;
    setInterval(function(){
        next++;
        if(next==3){
            next=0;
        }
        item.eq(next).css({'left':'100%'});
        item.eq(pre).transition({'left':'-1000%'},{'delay':600},'ease');
        item.eq(next).transition({'left':'10%'},4000,'ease');
        pre=next;
    },10000)
//    6.height
    $('.show-product1 .con li').hover(function(){
        $(this).find('.mask').transition({'height':'102%'},500,'linear').finish();
        $(this).find('.mask').children('p').css('opacity',1).finish();
        $(this).find('.mask').children('a').css('opacity',1).finish();
    },function(){
        $(this).find('.mask').transition({'height':4},500,'linear').finish();
    })
// 7.beijing
    var i=0;
    setInterval(function(){
        i++;
        var x=30*i+"px";
        $('.show-product2').transition({'backgroundPosition':[x,0]},2000,'linear')
    },1000)
//    8.node lunbo
    var box=$('.node-ban  .box');
    var next2=0;
    var pre2=0;
    box.each(function (index) {
        if(index==0){
            $(this).css('left',0)
        }else{
            $(this).css('left','100%')
        }
    })
    setInterval(function(){
        next2++;
        if(next2==3){
            next2=0
        }
        box.eq(next2).css('left','100%');
        box.eq(pre2).animate({'left':'-100%'},3000);
        box.eq(next2).animate({'left':0},3000);
        pre2=next2;
    },5000)
// 8.选项卡
    $('.show-product4 .title .class span').click(function () {
        $(this).toggleClass('active');
        $('.show-product4 .title .class span').not($(this)).removeClass('active');
    });
    $('.t1').click(function(){
        $('.game').css('display','block');
        $('.phone').css('display','block');
    });
    $('.t2').click(function(){
        $('.game').css('display','block');
        $('.phone').css('display','none');
    });
    $('.t3').click(function(){
        $('.phone').css('display','block');
        $('.game').css('display','none');
    })
//9.product-4
    $('.show-product4 .con-list li').hover(function(){
        $(this).find('.mask').transition({y:0},500,'ease').finish();
    },function(){
        $(this).find('.mask').transition({y:'-100%'},500,'ease').finish();
    })
//    11. home-ban
    var home=$('.ban-con p');
    var first= home.first();
    first.css('left',0);
    home.not(first).css('left',1026);
    var hpre=0;var hnext=0;
    setInterval(function () {
       hnext++;
        if(hnext==3){
            hnext=0;
        }
        home.eq(hnext).css('left',1026);
        home.eq(hpre).transition({'left':-1026},1000);
        home.eq(hnext).transition({'left':0},3000);
        hpre=hnext;
    },5000)
//12..show-product4
    $('.show-product4 li').hover(function(){
        $(this).find('.inn').transition({border:0,scale:[1.5,1.5],rotate:30},800,'ease').finish();
    },function () {
        $(this).find('.inn').transition({border:'2px solid #FFA200',scale:[1,1],rotate:0},800,'ease');
    })
//    13.icon
    $('.icon-show .icon-item').hover(function () {
        $(this).transition({scale:[1.2,1.2]},1000,'ease').finish();
    },function(){
        $(this).transition({scale:[1,1]},800,'ease')
    })
//14. pull
    $('.nav-left .nav-hide').click(function () {
        $('.nav-pull').toggleClass('active');
    })
//15.two-list
    $('.two-list ul li .mask').click(function () {
        $(this).toggleClass('active');
        $(this).transition({opacity:1,scale:[1,1.15]},1000,'ease')
        $('.two-list ul li .mask').not(this).transition({opacity:0,scale:[1,1]},1000,'ease')
        $(this).find('span').transition({perspective: '100px',
            rotateY: '360deg'},1000,'linear');
    })
//    12.二维码
    var num=0;
    $('#ewm-btn').click(function () {
        num++;
        if(num%2==0){
            $('#ewm-show').transition({opacity:1,scale:[1,1]},500,'ease').finish();
        }else{
            $('#ewm-show').transition({opacity:0,scale:[0,0]},500,'ease').finish();
        }
    })
    $('#music-btn').click(function () {
        num++;
        if(num%2==0){
            $('#ewm2-show').transition({opacity:1,scale:[1,1]},500,'ease').finish();
        }else{
            $('#ewm2-show').transition({opacity:0,scale:[0,0]},500,'ease').finish();
        }
    })
    $('#music-btn2').click(function () {
        num++;
        if(num%2==0){
            $('#ewm3-show').transition({opacity:1,scale:[1,1]},500,'ease').finish();
        }else{
            $('#ewm3-show').transition({opacity:0,scale:[0,0]},500,'ease').finish();
        }
    })















































































































































































})