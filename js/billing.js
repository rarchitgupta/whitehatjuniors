var ticketCount = localStorage["ticketCount"];
document.getElementById("bill-ticket-count").innerHTML = ticketCount;
document.getElementById("bill-tickets-price").innerHTML = ticketCount * 200;

function increaseCount(e, el, type) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    updateAddOns(type, value);
}

function decreaseCount(e, el, type) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 0) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
    updateAddOns(type, value);
}

function updateAddOns(type, value) {
    switch (type) {
        case 'largepopcorn':
            document.getElementById('lpquantity').innerHTML = value;
            document.getElementById('lpprice').innerHTML = "₹ " + value * 350;
            updateTotal();
            break;
        case 'regularpopcorn':
            document.getElementById('rpquantity').innerHTML = value;
            document.getElementById('rpprice').innerHTML = "₹ " + value * 250;
            updateTotal();
            break;
        case 'coke':
            document.getElementById('ccquantity').innerHTML = value;
            document.getElementById('ccprice').innerHTML = "₹ " + value * 200;
            updateTotal();
            break;
        case 'nachos':
            document.getElementById('cnquantity').innerHTML = value;
            document.getElementById('cnprice').innerHTML = "₹ " + value * 250;
            updateTotal();
            break;
        default:
            break;
    }
}

updateTotal();

function updateTotal() {
    document.getElementById('subtotal').innerHTML =
        (ticketCount * 200) + (document.getElementById('lpquantity').innerHTML * 350) + (document.getElementById('rpquantity').innerHTML * 250) + (document.getElementById('ccquantity').innerHTML * 200) + (document.getElementById('cnquantity').innerHTML * 250);
    document.getElementById('gst').innerHTML = (12.5 / 100) * (document.getElementById('subtotal').innerHTML);
    document.getElementById('st').innerHTML = (12.5 / 100) * (document.getElementById('subtotal').innerHTML);
    document.getElementById('gt').innerHTML = parseFloat(document.getElementById('gst').innerHTML) + parseFloat(document.getElementById('st').innerHTML) + parseFloat(document.getElementById('subtotal').innerHTML);
}