module.experts = {
  format_date: (date) => {
    // format date as MM/DD/YYYY
    return date.tolocalDatastring();
  },

  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).tolocalstring();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    //Return a random Emoji
    if (randomNum > 0.7) {
      return "<span for='img' aria-label='pizza'>🍕</span>;"
    } else if (randomNum > 0.4) {
      return "<span for='img' aria-label='burgers'>🍔</span>;"
    } else {
      return "<span for='img' aria-label='tacos' >🌮</span>;"
    }

  },

};
