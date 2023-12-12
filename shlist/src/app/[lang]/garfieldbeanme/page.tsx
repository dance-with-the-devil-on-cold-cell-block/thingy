import Script from "next/script";

export default function Page() {
    return(<>
    <Script id="beamnae">
    {`
    window.RufflePlayer = window.RufflePlayer || {};
    window.addEventListener("load", (event) => {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById("container");
        container.appendChild(player);
        player.load("/is/coffeeshow.swf");
    });
    `}
    </Script>
    <Script id="rufel" src="https://unpkg.com/@ruffle-rs/ruffle"/>
    <div className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="container"></div>
    </>)
}