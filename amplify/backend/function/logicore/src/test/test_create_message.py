from test.testutils import LogiCoreTestCase


class TestCreateMessage(LogiCoreTestCase):
    def setUp(self) -> None:
        from models.game import GameModel

        super().setUp()
        game = GameModel.create()
        self.text = "text"
        self.event = {
            'arguments': {
                'gameID': game.id,
                'text': self.text,
            },
            'identity': {
                'claims': {
                    'sub': self.user_a.id
                }
            }
        }

    def test_create_message(self):
        from resolvers.create_message import create_message
        from models.message import MessageModel
        game = create_message(self.event)
        messages = MessageModel.find_by_game(game['id'])
        self.assertEqual(len(messages), 1)
        self.assertEqual(messages[0].text, self.text)

    def test_raises_if_text_is_falsy(self):
        from resolvers.create_message import create_message
        event = self.event.copy()
        event['arguments']['text'] = ""
        with self.assertRaises(Exception):
            create_message(self.event)