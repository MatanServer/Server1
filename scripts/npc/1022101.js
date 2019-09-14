var status;

item = [4000000 && 4000016 && 4000011];
function start() { // starts the NPC
    status = -1; // sets the status of the NPC to -1
    action(1, 0, 0); // sets the mode to 1, type to 0, and selection to 0 for the NPC
} // closes off the start function

function action(mode, type, selection) { // calls what you set above in function start, almost all actions are done here
    if (mode == 1) { // the mode is set to 1 because of the function start, as shown above
        status++; // advances the NPC to the next status, in this case, status 0
    }else{ // if mode does not equal 1
        status--; // does not advance the NPC to the next status.
    }
    
    if (status == 0) { // if mode was 1, status would move from -1 to 0. If status is 0, these actions will happen
        cm.sendSimple("Hello #h #. \r\n Please pick 100 Red snail Shell. #r Do you have the item? \r\n #L0# Yes, I am. #l \r\n #L1# I don't. #l"); // Opens a window with 2 choices (selections)
    } else if (status == 1) { // NPC advances to next status if a selection is chosen.
        if (selection == 0) { // selection 0 is #L0#, "Yes, I am."
            if (cm.haveItem(4000016, 100) && cm.getPlayer().getLevel() <= 19) {
               cm.gainExp("3500");
               cm.gainItem(4000016, -100);
                cm.sendOk("Great. You can repeat this mission until level 20. :) "); // IF you have the item, this will show
                cm.dispose();
            }else{
                cm.sendOk("I'm sorry, you don't have the items \r\n you are level 20+"); // ELSE, you don't have the item.
                cm.dispose();
            }
        } else if (selection == 1) { // "No, I'm not."
            cm.sendOk("So STFU.");
            cm.dispose();
        }
    }
} 
