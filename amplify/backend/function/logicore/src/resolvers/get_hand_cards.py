from models.hand import HandModel, HandType


def get_hand_cards(event):
    hand_id = event['source']['id']
    current_user_id = event['identity']['claims'].get('sub')

    hand = HandModel.find_by_id(hand_id)

    if not hand:
        return []
    elif hand.userID == current_user_id:
        return hand.cards
    else:
        if hand.type == HandType.OPEN or hand.type == HandType.HIDDEN:
            return hand.cards
        elif hand.type == HandType.NORMAL:
            return [
                card if card == '__played__' else 'X' for card in hand.cards
            ]
