$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message-list" data-message-id=${message.id}>
          <div class="message-list__messagelliki">
            <div class="message-list__messagelliki__messageiki">
              ${message.user_name}
            </div>
            <div class="message-list__messagelliki__messaged">
              ${message.created_at}
            </div>
          </div>
          <div class="message-list__messoha">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message-list" data-message-id=${message.id}>
        <div class="message-list__messagelliki">
          <div class="class="message-list__messagelliki__messageiki">
            ${message.user_name}
          </div>
          <div class="message-list__messagelliki__messaged">
            ${message.created_at}
          </div>
        </div>
        <div class="message-list__messoha">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.message-list:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.message').append(insertHTML);
        $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});