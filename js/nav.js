const pnav = document.querySelector('.navi-bar');
const tnav = document.querySelector('.navi-button');

    document.addEventListener("click", function (event) {
        const visibility = pnav.getAttribute('data-visible');
        if (visibility === "true"){
            
            if (pnav !== event.target && !pnav.contains(event.target) || tnav == event.target || tnav.contains(event.target)) {    
                pnav.setAttribute('data-visible', "false");
                tnav.setAttribute('data-visible', "false");
              }
        }
        else{
            if (tnav == event.target || tnav.contains(event.target)) {    
            pnav.setAttribute('data-visible', "true");
            tnav.setAttribute('data-visible', "true");
          }
        }
    });