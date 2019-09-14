/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* Author: Xterminator
	NPC Name: 		Shanks
	Map(s): 		Maple Road : Southperry (60000)
	Description: 		Brings you to Victoria Island
*/
var status = 0;

function start() {
}

function action(mode, type, selection) {
        if (mode == -1) {
                cm.dispose();
        } else {
                if (mode == 0 && type > 0) {
                        cm.dispose();
                        return;
                }
                if (mode == 1)
                        status++;
                else
                        status--;

    if (status == 0) {
        if (cm.getLevel() >= 10)
             cm.sendSimple("Hi what job do you want to be?\r\n#L0#Warrior#l\r\n#L1#Magician#l\r\n#L2#Archer#l\r\n#L3#Thief#l");
        else
            cm.sendOk("You're not level 10");
    } else if (status == 1) {
    if(selection == 0)
    cm.warp(102000003);
    else if(selection == 1)
    cm.warp(101000003);
    else if (selection == 2)
    cm.warp(100000201);
    else if (selection == 3)
    cm.warp(103000003);
    }
    else{
    cm.dispose();}
    }
}