let count = 1;
let price = 600;
        function increase() {
            count++;
            document.getElementById('products').value = count;
        }

        function decrease() {
            if (count > 0) {
                count--;
                document.getElementById('products').value = count;
            }
        }

        const sell = document.getElementsByClassName("sell")[0]; // Chọn phần tử đầu tiên có class 'sell'
        sell.addEventListener("click", myFunctionSell); // Sửa lại thành addEventListener

        function myFunctionSell() {
            alert(`Số hàng bạn đã mua là: ${count}`);
        }
        
        const store = document.getElementsByClassName("store")[0]
        store.addEventListener("click", myFunctionStore);

        function myFunctionStore(){
            alert(`Bạn đã thêm sản phẩm vào giỏ hàng`)
        }
