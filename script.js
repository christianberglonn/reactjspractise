const entrypoint = "https://jsonplaceholder.typicode.com";
let users;

$(document).ready(() => {
    let page = $('#page');

    
    $.ajax({
        url: entrypoint + '/users',
        method: 'GET'
    }).done((res) => {
        users = res;
        let userList = $('<ul id="userList"></ul>');

        users.forEach(function(user) {
            let listItem = $('<li>' + user.name + '</li>');
            listItem.data({
                userId: user.id
            });
            userList.append(listItem);
        });
        
        page.append(userList);

        });
        $('#page').on('click', '#userList li', (event) => {
            let data = $(event.target).data();
        
            $.ajax({
                url: entrypoint + '/posts?userId=' + data.userId
            }).done((res) => {
                console.log(res);
        
         });
    });
});



