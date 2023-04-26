let count = 0;

function cc(card) {

    if (card >= 2 && card <= 6) {
        count++;
    }

    if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
        count--;
    }

    if (count > 0) {
        console.log(`${count} Bet`);
    } else {
        console.log(`${count} Hold`);
    }
}

cc(4);
cc(3);
cc(10);
cc('A');
cc('J');