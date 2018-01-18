for (let i = 1; i <= 4; i++) {
    document.getElementById('slider'+i).oninput = function () {
        document.getElementById('output'+i).innerHTML = this.value;
    }
}