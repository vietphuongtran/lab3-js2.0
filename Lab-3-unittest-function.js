//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumberId (humberID) {
    "use strict";
    let validHumberId = false;
    var studentNum = /(n|N)\d{8}/;
    if (studentNum.test(humberID)) {
        validHumberId = true;
        }
    else if (!isNaN(humberID) || HumberID === undefined )
    return validHumberId;    
}