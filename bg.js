document.write(`
    
<style>
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position:fixed;
    background: #000;
    overflow: hidden;
    z-index:0;
    background-size:cover;
}

.background span {
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 13;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}



.background span:nth-child(0) {
    color: #5dcde1;
    top: 1%;
    left: 26%;
    animation-duration: 310s;
    animation-delay: -318s;
    transform-origin: -16vw -8vh;
    box-shadow: 2vmin 0 1.1836865649138484vmin currentColor;
}
.background span:nth-child(1) {
    color: #5dcde1;
    top: 43%;
    left: 93%;
    animation-duration: 208s;
    animation-delay: -168s;
    transform-origin: -2vw -11vh;
    box-shadow: 2vmin 0 0.8166557109110699vmin currentColor;
}
.background span:nth-child(2) {
    color: #50c878;
    top: 54%;
    left: 25%;
    animation-duration: 75s;
    animation-delay: -142s;
    transform-origin: -6vw -11vh;
    box-shadow: 2vmin 0 1.153180359636468vmin currentColor;
}
.background span:nth-child(3) {
    color: #8b82d7;
    top: 81%;
    left: 29%;
    animation-duration: 333s;
    animation-delay: -227s;
    transform-origin: 15vw -14vh;
    box-shadow: 2vmin 0 0.2770949175361368vmin currentColor;
}
.background span:nth-child(4) {
    color: #8b82d7;
    top: 81%;
    left: 38%;
    animation-duration: 358s;
    animation-delay: -277s;
    transform-origin: -13vw 20vh;
    box-shadow: -2vmin 0 0.9889795038832017vmin currentColor;
}
.background span:nth-child(5) {
    color: #50c878;
    top: 2%;
    left: 61%;
    animation-duration: 25s;
    animation-delay: -240s;
    transform-origin: 16vw 20vh;
    box-shadow: 2vmin 0 0.7546196819167621vmin currentColor;
}
.background span:nth-child(6) {
    color: #5dcde1;
    top: 63%;
    left: 35%;
    animation-duration: 155s;
    animation-delay: -107s;
    transform-origin: -23vw -18vh;
    box-shadow: -2vmin 0 1.0311469889662561vmin currentColor;
}
.background span:nth-child(7) {
    color: #87b5ff;
    top: 68%;
    left: 38%;
    animation-duration: 18s;
    animation-delay: -208s;
    transform-origin: -17vw 2vh;
    box-shadow: -2vmin 0 0.6299185519470065vmin currentColor;
}
.background span:nth-child(8) {
    color: #5dcde1;
    top: 88%;
    left: 17%;
    animation-duration: 103s;
    animation-delay: -125s;
    transform-origin: -23vw 17vh;
    box-shadow: 2vmin 0 0.9906058762115424vmin currentColor;
}
.background span:nth-child(9) {
    color: #87b5ff;
    top: 94%;
    left: 75%;
    animation-duration: 224s;
    animation-delay: -29s;
    transform-origin: 12vw -7vh;
    box-shadow: -2vmin 0 0.9057095368133401vmin currentColor;
}
.background span:nth-child(10) {
    color: #5dcde1;
    top: 72%;
    left: 69%;
    animation-duration: 346s;
    animation-delay: -101s;
    transform-origin: -9vw 13vh;
    box-shadow: -2vmin 0 1.0579481418964036vmin currentColor;
}
.background span:nth-child(11) {
    color: #50c878;
    top: 34%;
    left: 55%;
    animation-duration: 147s;
    animation-delay: -223s;
    transform-origin: 16vw -2vh;
    box-shadow: -2vmin 0 0.4725249531153144vmin currentColor;
}
.background span:nth-child(12) {
    color: #87b5ff;
    top: 40%;
    left: 12%;
    animation-duration: 328s;
    animation-delay: -330s;
    transform-origin: -13vw 14vh;
    box-shadow: -2vmin 0 1.1881672183285745vmin currentColor;
}
.background span:nth-child(13) {
    color: #5dcde1;
    top: 62%;
    left: 3%;
    animation-duration: 345s;
    animation-delay: -344s;
    transform-origin: 19vw 2vh;
    box-shadow: -2vmin 0 0.652575492891525vmin currentColor;
}
.background span:nth-child(14) {
    color: #87b5ff;
    top: 98%;
    left: 93%;
    animation-duration: 54s;
    animation-delay: -287s;
    transform-origin: 13vw 3vh;
    box-shadow: 2vmin 0 0.43922704254176237vmin currentColor;
}
.background span:nth-child(15) {
    color: #50c878;
    top: 81%;
    left: 29%;
    animation-duration: 34s;
    animation-delay: -82s;
    transform-origin: 19vw 1vh;
    box-shadow: -2vmin 0 0.6318602562935778vmin currentColor;
}
.background span:nth-child(16) {
    color: #5dcde1;
    top: 36%;
    left: 79%;
    animation-duration: 269s;
    animation-delay: -110s;
    transform-origin: 16vw -17vh;
    box-shadow: -2vmin 0 0.380234932373936vmin currentColor;
}
.background span:nth-child(17) {
    color: #fee29f;
    top: 2%;
    left: 20%;
    animation-duration: 295s;
    animation-delay: -342s;
    transform-origin: 1vw 7vh;
    box-shadow: 2vmin 0 0.6499804842329833vmin currentColor;
}
.background span:nth-child(18) {
    color: #5dcde1;
    top: 71%;
    left: 72%;
    animation-duration: 230s;
    animation-delay: -46s;
    transform-origin: -23vw -20vh;
    box-shadow: 2vmin 0 0.500752134470428vmin currentColor;
}
.background span:nth-child(19) {
    color: #8b82d7;
    top: 89%;
    left: 40%;
    animation-duration: 205s;
    animation-delay: -355s;
    transform-origin: 18vw -4vh;
    box-shadow: 2vmin 0 0.7931400801891917vmin currentColor;
}
.background span:nth-child(20) {
    color: #5dcde1;
    top: 61%;
    left: 13%;
    animation-duration: 212s;
    animation-delay: -293s;
    transform-origin: 14vw -7vh;
    box-shadow: 2vmin 0 0.9517804597415336vmin currentColor;
}
.background span:nth-child(21) {
    color: #50c878;
    top: 20%;
    left: 53%;
    animation-duration: 95s;
    animation-delay: -12s;
    transform-origin: -6vw 17vh;
    box-shadow: 2vmin 0 0.9961892602450697vmin currentColor;
}
.background span:nth-child(22) {
    color: #87b5ff;
    top: 17%;
    left: 59%;
    animation-duration: 244s;
    animation-delay: -40s;
    transform-origin: 2vw 14vh;
    box-shadow: 2vmin 0 0.7109394305813865vmin currentColor;
}
.background span:nth-child(23) {
    color: #50c878;
    top: 16%;
    left: 10%;
    animation-duration: 212s;
    animation-delay: -144s;
    transform-origin: 3vw -9vh;
    box-shadow: -2vmin 0 0.8423526639160821vmin currentColor;
}
.background span:nth-child(24) {
    color: #5dcde1;
    top: 15%;
    left: 52%;
    animation-duration: 353s;
    animation-delay: -71s;
    transform-origin: 19vw 2vh;
    box-shadow: -2vmin 0 0.504105467921552vmin currentColor;
}
.background span:nth-child(25) {
    color: #87b5ff;
    top: 25%;
    left: 34%;
    animation-duration: 145s;
    animation-delay: -206s;
    transform-origin: -10vw -21vh;
    box-shadow: -2vmin 0 0.4884607161283787vmin currentColor;
}
.background span:nth-child(26) {
    color: #8b82d7;
    top: 36%;
    left: 58%;
    animation-duration: 31s;
    animation-delay: -293s;
    transform-origin: 14vw 9vh;
    box-shadow: 2vmin 0 0.3422580331268723vmin currentColor;
}
.background span:nth-child(27) {
    color: #50c878;
    top: 59%;
    left: 55%;
    animation-duration: 72s;
    animation-delay: -234s;
    transform-origin: 11vw -21vh;
    box-shadow: 2vmin 0 0.6766128283237911vmin currentColor;
}
.background span:nth-child(28) {
    color: #87b5ff;
    top: 10%;
    left: 65%;
    animation-duration: 107s;
    animation-delay: -38s;
    transform-origin: 5vw 5vh;
    box-shadow: -2vmin 0 0.686698369074775vmin currentColor;
}
.background span:nth-child(29) {
    color: #87b5ff;
    top: 65%;
    left: 22%;
    animation-duration: 42s;
    animation-delay: -29s;
    transform-origin: -9vw -19vh;
    box-shadow: 2vmin 0 0.6337164860572166vmin currentColor;
}
.background span:nth-child(30) {
    color: #50c878;
    top: 64%;
    left: 22%;
    animation-duration: 332s;
    animation-delay: -62s;
    transform-origin: 14vw -16vh;
    box-shadow: -2vmin 0 0.8247899385285107vmin currentColor;
}
.background span:nth-child(31) {
    color: #5dcde1;
    top: 55%;
    left: 45%;
    animation-duration: 275s;
    animation-delay: -193s;
    transform-origin: -17vw -19vh;
    box-shadow: -2vmin 0 1.1484294943600875vmin currentColor;
}
.background span:nth-child(32) {
    color: #50c878;
    top: 74%;
    left: 5%;
    animation-duration: 40s;
    animation-delay: -233s;
    transform-origin: 0vw -3vh;
    box-shadow: 2vmin 0 0.26743257950037447vmin currentColor;
}
.background span:nth-child(33) {
    color: #5dcde1;
    top: 25%;
    left: 38%;
    animation-duration: 50s;
    animation-delay: -167s;
    transform-origin: -7vw 4vh;
    box-shadow: 2vmin 0 0.3541124842212857vmin currentColor;
}
.background span:nth-child(34) {
    color: #50c878;
    top: 44%;
    left: 65%;
    animation-duration: 96s;
    animation-delay: -151s;
    transform-origin: 20vw 18vh;
    box-shadow: -2vmin 0 0.28923681003419266vmin currentColor;
}
.background span:nth-child(35) {
    color: #87b5ff;
    top: 6%;
    left: 20%;
    animation-duration: 279s;
    animation-delay: -98s;
    transform-origin: 21vw -15vh;
    box-shadow: -2vmin 0 0.877300192396429vmin currentColor;
}
.background span:nth-child(36) {
    color: #87b5ff;
    top: 98%;
    left: 35%;
    animation-duration: 229s;
    animation-delay: -362s;
    transform-origin: 25vw 16vh;
    box-shadow: -2vmin 0 0.4228196150064185vmin currentColor;
}
.background span:nth-child(37) {
    color: #87b5ff;
    top: 61%;
    left: 37%;
    animation-duration: 316s;
    animation-delay: -157s;
    transform-origin: -3vw 19vh;
    box-shadow: 2vmin 0 0.6596391086573892vmin currentColor;
}
.background span:nth-child(38) {
    color: #5dcde1;
    top: 32%;
    left: 4%;
    animation-duration: 37s;
    animation-delay: -227s;
    transform-origin: 7vw 13vh;
    box-shadow: 2vmin 0 0.8030415262373771vmin currentColor;
}
.background span:nth-child(39) {
    color: #87b5ff;
    top: 28%;
    left: 57%;
    animation-duration: 58s;
    animation-delay: -153s;
    transform-origin: -21vw -18vh;
    box-shadow: 2vmin 0 0.3149504792900615vmin currentColor;
}
.background span:nth-child(40) {
    color: #5dcde1;
    top: 12%;
    left: 3%;
    animation-duration: 104s;
    animation-delay: -23s;
    transform-origin: 8vw -23vh;
    box-shadow: 2vmin 0 1.2053804811002353vmin currentColor;
}
.background span:nth-child(41) {
    color: #87b5ff;
    top: 96%;
    left: 30%;
    animation-duration: 288s;
    animation-delay: -271s;
    transform-origin: 1vw -20vh;
    box-shadow: 2vmin 0 0.7881091907920668vmin currentColor;
}
.background span:nth-child(42) {
    color: #8b82d7;
    top: 78%;
    left: 81%;
    animation-duration: 185s;
    animation-delay: -82s;
    transform-origin: 0vw 15vh;
    box-shadow: 2vmin 0 1.1109142804753587vmin currentColor;
}
.background span:nth-child(43) {
    color: #8b82d7;
    top: 79%;
    left: 50%;
    animation-duration: 60s;
    animation-delay: -161s;
    transform-origin: -16vw 5vh;
    box-shadow: 2vmin 0 1.231970106695364vmin currentColor;
}
.background span:nth-child(44) {
    color: #fee29f;
    top: 15%;
    left: 3%;
    animation-duration: 38s;
    animation-delay: -219s;
    transform-origin: -15vw 18vh;
    box-shadow: -2vmin 0 0.8978132366252649vmin currentColor;
}
.background span:nth-child(45) {
    color: #fee29f;
    top: 88%;
    left: 16%;
    animation-duration: 20s;
    animation-delay: -347s;
    transform-origin: -16vw -18vh;
    box-shadow: 2vmin 0 1.0036024795183445vmin currentColor;
}
.background span:nth-child(46) {
    color: #8b82d7;
    top: 74%;
    left: 74%;
    animation-duration: 255s;
    animation-delay: -306s;
    transform-origin: -12vw 2vh;
    box-shadow: -2vmin 0 0.528168624416717vmin currentColor;
}
.background span:nth-child(47) {
    color: #50c878;
    top: 60%;
    left: 36%;
    animation-duration: 120s;
    animation-delay: -13s;
    transform-origin: -9vw -5vh;
    box-shadow: -2vmin 0 0.9529374382508393vmin currentColor;
}
.background span:nth-child(48) {
    color: #87b5ff;
    top: 69%;
    left: 65%;
    animation-duration: 26s;
    animation-delay: -261s;
    transform-origin: 20vw 15vh;
    box-shadow: 2vmin 0 0.4877679434122708vmin currentColor;
}
.background span:nth-child(49) {
    color: #fee29f;
    top: 99%;
    left: 88%;
    animation-duration: 344s;
    animation-delay: -33s;
    transform-origin: -4vw 22vh;
    box-shadow: 2vmin 0 1.190960464675705vmin currentColor;
}

</style>

    <div class="background" style="z-index:-1;">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
   </div>    
    
`);