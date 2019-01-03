function $ (id) {
    return document.getElementById(id).value;
}

for (let i = 1; i <= 4; i++) {
    document.getElementById('slider'+i).oninput = function () {
        document.getElementById('output'+i).value = this.value;
        document.getElementById('styleCode').innerText = 'box-shadow: ' + $('slider1') + 'px ' + $('slider2') + 'px ' + $('slider3') + 'px ' + $('slider4') + 'px ' + $('shadowColor');
        document.getElementById('exampleBox').style.boxShadow = $('slider1') + 'px ' + $('slider2') + 'px ' + $('slider3') + 'px ' + $('slider4') + 'px ' + $('shadowColor');
    };

    document.getElementById('output'+i).oninput = function () {
        document.getElementById('slider'+i).value = this.value;
        document.getElementById('exampleBox').style.boxShadow = $('slider1') + 'px ' + $('slider2') + 'px ' + $('slider3') + 'px ' + $('slider4') + 'px ' + $('shadowColor');
        document.getElementById('styleCode').innerText = 'box-shadow: ' + $('slider1') + 'px ' + $('slider2') + 'px ' + $('slider3') + 'px ' + $('slider4') + 'px ' + $('shadowColor');
    }

}

document.getElementById('shadowColor').oninput = function () {
    document.getElementById('exampleBox').style.boxShadow = $('slider1') + 'px ' + $('slider2') + 'px ' + $('slider3') + 'px ' + $('slider4') + 'px ' + $('shadowColor');
    document.getElementById('styleCode').innerText = 'box-shadow: ' + $('slider1') + 'px ' + $('slider2') + 'px ' + $('slider3') + 'px ' + $('slider4') + 'px ' + $('shadowColor');
};