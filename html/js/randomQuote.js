function randomQuote (displayDiv, quoteNumber, prefix) {
    // initialize quotes list. Quotes use ::: to separate words from speaker
    var quotes=[
        "Survive, stand like a rock; that the waters change course around you, and others without distraction may see further.",
        "The one thing that doesn’t abide by majority rule is a person’s conscience.:::Harper Lee",
        "Many people, especially ignorant people, want to punish you for speaking the truth, for being correct, for being you. Never apologize for being correct, or for being years ahead of your time. If you’re right and you know it, speak your mind. Speak your mind. Even if you are a minority of one, the truth is still the truth.:::Mahatma Gandhi",
        "Anti-social behaviour is a trait of intelligence in a world full of conformists.:::Nikola Tesla",
        "Coding is one of the highest art forms achieved by mankind; an idea - just an electrical impulse - is made real in an alternate electronic universe; the created idea however, does not have physical form, and yet can change the physical world; it cannot be touched, and yet may touch all mankind."
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
