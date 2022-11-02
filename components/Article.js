// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
    {
      title: 'Gabi School Students: "We\'re the best!"',
      date: 'Nov 5th, 2018',
      content: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
          moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
          watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
          Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
          jar twi'lek jinn leia jango skywalker mon. Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
          windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
          mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
          k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
          solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
          owen jinn tatooine sith organa.`
    },
    {
      title: 'Javascript and You, ES6',
      date: 'May 7th, 2019',
      content: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
          Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
          snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
          yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
          knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
          Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks. Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
          wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
          mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
          and Parvati Sorting Hat Minister of Magic blue turban remember my last.`
    },
    {
      title: 'React vs Angular vs Vue',
      date: 'June 7th, 2019',
      content: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`
    },
    {
      title: 'Professional Software Development in 2019',
      date: 'Jan 1st, 2019',
      content: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`
    }
  ];
  
  /*
    Step 1: Write a component called 'articleMaker' to create an article.
    Your component is a function that takes an article object as its only argument,
    and returns a DOM node looking like the one below:
  
    <div class="article">
      <h2>{title of the article}</h2>
      <p class="date">{date of the article}</p>
  
      {article content goes here}
  
      <span class="expandButton">+</span>
    </div>
  
    Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
    This listener should toggle the class 'article-open' on div.article.
  
    Step 3: Don't forget to return something from your function!
  
    Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
    to create a div.article element and append it to the DOM inside div.articles (see index.html).
  
    Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
    Refresh the page to see the new article.
  */
  

/* Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>
    {three separate paragraph elements}
    <span class='expandButton'></span>
  </div>
  Hint: You will need to use createElement more than once here!
  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.
  */
  function createArticle(dataObj) {
    // create needed elements
    let article = document.createElement('div');
    let title = document.createElement('h2');
    let date = document.createElement('p');
    let firstP = document.createElement('p');
    let secondP = document.createElement('p');
    let thirdP = document.createElement('p');
    let buttonPanel = document.createElement('div');
    let expandButton = document.createElement('button');
    let closeButton = document.createElement('button');
  
    // add needed classes to the elements
    article.classList.add('article');
    date.classList.add('date');
    buttonPanel.classList.add('button-panel')
    expandButton.classList.add('expandButton');
    closeButton.classList.add('expandButton', 'hide-btn');
  
    // setup the structure of the article
    buttonPanel.append(expandButton, closeButton);
    article.append(title, date, firstP, secondP, thirdP, buttonPanel);
  
    // add content to the elements
    title.append(dataObj.title);
    date.append(dataObj.date);
    firstP.append(dataObj.firstParagraph);
    secondP.append(dataObj.secondParagraph);
    thirdP.append(dataObj.thirdParagraph);
    expandButton.textContent = '\u25bc';
    closeButton.textContent = '\u25b2';
  
    /* Add an event listener to the buttonPanel div. This event listener should toggle the class 'article-open' on the 'article' div. */
    buttonPanel.addEventListener('click', () => {
      expandButton.classList.toggle('hide-btn');
      closeButton.classList.toggle('hide-btn');
  
      article.classList.toggle('article-open');
      document.body.classList.toggle('body');
    });
  
    // return the article component
    return article;
  }
  
  
  // Map over the data, creating a component for each object and add each component to the DOM as children of the 'articles' div.
  const articles = document.querySelector('.articles');
  
  data.forEach(dataObj => {
    let article = createArticle(dataObj);
    articles.append(article);
  });