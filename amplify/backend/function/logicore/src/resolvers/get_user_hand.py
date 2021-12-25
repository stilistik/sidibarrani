from models.hand import HandModel, HandType


def get_user_hand(event):
    round_id = event['arguments'].get('roundID')
    hand_type = event['arguments'].get('handType')
    user_id = event['identity']['claims'].get('sub')

    all_hands = HandModel.find_by_round(round_id)
    return next(hand for hand in all_hands
                if hand.userID == user_id and hand.type == HandType(hand_type))
