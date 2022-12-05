const vw=window.innerWidth/100;
document.body.onload=()=>{
    $('.navbar').fadeIn(3200);
    $('.cloud1').css('animation','clouds 1300ms linear infinite')
    setTimeout(()=>{$('.cloud2').css('animation','clouds 1500ms linear infinite')},200)
    setTimeout(()=>{$('.cloud3').css('animation','clouds1 1900ms linear infinite')},250)
    setTimeout(()=>{$('.cloud4').css('animation','clouds1 1800ms linear infinite')},120)
    setTimeout(()=>{$('.cloud6').css('animation','clouds 2200ms linear infinite')},120)
    setTimeout(()=>{$('.cloud5').css('animation','clouds 2300ms linear infinite')},220)
    setTimeout(()=>{$('.cloud4').css('animation','clouds1 1800ms linear infinite')},320)
    $('#cloudall').fadeIn(3000)
    setTimeout(()=>{$('#planet').css('display','flex').fadeIn(3000)},320)
    setTimeout(()=>{
        $('#rckt1').css('animation','rckt1 1s linear')
        $('#rckt2').css('animation','rckt2 1s linear')
        setTimeout(()=>{
            $('#rckt1').css({
                'width': '2.5vw',
                'z-index': '-3',
                'rotate': '43deg',
                'position': 'absolute',
                'bottom': '28vw',
                'left': '46vw',
                'transform-origin': 'center',
                'transition': '1s',
                'transform': 'translateY(0vw)',
                'animation': 'myOrbit 4s linear infinite',
                'top': 'unset'
                })
        },750)
        setTimeout(()=>{
            $('#rckt2').css({
                'width': '2.5vw',
                'z-index': '-3',
                'rotate': '43deg',
                'position': 'absolute',
                'bottom': '28vw',
                'left': '46vw',
                'transform-origin': 'center',
                'transition': '1s',
                'transform': 'translateY(0vw)',
                'animation': 'myOrbit2 4s linear infinite',
                'top': 'unset',
                'right':'unset',
                })
                setTimeout(()=>{
                    var img= document.createElement('img');img.src="./img/fallingstar.png";img.setAttribute('alt',"falling star");img.setAttribute('id','fallingStar')
                    img.onload=()=>{
                        document.body.querySelector('animation').append(img)
              
                        creatStar=setInterval(()=>{
                            for (let i = 0; i < 1; i++) {
                                var div= document.createElement('div')
                        div.innerText='*'
                        div.setAttribute('class','star2')
                        var color = ['#ffffff4a','#ffffff8c']
                        div.style.color= color[Math.floor(Math.random()*2)]
                        var currTrans = $('#fallingStar').css('-webkit-transform').split(/[()]/)[1];
                        var posx = currTrans.split(',')[4]
                        var posy = currTrans.split(',')[5]
                        div.setAttribute('style',`top:${$('#fallingStar').css('top')};left:${$('#fallingStar').css('left')};transform:translate(${(parseInt(posx)+(4*vw))}px,${(parseInt(posy)+(6*vw))}px);transition:1s;`)
                        document.body.append(div)
                        var turnt=Math.floor(Math.random()*2)
                        var count = Math.floor(Math.random()*10)
                        if(turnt>0){
                            turnt=(count*vw)
                        }else{ turnt=(-count*vw)}
                        setTimeout(()=>{div.style.transform=`translate(${posx}px,${parseInt(posy)+parseInt(turnt)}px)`;
                        $(div).fadeOut(2500);setTimeout(()=>{div.remove();},2700)
                    },50)  
                            }
                        },5)
                    }
                    
                },200)
                   
                    setTimeout(()=>{clearInterval(creatStar)},4000)
                },1000)

        },3250)
    for (let i = 0; i < 100; i++) {
        var div= document.createElement('div')
        div.innerText='*'
        div.setAttribute('class','star')
        var color = ['#ffffff4a','#ffffff8c']
        div.style.color= color[Math.floor(Math.random()*2)]
        var top = Math.random()*window.innerHeight;
        var left = Math.random()*window.innerWidth;
        div.style.left=left+'px';
        div.style.top=top+'px';
        document.body.append(div)
        var Set=[true,false]
        var type= Set[Math.floor(Math.random()*2)]
        if(type==true){
            div.style.animation='spark 1s linear infinite'
        }

    }

   
}
