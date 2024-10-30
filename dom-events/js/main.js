
// Select the input
const inputEl = document.querySelector('input');

const ulEl = document.querySelector('ul');

// Select the button
const btn = document.querySelector('button');
btn.addEventListener('click', function(evt) {
  /// create a new <li> comment
  const newCommentEl = document.createElement('li');
  // access the input's text
  const commentText = inputEl.value;
  // sets newComment's text to the input's text
  newCommentEl.innerText = commentText;
  // we now append the new li as the ul's last child
  ulEl.appendChild(newCommentEl);
  // sets the value back to blank
  inputEl.value = '';
});

ulEl.addEventListener('click', handleListClick)


function handleListClick(){
    console.log('list was clicked');
}