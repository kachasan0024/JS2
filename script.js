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
