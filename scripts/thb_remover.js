// ==UserScript==
// @name         THB Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove all nicht bestandene Exams
// @author       Mischa
// @match        https://hisqis.fh-brandenburg.de/*menuid=notenspiegel*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(confirm('Remove all not passed exams?')){
        Array.prototype.slice
            .call(document.getElementsByClassName('tabelle1'))
            .filter(function(e){return e.innerHTML!==undefined&&!e.innerHTML.trim().includes('Wintersemester 18/19')&&(e.innerHTML==='nicht bestanden&nbsp;'||e.innerHTML==='RR&nbsp;')})
            .forEach(function(e){
                e.parentNode.remove()
        });
    }
    Array.prototype.slice
        .call(document.getElementsByClassName('tabelle1'))
        .filter(function(e){
        return e.innerHTML.trim().includes('Wintersemester 18/19')})
        .forEach(function(e){
            Array.from(e.parentNode.children)
                .forEach(function(i){
                    i.setAttribute('style', 'background-color: #3F51B5; color: white;border-color: #3F51B5');
                });
        });
})();
