// ==UserScript==
// @name        自动确认交易
// @namespace   luoshulin@163.com
// @description 让交易确认自动化
// @version     2
// @grant       none
// @match      http://112.78.104.13/app/member/*
// @require http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js
// @downloadURL https://luoshulin.github.io/autocfm2.user.js
// @updateURL https://luoshulin.github.io/autocfm2.meta.js
// ==/UserScript==

ImportCss();ScriptWithJquery();function ImportCss(){var b=document.createElement("style");b.type="text/css";b.innerHTML="#tp{position:absolute;background-color:#e1d6c2;width:208px;border:1px solid gray;padding:3px;font-size:12px;cursor:pointer;border-radius: 3px;text-shadow: 1px 1px 3px #676767;}";document.getElementsByTagName("head")[0].appendChild(b)}
function ScriptWithJquery(){0<$("#gbutton").length&&$("#gbutton").append("<div id='aucfm'><script>window.confirm = function() { return !0;  ;}\x3c/script></div>");"none"==$(window.parent.document).find("#euro_open").css("display")?(a="<div id='tp' style='position:absolute;background-color:#e1d6c2;width:208px;border:1px solid gray;padding:3px;font-size:12px;cursor:pointer;border-radius: 3px;text-shadow: 1px 1px 3px #676767;' title='\u81ea\u52a8\u786e\u8ba4\u5df2\u751f\u6548'>\u81ea\u52a8\u786e\u8ba4\u5df2\u751f\u6548<br/><input id='autotrade1val' style='width:80px' type='text' value='50'><input id='autotrade1' style='width:80px' name='autotrade1' type='button' value='\u76f4\u63a5\u4ea4\u6613'> <br/><br/><input id='autotrade2val' style='width:80px' type='text' value='100'><input id='autotrade2' name='autotrade2' type='button' value='\u76f4\u63a5\u4ea4\u6613'><br/><br/><input id='autotrade3val' style='width:80px'  type='text' value='1000'><input id='autotrade3' name='autotrade3' type='button' value='\u76f4\u63a5\u4ea4\u6613'><br/><br/></div>",
0<$(window.parent.document).find("#order_div #tp").length?$(window.parent.document).find("#tp").show():($(window.parent.document).find("#bet_div").after(a),$(window.parent.document).find("#bet_div").after("<div id='aucfm'><script>window.confirm = function(s){return !0;if(s.indexOf(\"\u786e\u5b9a\u8fdb\u884c\u4e0b\u6ce8\")>0){ return !0;}    else{    };}\x3c/script></div>"),0<$("#gbutton").length&&$("#gbutton").append("<div id='aucfm'><script>window.confirm = function() { return !0;  ;}\x3c/script></div>"),
$(window.parent.document).find("#autotrade1").unbind("click").bind("click",{val:$(window.parent.document).find("#autotrade1val")},autotrade),$(window.parent.document).find("#autotrade2").unbind("click").bind("click",{val:$(window.parent.document).find("#autotrade2val")},autotrade),$(window.parent.document).find("#autotrade3").unbind("click").bind("click",{val:$(window.parent.document).find("#autotrade3val")},autotrade),$("input[name='Submit']").val("\u81ea\u52a8\u786e\u8ba4\u4ea4\u6613"))):$(window.parent.document).find("#tp").hide()}
function autotrade(b){$("#gold").val(b.data.val.val());$("#gold").keyup();$(window.parent.document).find("#tp").hide();$("input[name='Submit']").click()};