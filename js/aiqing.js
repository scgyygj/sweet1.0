//侧导航
$(function () {

    $('.navmin').on('click' ,function () {
        $(this).animate({opacity:'0'})
        $('aside').animate({left:'0px'});
    })
    $('.nav>ul>li').on('mouseover',function () {
        $(this).find('.yqc').css({display:'block'})
    })
    $('.nav>ul>li').on('mouseout',function () {
        $(this).find('.yqc').css({display:'none'})
        // $(this).remove('mouseover');
    })






})





//侧边按扭
let black=document.querySelectorAll('.black ul li');
let neirong=document.querySelectorAll('.white');
for(let j=0;j<black.length;j++){
    black[j].onmousemove=function () {
        for(let i=0;i<neirong.length;i++){
            black[j].style.border='1px soild #fff'
            animate(neirong[i],{right:-697});
        }
        black[j].style.border='2px soild pink'
        animate(neirong[j],{right:2});
    }
}
