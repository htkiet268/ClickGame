window.__require=function t(e,o,n){function r(i,p){if(!o[i]){if(!e[i]){var a=i.split("/");if(a=a[a.length-1],!e[a]){var f="function"==typeof __require&&__require;if(!p&&f)return f(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}i=a}var u=o[i]={exports:{}};e[i][0].call(u.exports,function(t){return r(e[i][1][t]||t)},u,u.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({AddGoldPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"de2470Z7f5ICbwpR1NKqZ9X","AddGoldPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.numOfGold=1,e}return r(e,t),e.prototype.setNumOfGold=function(t){this.numOfGold=t,this.getComponent(cc.Label).string="+"+t},c([p],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],AnimationUtil:[function(t,e,o){"use strict";cc._RF.push(e,"b9f07HglCVHu6Xpteudoy2E","AnimationUtil");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(o,"__esModule",{value:!0});var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.playDisappearAnimation=function(t,e){void 0===e&&(e=.5),cc.tween(t).to(e,{position:cc.v3(t.position.x,t.position.y+200,t.position.z),opacity:0}).call(function(){t.destroy()}).start()},e.playFadingAnimation=function(t,e){void 0===e&&(e=.3),cc.tween(t).to(e,{color:new cc.Color(216,187,187,255)}).call(function(){t.color=cc.Color.WHITE}).start()},e}(cc.Component);o.default=c,cc._RF.pop()},{}],BoostScreenPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"dac8d27r3JAEpdhnjqnYUPq","BoostScreenPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=i.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.previousScreen=null,e}return r(e,t),e.prototype.onClickBack=function(){this.node.active=!1,this.previousScreen.active=!0},c([a(cc.Node)],e.prototype,"previousScreen",void 0),c([p],e)}(cc.Component);o.default=f,cc._RF.pop()},{}],ChooseExchangeScreenPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"67d096p+CpL3aKn7MoEjozA","ChooseExchangeScreenPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=i.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.previousScreen=null,e}return r(e,t),e.prototype.onClickBack=function(){this.node.active=!1,this.previousScreen.active=!0},c([a(cc.Node)],e.prototype,"previousScreen",void 0),c([p],e)}(cc.Component);o.default=f,cc._RF.pop()},{}],ExchangeScreenPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"a2441kZT65LHbgpcTt35i4q","ExchangeScreenPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(o,"__esModule",{value:!0});var a=p(t("../../GlobalData")),f=p(t("../../Utils/AnimationUtil")),u=p(t("../Other/AddGoldPrefab")),s=cc._decorator,l=s.ccclass,d=s.property,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.user=null,e.level=null,e.settings=null,e.dailyMissions=null,e.totalGold=null,e.energy=null,e.tapArea=null,e.addGold=null,e.btnBoost=null,e.mainScreen=null,e.settingScreen=null,e.boostScreen=null,e.profileScreen=null,e.numOfTotalGold=0,e.numOfEnergy=0,e.numOfMaxEnergy=0,e}var o,n,p,s,y,_,h,b,g,O,v,P,j;return r(e,t),e.prototype.onLoad=function(){this.tapArea.on(cc.Node.EventType.TOUCH_START,this.onTapping,this),this.loadData()},e.prototype.loadData=function(){var t=a.default.me();this.setTotalGold(t.getTotalGold()),this.setEnergy(t.getEnergy(),t.getMaxEnergy())},e.prototype.start=function(){this.updateEnergy()},e.prototype.updateEnergy=function(){var t=this,e=a.default.me().getGoldPerTap();setInterval(function(){t.numOfEnergy+e<t.numOfMaxEnergy?t.setEnergy(t.numOfEnergy+e,t.numOfMaxEnergy):t.numOfEnergy<t.numOfMaxEnergy&&t.setEnergy(t.numOfMaxEnergy,t.numOfMaxEnergy)},1e3)},e.prototype.onTapping=function(t){f.default.playFadingAnimation(this.tapArea.getChildByName("Circle"),.1);var e=cc.instantiate(this.addGold),o=this.tapArea.convertToNodeSpaceAR(t.getLocation());e.setPosition(o),this.tapArea.addChild(e);var n=a.default.me().getGoldPerTap();this.addNumOfGold(n),e.getComponent(u.default).setNumOfGold(n),f.default.playDisappearAnimation(e)},e.prototype.addNumOfGold=function(t){this.setTotalGold(this.numOfTotalGold+t),this.setEnergy(this.numOfEnergy-t,this.numOfMaxEnergy)},e.prototype.setTotalGold=function(t){this.numOfTotalGold=t,this.totalGold.getChildByName("Label").getComponent(cc.Label).string=t.toString()},e.prototype.setEnergy=function(t,e){this.numOfEnergy=t,this.numOfMaxEnergy=e,this.energy.getChildByName("Label").getComponent(cc.Label).string=t.toString()+"/"+e.toString()},e.prototype.onClickBoost=function(){this.mainScreen.active=!1,this.boostScreen.active=!0},e.prototype.onClickSetting=function(){this.mainScreen.active=!1,this.settingScreen.active=!0},e.prototype.onClickProfile=function(){this.mainScreen.active=!1,this.profileScreen.active=!0},c([d(cc.Node),i("design:type","function"==typeof(o="undefined"!=typeof cc&&cc.Node)?o:Object)],e.prototype,"user",void 0),c([d(cc.Node),i("design:type","function"==typeof(n="undefined"!=typeof cc&&cc.Node)?n:Object)],e.prototype,"level",void 0),c([d(cc.Node),i("design:type","function"==typeof(p="undefined"!=typeof cc&&cc.Node)?p:Object)],e.prototype,"settings",void 0),c([d(cc.Node),i("design:type","function"==typeof(s="undefined"!=typeof cc&&cc.Node)?s:Object)],e.prototype,"dailyMissions",void 0),c([d(cc.Node),i("design:type","function"==typeof(y="undefined"!=typeof cc&&cc.Node)?y:Object)],e.prototype,"totalGold",void 0),c([d(cc.Node),i("design:type","function"==typeof(_="undefined"!=typeof cc&&cc.Node)?_:Object)],e.prototype,"energy",void 0),c([d(cc.Node),i("design:type","function"==typeof(h="undefined"!=typeof cc&&cc.Node)?h:Object)],e.prototype,"tapArea",void 0),c([d(cc.Prefab),i("design:type","function"==typeof(b="undefined"!=typeof cc&&cc.Prefab)?b:Object)],e.prototype,"addGold",void 0),c([d(cc.Node),i("design:type","function"==typeof(g="undefined"!=typeof cc&&cc.Node)?g:Object)],e.prototype,"btnBoost",void 0),c([d(cc.Node),i("design:type","function"==typeof(O="undefined"!=typeof cc&&cc.Node)?O:Object)],e.prototype,"mainScreen",void 0),c([d(cc.Node),i("design:type","function"==typeof(v="undefined"!=typeof cc&&cc.Node)?v:Object)],e.prototype,"settingScreen",void 0),c([d(cc.Node),i("design:type","function"==typeof(P="undefined"!=typeof cc&&cc.Node)?P:Object)],e.prototype,"boostScreen",void 0),c([d(cc.Node),i("design:type","function"==typeof(j="undefined"!=typeof cc&&cc.Node)?j:Object)],e.prototype,"profileScreen",void 0),c([l],e)}(cc.Component);o.default=y,cc._RF.pop()},{"../../GlobalData":"GlobalData","../../Utils/AnimationUtil":"AnimationUtil","../Other/AddGoldPrefab":"AddGoldPrefab"}],GameController:[function(t,e){"use strict";cc._RF.push(e,"e3d12qzSCFGc568dQs9QXK3","GameController"),cc._RF.pop()},{}],GlobalData:[function(t,e,o){"use strict";cc._RF.push(e,"783b0M+z9pIS7mdjnAIlajY","GlobalData"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this.totalGold=500,this.energy=1e3,this.maxEnergy=1e3,this.goldPerTap=1}return t.me=function(){return null==this.instance&&(this.instance=new t),this.instance},t.prototype.getTotalGold=function(){return this.totalGold},t.prototype.getEnergy=function(){return this.energy},t.prototype.getMaxEnergy=function(){return this.maxEnergy},t.prototype.getGoldPerTap=function(){return this.goldPerTap},t.prototype.setTotalGold=function(t){this.totalGold=t},t.prototype.setEnergy=function(t){this.energy=t},t.prototype.setMaxEnergy=function(t){this.maxEnergy=t},t.prototype.setGoldPerTap=function(t){this.goldPerTap=t},t.instance=null,t}();o.default=n,cc._RF.pop()},{}],LoadingScene:[function(t,e,o){"use strict";cc._RF.push(e,"f441eC7LohM0ZEdsuhMCIQ9","LoadingScene");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){setTimeout(function(){cc.director.loadScene("MainScene")},1e3)},c([p],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],LoadingSpinnerPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"662d5nBH5RCBqdyve+vcPc2","LoadingSpinnerPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=i.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.rotationSpeed=100,e}return r(e,t),e.prototype.update=function(t){this.node.angle+=this.rotationSpeed*t},c([a],e.prototype,"rotationSpeed",void 0),c([p],e)}(cc.Component);o.default=f,cc._RF.pop()},{}],LocalStorageUtil:[function(t,e,o){"use strict";cc._RF.push(e,"a35f3eFqq1O9r1dW08KfWTq","LocalStorageUtil");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(o,"__esModule",{value:!0});var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.me=function(){return null==this.instance&&(this.instance=new e),this.instance},e.prototype.saveItem=function(t,e){cc.sys.localStorage.setItem(t,e)},e.prototype.getItem=function(t){return cc.sys.localStorage.getItem(t)},e.prototype.deleteItem=function(t){cc.sys.localStorage.removeItem(t)},e.instance=null,e}(cc.Component);o.default=c,cc._RF.pop()},{}],MainExchangeScreenPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"206d3Dk0PFCdodRKmf64yUb","MainExchangeScreenPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),c([p],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],MainScene:[function(t,e,o){"use strict";cc._RF.push(e,"8e021Togd1C5odwY9i4qm/P","MainScene");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),c([p],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],MainSettingScreenPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"56352rnR0ZIQZtlYqK/UAL/","MainSettingScreenPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),c([p],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],ProfileScreenPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"a20f2QuiW9PS6UeyDKmY+A6","ProfileScreenPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(o,"__esModule",{value:!0});var p=cc._decorator,a=p.ccclass,f=p.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.previousScreen=null,e}var o;return r(e,t),e.prototype.onClickBack=function(){this.node.active=!1,this.previousScreen.active=!0},c([f(cc.Node),i("design:type","function"==typeof(o="undefined"!=typeof cc&&cc.Node)?o:Object)],e.prototype,"previousScreen",void 0),c([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],SettingScreenPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"b3f15A96UhIl4SyTWFVq6GH","SettingScreenPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=i.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mainScreen=null,e.previousScreen=null,e.chooseExchangeScreen=null,e}return r(e,t),e.prototype.onClickBack=function(){this.node.active=!1,this.previousScreen.active=!0},e.prototype.onClickChooseExchange=function(){this.mainScreen.active=!1,this.chooseExchangeScreen.active=!0},e.prototype.onEnable=function(){cc.log("enable setting")},e.prototype.onDisable=function(){cc.log("disable setting")},c([a(cc.Node)],e.prototype,"mainScreen",void 0),c([a(cc.Node)],e.prototype,"previousScreen",void 0),c([a(cc.Node)],e.prototype,"chooseExchangeScreen",void 0),c([p],e)}(cc.Component);o.default=f,cc._RF.pop()},{}],SkinListPrefab:[function(t,e,o){"use strict";cc._RF.push(e,"24e4dMxmplE+b1hLjRaEqO5","SkinListPrefab");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onLoad=function(){this.setWidth()},e.prototype.start=function(){cc.log(this.node.height)},e.prototype.setWidth=function(){var t=cc.winSize.width;this.node.width=t>650?633:472},c([p],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],grpc_client:[function(t,e){"use strict";cc._RF.push(e,"0c344/fxCRBh7rn+ubwr3pD","grpc_client"),cc._RF.pop()},{}]},{},["GlobalData","AddGoldPrefab","LoadingSpinnerPrefab","ExchangeScreenPrefab","BoostScreenPrefab","MainExchangeScreenPrefab","ProfileScreenPrefab","SkinListPrefab","SettingScreenPrefab","ChooseExchangeScreenPrefab","MainSettingScreenPrefab","LoadingScene","MainScene","GameController","grpc_client","AnimationUtil","LocalStorageUtil"]);