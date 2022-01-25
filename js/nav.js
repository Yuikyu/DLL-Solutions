const pnav = document.querySelector('.navi-bar');
const tnav = document.querySelector('.navi-button');

pnav.addEventListener("click", function () {
    const visibility = pnav.getAttribute('data-visible');
    if (visibility === "true"){
        print(event.target)}
});

tnav.addEventListener("click", function () {
        const visibility = pnav.getAttribute('data-visible');
        if (visibility === "false"){

            pnav.setAttribute('data-visible', "true");
            tnav.setAttribute('data-visible', "true");
        }
        else{

            pnav.setAttribute('data-visible', "false");
            tnav.setAttribute('data-visible', "false");
        }

    });