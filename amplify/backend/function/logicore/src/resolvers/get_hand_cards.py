from models.hand import HandModel, HandType


def get_hand_cards(event):
    round_id = event['arguments']['roundID']
    user_id = event['arguments']['userID']
    hand_type = event['arguments']['handType']
    current_user_id = event['identity']['claims'].get('sub')

    all_hands = HandModel.find_by_round(round_id)

    if len(all_hands) == 0:
        raise Exception(f'No hands found for round {round_id}')

    hand = next(
        (hand for hand in all_hands
         if hand.userID == user_id and hand.type == HandType(hand_type)), None)

    if not hand:
        return []
    elif hand.userID == current_user_id:
        return hand.cards
    else:
        if hand.type == HandType.OPEN or hand.type == HandType.HIDDEN:
            return hand.cards
        else:
            raise Exception(
                "You are not authorized to retrieve cards of private hands from other players."
            )
