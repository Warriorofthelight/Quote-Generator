let quote = document.getElementById("quote");

let generate = document.getElementById("generate");

const quotes = [
  "The obstacle is the way. - Marcus Aurelius",
  "Choose not to be harmed, and you won't feel harmed. - Marcus Aurelius",
  "It's not what happens to you, but how you react that matters. - Epictetus",
  "Waste no more time arguing what a good man should be. Be one. - Marcus Aurelius",
  "You have power over your mind, not outside events. - Marcus Aurelius",
  "He who fears death will never do anything worthy of a man who is alive. - Seneca",
  "The whole future lies in uncertainty: live immediately. - Seneca",
  "We suffer more often in imagination than in reality. - Seneca",
  "Don't explain your philosophy. Embody it. - Epictetus",
  "No person has the power to have everything they want, but it is in their power not to want what they don't have.- Seneca",
  "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has. - Epictetus",
  "If it is not right, do not do it. If it is not true, do not say it. - Marcus Aurelius",
  "Very little is needed to make a happy life; it is all within yourself, in your way of thinking. - Marcus Aurelius",
  "A gem cannot be polished without friction, nor a man perfected without trials. - Seneca",
  "First say to yourself what you would be, and then do what you have to do. - Epictetus",
  "The more we value things outside our control, the less control we have. - Epictetus",
  "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours. - Marcus Aurelius",
  "You become what you give your attention to. - Epictetus",
  "The best revenge is not to be like your enemy. - Marcus Aurelius",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Marcus Aurelius",
  "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment. - Marcus Aurelius",
];

generate.addEventListener("click", function () {
  // ****** FOREACH FUNCTION
  //   quotes.forEach(paste);

  //   function paste(item, index, arr) {
  //     quote.innerHTML = arr[0] = `${item}`;

  for (let i = 0; i < quotes.length; i+) {
    quote.innerHTML = i;
    console.log(i);
  }
});
