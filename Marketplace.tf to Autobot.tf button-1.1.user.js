// ==UserScript==
// @name         Marketplace.tf to Autobot.tf button
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  adds a button on mp to autobot
// @author       Trefix
// @match        https://marketplace.tf/items/tf2/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Get the item part from the URL (everything after /items/tf2/)
    const itemCode = decodeURIComponent(window.location.pathname.replace('/items/tf2/', ''));

    if (!itemCode) return;

    const autobotURL = `https://autobot.tf/items/${encodeURIComponent(itemCode)}`;

    // Create the button
    const button = document.createElement('a');
    button.textContent = 'Autobot.tf';
    button.href = autobotURL;
    button.target = '_blank';
    button.style.display = 'inline-block';
    button.style.marginTop = '16px';
    button.style.padding = '8px 14px';
    button.style.backgroundColor = '#f0f8ff';
    button.style.border = '1px solid #ccc';
    button.style.borderRadius = '6px';
    button.style.textDecoration = 'none';
    button.style.color = '#000';
    button.style.fontWeight = '600';
    button.style.fontSize = '14px';

    // Try to insert below the item title
    const titleEl = document.querySelector('.page-item-title') || document.querySelector('.item-title') || document.querySelector('.container') || document.body;
    titleEl.appendChild(button);
})();