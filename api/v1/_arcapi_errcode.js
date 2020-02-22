// filename : /v1/_arcapi_errcode.js
// author   : CirnoBakaBOT
// date     : 02/16/2020
// comment  : arcapi errcode definitions

export default function (errcode) {

  const _errcode_table = {
    0: 'An error occurred completing purchases. Please try restarting your device or Arcaea and ensuring that you\'re logged in to.',
    1: 'This item is currently unavailable to purchase.',
    2: 'All songs are already downloaded!',
    3: 'You have been logged out by another device. Please restart Arcaea.',
    4: 'Could not connect to online server.',
    5: 'Incorrect app version.',
    9: 'The Arcaea network is currently under maintenance.',
    12: 'Please update Arcaea to the latest version.',
    100: 'Registrations from this IP address are restricted. Try again later or contact support@lowiro.com.',
    101: 'This username is already in use.',
    102: 'This email address is already in use.',
    103: 'An account has already been made from this device.',
    104: 'Username or password incorrect.',
    105: 'You\'ve logged into over 2 devices in 24 hours. Please wait before using this new device.',
    106: 'This account is locked.',
    107: 'You do not have enough stamina.',
    112: 'World map not unlocked.',
    113: 'This event map has ended and is no longer available.',
    120: 'WARNING! You are using a modified version of Arcaea. Continued use will result in the banning of your account. This is a final warning.',
    121: 'This account is locked.',
    122: 'A temporary hold has been placed on your account. Please visit the official website to resolve the issue.',
    150: 'This feature has been restricted for your account. If you are unsure why, please contact support@lowiro.com',
    301: 'This partner does not exist',
    401: 'This user does not exist.',
    403: 'Could not connect to online server.',
    501: 'This item is currently unavailable to purchase.',
    502: 'This item is currently unavailable to purchase.',
    504: 'Invalid Code',
    505: 'This code has already been claimed.',
    506: 'You already own this item.',
    604: 'You can\'t be friends with yourself ;-;',
    601: 'Your friends list is full.',
    602: 'This user is already your friend.',
    803: 'There was a problem submitting this score online. WARNING!Stamina has already been consumed. Exiting will lose World Mode progress.',
    903: 'Max downloads exceeded. Please wait 24 hours and try again.',
    905: 'Download too much, please wait another 24 hours.',
    9801: 'An error occured downloading the song.Please try again.',
    9802: 'There was a problem saving the song.Please check storage.',
    9905: 'No data found to sync.',
    9907: 'A problem occured updating data...',
    9908: 'There is a new version of Arcaea available.Please update.'
  };

  if (typeof _errcode_table[errcode] == 'undefined')
    return `An unknown error has occured. ${errcode}`;

  return _errcode_table[errcode];
}

