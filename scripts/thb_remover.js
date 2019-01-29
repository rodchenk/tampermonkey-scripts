// ==UserScript==
// @name         THB Remover
// @version      0.1
// @description  remove all nicht bestandene Exams
// @author       Mischa
// @match        https://hisqis.fh-brandenburg.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    Array.prototype.
        slice.
        call(document.getElementsByClassName('tabelle1')).
        filter(function(e){return e.innerHTML!==undefined&&(e.innerHTML==='nicht bestanden&nbsp;'||e.innerHTML==='RR&nbsp;')}).
        forEach(function(e){e.parentNode.remove()});

})();
