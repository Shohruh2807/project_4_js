'use strict'
function convertLength(uzunlik, birlikdan, birlikka){
    if (birlikdan==='km' && birlikka==='mil'){
        console.log(uzunlik*0.625+' mil')
    }
    else if (birlikdan==='mil' && birlikka==='km'){
        console.log(uzunlik*1.6+' km')
    }
    else if (birlikdan==='mil' && birlikka==='ft'){
        console.log(uzunlik*5280+' ft')
    }
    else if (birlikdan==='ft' && birlikka==='mil'){
        console.log(uzunlik/5280+' mil')
    }
    else if (birlikdan==='km' && birlikka==='ft'){
        console.log(uzunlik*3281+' ft')
    }
    else if (birlikdan==='ft' && birlikka==='km'){
        console.log(uzunlik/3281+' km')
    }
    else if (birlikdan!=='km' && birlikdan!=='mil' && birlikdan!=='ft' && birlikka!=='ft' && birlikka!=='mil' && birlikka!=='km'){
        console.log("Yaroqsiz birlik: Ibs")
    }
    else{
        console.log(uzunlik+birlikka)
    }
}
convertLength(50,'mil','km')
convertLength(32, 'km', 'mil')
convertLength(50, 'km', 'km')
convertLength(5, 'mil', 'km')
convertLength(5, 'mil', 'ft')
convertLength(5, 'km', 'ft')
convertLength(5, 'kg', 'kg')
