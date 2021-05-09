const $ = {};

function formatDate() {

    let d = new Date().getDate();
    if (d < 10) d = '0' + d;
  
    let m = new Date().getMonth() + 1;
    if (m < 10) m = '0' + m;

    let y = new Date().getFullYear();

    return `${d}.${m}.${y}`;
}


const cardModals = [{
    title: 'Change log for RaceChrono',
    date: formatDate(),
    subtitle: 'Change log for RaceChrono v6.3.4 for Android',
    src: './img/modal_inner_photo.webp',
    content: 'List of paired devices will be displayed when adding a new Bluetooth device. Searching devices in range is now an option. Added new settings “Auto-detect my tracks only” and “Auto-detect again if finished”. The latter one should be useful for rally events with multiple different special stages. Added new setting “Split video files”. If disabled the video will be recorded to one large file. Improved: DIY CAN-Bus API now allows payload length up-to 16 bytes. Improved: Expert setting “GPS week rollover compensation” now also affects the built-in GPS. Fixed: A notification is now displayed, if location is disabled and it is needed for searching or connecting devices. Fixed: Channel postfix field was not displayed in CAN-Bus channel editor',
    closable: true,
},
{
    title: 'Change log for RaceChrono',
    date: formatDate(),
    subtitle: 'Change log for RaceChrono v6.3.4 for Android',
    src: './img/modal_inner_photo2.png',
    content: 'List of paired devices will be displayed when adding a new Bluetooth device. Searching devices in range is now an option. Added new settings “Auto-detect my tracks only” and “Auto-detect again if finished”. The latter one should be useful for rally events with multiple different special stages. Added new setting “Split video files”. If disabled the video will be recorded to one large file. Improved: DIY CAN-Bus API now allows payload length up-to 16 bytes. Improved: Expert setting “GPS week rollover compensation” now also affects the built-in GPS. Fixed: A notification is now displayed, if location is disabled and it is needed for searching or connecting devices. Fixed: Channel postfix field was not displayed in CAN-Bus channel editor',
    closable: true,
},
{
    title: 'Change log for RaceChrono',
    date: formatDate(),
    subtitle: 'Change log for RaceChrono v6.3.4 for Android',
    src: './img/modal_inner_photo3.png',
    content: 'List of paired devices will be displayed when adding a new Bluetooth device. Searching devices in range is now an option. Added new settings “Auto-detect my tracks only” and “Auto-detect again if finished”. The latter one should be useful for rally events with multiple different special stages. Added new setting “Split video files”. If disabled the video will be recorded to one large file. Improved: DIY CAN-Bus API now allows payload length up-to 16 bytes. Improved: Expert setting “GPS week rollover compensation” now also affects the built-in GPS. Fixed: A notification is now displayed, if location is disabled and it is needed for searching or connecting devices. Fixed: Channel postfix field was not displayed in CAN-Bus channel editor',
    closable: true,
},
{
    title: 'Change log for RaceChrono',
    date: formatDate(),
    subtitle: 'Change log for RaceChrono v6.3.4 for Android',
    src: './img/modal_inner_photo5.png',
    content: 'List of paired devices will be displayed when adding a new Bluetooth device. Searching devices in range is now an option. Added new settings “Auto-detect my tracks only” and “Auto-detect again if finished”. The latter one should be useful for rally events with multiple different special stages. Added new setting “Split video files”. If disabled the video will be recorded to one large file. Improved: DIY CAN-Bus API now allows payload length up-to 16 bytes. Improved: Expert setting “GPS week rollover compensation” now also affects the built-in GPS. Fixed: A notification is now displayed, if location is disabled and it is needed for searching or connecting devices. Fixed: Channel postfix field was not displayed in CAN-Bus channel editor',
    closable: true,
},
{
    title: 'Change log for RaceChrono',
    date: formatDate(),
    subtitle: 'Change log for RaceChrono v6.3.4 for Android',
    src: './img/modal_inner_photo4.png',
    content: 'List of paired devices will be displayed when adding a new Bluetooth device. Searching devices in range is now an option. Added new settings “Auto-detect my tracks only” and “Auto-detect again if finished”. The latter one should be useful for rally events with multiple different special stages. Added new setting “Split video files”. If disabled the video will be recorded to one large file. Improved: DIY CAN-Bus API now allows payload length up-to 16 bytes. Improved: Expert setting “GPS week rollover compensation” now also affects the built-in GPS. Fixed: A notification is now displayed, if location is disabled and it is needed for searching or connecting devices. Fixed: Channel postfix field was not displayed in CAN-Bus channel editor',
    closable: true,
},
{
    title: 'Change log for RaceChrono',
    date: formatDate(),
    subtitle: 'Change log for RaceChrono v6.3.4 for Android',
    src: './img/modal_inner_photo6.png',
    content: 'List of paired devices will be displayed when adding a new Bluetooth device. Searching devices in range is now an option. Added new settings “Auto-detect my tracks only” and “Auto-detect again if finished”. The latter one should be useful for rally events with multiple different special stages. Added new setting “Split video files”. If disabled the video will be recorded to one large file. Improved: DIY CAN-Bus API now allows payload length up-to 16 bytes. Improved: Expert setting “GPS week rollover compensation” now also affects the built-in GPS. Fixed: A notification is now displayed, if location is disabled and it is needed for searching or connecting devices. Fixed: Channel postfix field was not displayed in CAN-Bus channel editor',
    closable: true,
}];