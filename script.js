const pullDownButton =document.getElementById("lists")
const pullDownMenu =document.getElementById("pull-down")

pullDownButton.addEventListener("mouseover",function(){
    pullDownMenu.classList.remove("hidden");
    console.log("プルダウンメニューが表示されました");
});

pullDownButton.addEventListener("mouseout",function(){
    pullDownMenu.classList.add("hidden");
    console.log("プルダウンメニューが非表示されました")
});

pullDownButton.addEventListener("mouseover", function(){
    this.setAttribute("style", "background-color:blue;")
    console.log("マウスオーバー時に青色")
});
pullDownButton.addEventListener("click" ,function(){
    this.setAttribute("style","background-color:green;")
    console.log("クリック時に緑色")
})
pullDownButton.addEventListener("mouseout", function(){
    this.removeAttribute("style","background-color:red;")
    console.log("マウスアウト時に赤色")
})

const pullDownParents =document.getElementById("pull-down")

pullDownButton.addEventListener("click",function(){
    if(pullDownParents.getAttribute("style")=="display:block;"){
         pullDownParents.removeAttribute("style","display;block;")
        console.log("非表示")
    } else {
        pullDownParents.setAttribute("style","display:block;")
        console.log("表示")
    }
})
