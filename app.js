function $ (id) {
    return document.getElementById(id).value;
}

for (let i = 1; i <= 4; i++) {
    document.getElementById('slider'+i).oninput = function () {
        document.getElementById('output'+i).innerHTML = this.value;
        document.getElementById('exampleBox').style.boxShadow = $('slider1') + 'px ' + $('slider2') + 'px ' + $('slider3') + 'px ' + $('slider4') + 'px black';
    }
}
