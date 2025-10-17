const tunnel = document.getElementById(tunnel);
for(let i=0; i<15;i++)
{
    const frame = document.createElement(div);
    frame.className='frame';
    frame.style.animationDelay='$[i*0.2]s'
    tunnel.appendChild(frame);
}