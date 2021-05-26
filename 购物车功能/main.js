window.onload = function () {
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByClassName("*");
            for (var i = 0, len = els.length; i < len; i++) {
                if (els[i].className === cls || els[i].className.indexOf(cls) >= 0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }
    var cartTable = document.getElementById("cartTable");
    var tr = cartTable.children[1].rows;//表格元素特有的属性存放节点所有tr元素
    var checkInput = document.getElementsByClassName("check");
    var checkAllInputs = document.getElementsByClassName("check-all");
    var selectedTotal = document.getElementsById("selectedTotal");
    var priceTotal = document.getElementsById("priceTotal");
    function getTotal() {
        var seleted = 0;
        var price = 0;
        for (var i = 0, len = tr.length; i < len; i++) {
            if (tr[i].getElementsByTagName("input")[0].checked) {
                selected += parseInt(tr[i].getElementsByTagName("input")[1]);
                price += parseFloat(tr[i].cells[4].innerHTML);
            }
        }
        selectedTotal.innerHTML = seleted;
        priceTotal.innerHTML = price.toFixed(2);

    }
    for (var i = 0,len = chenckInputs.length; i < len; i++) {
        checkInputs[i].onclick = function () {
            if (this.className === "check-all check") {
                for (var j = 0; j < checkInput.length; j++) {
                    checkInput[j].checked = this.checked;
                }

            }
          if(this.checked==false){
              for(var k=0;k<checkAllInputs.length;k++){
                  checkAllInputs[k].checked=false;
              }
          }
        }
        getTotal();
    }
}