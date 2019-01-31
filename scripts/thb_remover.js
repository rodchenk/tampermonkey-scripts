// ==UserScript==
// @name         THB Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add button in nav to remove all nicht bestandene Exams
// @author       Mischa
// @match        https://hisqis.fh-brandenburg.de/*menuid=notenspiegel*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var ul = document.querySelector('#makronavigation > ul');
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.appendChild(document.createTextNode("Alte Klausuren entfernen"));
    a.setAttribute('class', 'auflistung');
    a.addEventListener('click', function(){Array.prototype.slice.call(document.getElementsByClassName('tabelle1'))
            .filter(function(e){return e.innerHTML!==undefined&&!e.innerHTML.trim().includes('Wintersemester 18/19')&&(e.innerHTML==='nicht bestanden&nbsp;'||e.innerHTML==='RR&nbsp;')})
            .forEach(function(e){e.parentNode.remove()});
    });
    li.appendChild(a);
    ul.appendChild(li);
    document.getElementsByClassName('header_hisinone')[0].remove();
    document.getElementsByClassName('divfoot')[0].remove();
    document.getElementsByClassName('divloginstatus')[0].setAttribute('style', 'background-color:#1f1f1f;padding:16px');
    Array.prototype.slice.call(document.getElementsByClassName('tabelle1')).filter(function(e){return e.innerHTML.trim().includes('Wintersemester 18/19')})
        .forEach(function(e){Array.from(e.parentNode.children).forEach(function(i){ i.setAttribute('style', 'background-color: #3F51B5; color: white;border-color: #3F51B5')})});
})();
