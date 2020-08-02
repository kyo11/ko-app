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

  $('.form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.message').append(html);      
      $('form')[0].reset();
      $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
      $('.form__submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  })
    .always(function(){
      $('.form__submit').removeAttr('disabled');
    });
  });
});