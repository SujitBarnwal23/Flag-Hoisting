var tl = gsap.timeline();


var tween = tl.to(".man", { duration: 2, x: 300, onComplete: tweenComplete });
tween.timeScale(0.5);
tweens = gsap.fromTo(".rod", { y: 30 }, { duration: 2, y: 0, opacity: 1, ease: "slow", zIndex: 1 });
tween.add(tween);
// MorphSVGPlugin.convertToPath(".man, .salute")
// tween.to(".man", { morphSVG: { shape: ".salute", shapeIndex: "auto" } });
function tweenComplete() {
    document.getElementById("man").style.display = "none";
    console.log("sujit");
    document.getElementById("salute").style.display = "block";
}
