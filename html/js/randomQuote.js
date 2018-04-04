function randomQuote (displayDiv, quoteNumber, prefix) {
    /* Purpose: provide a named div containing a random (attributed) quote.
              The returned html can be used to replace existing div content, or
              as the innerHTML of something else. Styling should be done via CSS in
              main file using displayDiv as the root, with *_theWords and *_theSpeaker
    */
    // initialize quotes list. Quotes use ::: to separate words from speaker
    var quotes=[
        "Survive, stand like a rock; that the waters change course around you, and others without distraction may see further.",
        "Coding is one of the highest art forms achieved by mankind; an idea - just an electrical impulse - is made real in an alternate electronic universe; the created idea however, does not have physical form, and yet can change the physical world; it cannot be touched, and yet may touch all mankind.",
        "The one thing that doesn’t abide by majority rule is a person’s conscience.:::Harper Lee",
        "Many people, especially ignorant people, want to punish you for speaking the truth, for being correct, for being you. Never apologize for being correct, or for being years ahead of your time. If you’re right and you know it, speak your mind. Speak your mind. Even if you are a minority of one, the truth is still the truth.:::Mahatma Gandhi",
        "Anti-social behaviour is a trait of intelligence in a world full of conformists.:::Nikola Tesla",
        "In the End, we will remember not the words of our enemies, but the silence of our friends.:::Martin Luther King, Jr.",
        "Nothing in all the world is more dangerous than sincere ignorance and conscientious stupidity.:::Martin Luther King, Jr.",
        "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.:::Martin Luther King, Jr.",
        "Our lives begin to end the day we become silent about things that matter.:::Martin Luther King, Jr.",
        "Never forget that everything Hitler did in Germany was legal.:::Martin Luther King, Jr.",
        "Humans are allergic to change. They love to say, &quot;We've always done it this way.&quot; I try to fight that. That's why I have a clock on my wall that runs counter-clockwise.:::Rear Admiral Grace Murray Hopper",
        "Life was simple before World War II. After that, we had systems.:::Rear Admiral Grace Murray Hopper",
        "If it's a good idea, go ahead and do it. It is much easier to apologize than it is to get permission.:::Rear Admiral Grace Murray Hopper",
        "A great empire, like a great cake, is most easily diminished at the edges.:::Benjamin Franklin",
        "We are all born ignorant, but one must work hard to remain stupid.:::Benjamin Franklin",
        "A house is not a home unless it contains food and fire for the mind as well as the body.:::Benjamin Franklin",
        "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.:::Buddha",
        "The mind is everything. What you think you become.:::Buddha",
        "Everyone, Republican or otherwise has their own particular part to play. No part is too great or too small, no one is too old or too young to do something.:::Bobby Sands",
        "It is not those who can inflict the most but those who can endure the most who will conquer.:::Terence MacSwiney",
        "It is a fallacy to believe that a Republic of any kind can be won through the shackled Free State. You can't make a silk purse out of a sow's ear.:::Liam Mellows",
        "Ireland unfree shall never be at peace:::Pádraig Pearse",
        "Dearly beloved, we are gathered here today to get through this thing called life.:::Prince"

    ];
    // randomly choose a quote, or use quoteNumber provided (if in range)
    if ((quoteNumber < 0) || (quoteNumber > quotes.length)) {
        quoteNumber = Math.floor(Math.random() * quotes.length);
    }
    thisQuote=quotes[quoteNumber];
    // split the quote at the separation marker ::: to quote/speaker
    quotes=thisQuote.split(":::",2);
    theWords=quotes[0],
    theSpeaker=quotes[1];
    // there may not be a speaker
    if (theSpeaker == undefined) {
        theSpeaker='';
        prefix=''
    }
    myDiv=document.createElement('div');
    myDiv.id=displayDiv;
    myDiv.innerHTML='<span id="' + displayDiv + '_theWords">' + theWords +
          '</span><span id="' + displayDiv + '_theSpeaker">' + prefix + theSpeaker + '</span>';
    return myDiv;
}
