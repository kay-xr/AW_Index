---
title: Cathedral Devlog
description: Cleaning up and trying to finish Angel's Cathedral.
---

<script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#272727', 'J3J0HS3SU');kofiwidget2.draw();</script> 

[Or check out my assets!](https://angelware.net/)

--- 

I don't make very many worlds anymore, but I used to create them instead of avatars. World creation for VRChat will teach you a lot more about how the engine and game works than avatars ever will in my opinion. But Avatars can teach you more about optimization for video games, as optimizing skinned meshes is much more important than static ones.

# Trying to Transfer the 2019.4 world to 2022.3

I thought I'd try to transfer my cathedral world to 2022 today. I am having a bit of a block with avatar work so this keeps me busy.

First thing I'm doing is making a new project with the same packages from both UPM, VPM, and OpenUPM. Suprisingly my packages list on this was extremely small, but I'm going to also add some new QoL while I'm here.

For example, I'm importing Orels1 world shaders via VPM, although I have also considered trying out Silent's Filamented recently.

Another change is that I am going to get rid of CyanTrigger and just write my own Udon scripts, maybe going to include them in my utils repo eventually, I could write a script for installing it too.
