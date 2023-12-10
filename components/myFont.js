import localFont from '@next/font/local';

const myFont = localFont({ src: "../Fonts/sugarmagicpersonaluseonly-jemyo.otf" });

export default function Fonts({children}){

return (

<h1 style={myFont.style}>{children}</h1>


)


}