const _0x381545=_0x14d3;function _0x4a95(){const _0x5e5536=['rotationSpeed','innerWidth','36UFOrhj','petals','speed','2417945gkJbHt','createElement','innerHeight','1901252jkYntW','createLinearGradient','fillStyle','7556759iYWBTJ','65187eglcPZ','ellipse','beginPath','7016gaQeRb','opacity','translate','3068612LlUSsc','addColorStop','height','petal-effect','forEach','size','appendChild','save','1517490fzOPIJ','ctx','rgba(255,\x20182,\x20193,\x20','rgba(255,\x20182,\x20193,\x200)','random','clearRect','wind','animate','angle','resize','rotate','10611VslrtL','className','canvas','init','update','width','fill','body'];_0x4a95=function(){return _0x5e5536;};return _0x4a95();}(function(_0x473e03,_0x465f79){const _0x48ebef=_0x14d3,_0x5e0e32=_0x473e03();while(!![]){try{const _0x508043=parseInt(_0x48ebef(0x130))/0x1+-parseInt(_0x48ebef(0x10d))/0x2+-parseInt(_0x48ebef(0x134))/0x3*(parseInt(_0x48ebef(0x12a))/0x4)+parseInt(_0x48ebef(0x12d))/0x5+parseInt(_0x48ebef(0x115))/0x6+parseInt(_0x48ebef(0x133))/0x7+-parseInt(_0x48ebef(0x137))/0x8*(parseInt(_0x48ebef(0x120))/0x9);if(_0x508043===_0x465f79)break;else _0x5e0e32['push'](_0x5e0e32['shift']());}catch(_0x3b7f30){_0x5e0e32['push'](_0x5e0e32['shift']());}}}(_0x4a95,0xe8c63));class Petal{constructor(){const _0x9889f=_0x14d3;this['x']=Math[_0x9889f(0x119)]()*window[_0x9889f(0x129)],this['y']=-0x14,this[_0x9889f(0x12c)]=0.5+Math[_0x9889f(0x119)]()*0x2,this[_0x9889f(0x11b)]=Math[_0x9889f(0x119)]()*0x1-0.5,this[_0x9889f(0x112)]=0x5+Math[_0x9889f(0x119)]()*0x5,this[_0x9889f(0x138)]=0.5+Math['random']()*0.5,this[_0x9889f(0x11d)]=Math[_0x9889f(0x119)]()*0x168,this[_0x9889f(0x128)]=0.01+Math[_0x9889f(0x119)]()*0.03;}[_0x381545(0x124)](){const _0x114622=_0x381545;this['y']+=this[_0x114622(0x12c)],this['x']+=this[_0x114622(0x11b)],this[_0x114622(0x11b)]+=Math['random']()*0.2-0.1,this['angle']+=this[_0x114622(0x128)],this['y']>window[_0x114622(0x12f)]&&(this['y']=-0x14,this['x']=Math[_0x114622(0x119)]()*window[_0x114622(0x129)],this[_0x114622(0x12c)]=0.5+Math[_0x114622(0x119)]()*0x2);}}function _0x14d3(_0x198712,_0x30b972){const _0x4a95b2=_0x4a95();return _0x14d3=function(_0x14d3d4,_0x5ce4df){_0x14d3d4=_0x14d3d4-0x10d;let _0x14ece5=_0x4a95b2[_0x14d3d4];return _0x14ece5;},_0x14d3(_0x198712,_0x30b972);}class PetalEffect{constructor(){const _0x39374b=_0x381545;this['canvas']=document[_0x39374b(0x12e)]('canvas'),this[_0x39374b(0x116)]=this[_0x39374b(0x122)]['getContext']('2d'),this[_0x39374b(0x122)][_0x39374b(0x121)]=_0x39374b(0x110),document[_0x39374b(0x127)][_0x39374b(0x113)](this['canvas']),this[_0x39374b(0x12b)]=[],this[_0x39374b(0x123)](),window['addEventListener'](_0x39374b(0x11e),()=>this[_0x39374b(0x11e)]()),this[_0x39374b(0x11c)]();}['init'](){const _0x23ee4d=_0x381545;this[_0x23ee4d(0x11e)]();for(let _0x16d461=0x0;_0x16d461<0xc8;_0x16d461++){this[_0x23ee4d(0x12b)]['push'](new Petal());}}['resize'](){const _0x2457f7=_0x381545;this[_0x2457f7(0x122)][_0x2457f7(0x125)]=window[_0x2457f7(0x129)],this[_0x2457f7(0x122)][_0x2457f7(0x10f)]=window[_0x2457f7(0x12f)];}['animate'](){const _0x4b4c0c=_0x381545;this[_0x4b4c0c(0x116)][_0x4b4c0c(0x11a)](0x0,0x0,this[_0x4b4c0c(0x122)][_0x4b4c0c(0x125)],this[_0x4b4c0c(0x122)][_0x4b4c0c(0x10f)]),this[_0x4b4c0c(0x12b)][_0x4b4c0c(0x111)](_0x4ad03c=>{const _0x1b4b31=_0x4b4c0c;_0x4ad03c[_0x1b4b31(0x124)]();const _0x5a7f4b=this[_0x1b4b31(0x116)][_0x1b4b31(0x131)](_0x4ad03c['x'],_0x4ad03c['y'],_0x4ad03c['x']+_0x4ad03c[_0x1b4b31(0x11b)],_0x4ad03c['y']+_0x4ad03c[_0x1b4b31(0x112)]*0x5);_0x5a7f4b[_0x1b4b31(0x10e)](0x0,_0x1b4b31(0x117)+_0x4ad03c['opacity']+')'),_0x5a7f4b['addColorStop'](0x1,_0x1b4b31(0x118)),this[_0x1b4b31(0x116)][_0x1b4b31(0x114)](),this[_0x1b4b31(0x116)][_0x1b4b31(0x139)](_0x4ad03c['x'],_0x4ad03c['y']),this[_0x1b4b31(0x116)][_0x1b4b31(0x11f)](_0x4ad03c['angle']*Math['PI']/0xb4),this[_0x1b4b31(0x116)][_0x1b4b31(0x136)](),this[_0x1b4b31(0x116)][_0x1b4b31(0x135)](0x0,0x0,_0x4ad03c[_0x1b4b31(0x112)],_0x4ad03c['size']/0x2,0x0,0x0,Math['PI']*0x2),this[_0x1b4b31(0x116)][_0x1b4b31(0x132)]=_0x5a7f4b,this[_0x1b4b31(0x116)][_0x1b4b31(0x126)](),this[_0x1b4b31(0x116)]['restore']();}),requestAnimationFrame(()=>this['animate']());}}document['addEventListener']('DOMContentLoaded',()=>{new PetalEffect();});