// ==UserScript==
// @name        自动确认交易
// @namespace   luoshulin@163.com
// @description 让交易确认自动化
// @version     1
// @grant       none
// @match      http://112.78.104.13/app/member/*
// @require http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// ==/UserScript==



ImportCss();ScriptWithJquery();function ImportCss(){var a=document.createElement("style");a.type="text/css";a.innerHTML="#tp{position:fixed;bottom:60px;right:5px;border:1px solid gray;padding:3px;width:75px;font-size:12px;cursor:pointer;border-radius: 3px;text-shadow: 1px 1px 3px #676767;}";document.getElementsByTagName("head")[0].appendChild(a)}
function ScriptWithJquery(){0<$("#gbutton").length&&($("#gbutton").append("<div id='tp' title='\u81ea\u52a8\u786e\u8ba4'> \u81ea\u52a8\u786e\u8ba4\u4ea4\u6613 </div>"),$("#tp").bind("click",tpclick))}function tpclick(){$("#gbutton").append("<div id='aucfm'><script>window.confirm = function() { return !0;  ;}\x3c/script></div>");$("input[name='Submit']").click()};

