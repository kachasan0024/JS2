const pullDownButton= document.getElementById("lists");
const pullDownMenu =document.getElementById("pull-down");

pullDownButton.addEventListener("mouseover",function(){
    pullDownMenu.classList.remove("hidden");
    console.log("プルダウンメニューが表示されました");
});

pullDownButton.addEventListener("mouseout",function(){
    pullDownMenu.classList.add("hidden");
    console.log("プルダウンメニューが非表示されました")
});

pullDownButton.addEventListener("mouseover", function(){
    pullDownButton.setAttribute("style", "background-color:blue;")
    console.log("マウスオーバー時に青色")
});
pullDownButton.addEventListener("click" ,function(){
    pullDownButton.setAttribute("style","background-color:green;")
    console.log("クリック時に緑色")
})
pullDownButton.addEventListener("mouseout", function(){
    pullDownButton.removeAttribute("style","background-color:red;")
    console.log("マウスアウト時に赤色")
})