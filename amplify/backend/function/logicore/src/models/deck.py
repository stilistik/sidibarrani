import random


class Deck:
    cards = [
        '6C', '6S', '6D', '6H',
        '7C', '7S', '7D', '7H',
        '8C', '8S', '8D', '8H',
        '9C', '9S', '9D', '9H',
        '10C', '10S', '10D', '10H',
        'JC', 'JS', 'JD', 'JH',
        'QC', 'QS', 'QD', 'QH',
        'KC', 'KS', 'KD', 'KH',
        'AC', 'AS', 'AD', 'AH',
    ]

    def __init__(self):
        self.deck = Deck.cards.copy()
        random.shuffle(self.deck)

    def get_deck(self):
        return self.deck

    def deal_hand(self, size=9):
        if len(self.deck) < size:
            raise Exception('Deck is empty')

        hand = random.sample(self.deck, size)
        self.deck = [card for card in self.deck if card not in hand]
        return hand

    def __str__(self):
        return str(self.deck)
