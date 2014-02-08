function store_the_order_information() {

    var order_information = {
        user: localStorage.getItem('user'),
        restaurant: localStorage.getItem('restaurant'),
        food: JSON.parse(localStorage.getItem('food_information_object')),
        price_status: 'unknown'
    }

    order_information = setting_price_status(order_information)

    var orders_list = JSON.parse(localStorage.getItem('orders_list'));
    orders_list.push(order_information);
    localStorage.setItem("orders_list", JSON.stringify(orders_list));

}

function setting_price_status(order_information_object) {
    order_information_object.price_status = order_information_object.food.price > 12 ? 'beyond_price' : 'within_price';
    return order_information_object
}

function clear_order_index_page_data() {
    localStorage.setItem('user', '');
    localStorage.setItem('food_information_object', '{"name":"","price":""}');
}

function get_the_unorders_people_name_array(unorders) {
    var orders = JSON.parse(localStorage.getItem('orders_list'));
    for (var i = 0; i < orders.length; i++) {
        for (var j = 0; j < unorders.length; j++) {
            orders[i].user == unorders[j].name ? unorders.splice(j, 1) : i = i;
        }
    }
    return unorders
}

function get_total_price(){
    var total_price=0,
        orders = JSON.parse(localStorage.getItem('orders_list'));

    for(var i = 0;i<orders.length;i++){
        total_price+=orders[i].food.price;
    }

    return parseFloat(total_price).toFixed(2)
}

function change_foods_price_to_float_format(orders){
    for(index in orders){
        orders[index].food.price = parseFloat(orders[index].food.price).toFixed(2);
    }
    return orders
}
