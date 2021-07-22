from datetime import datetime
from faker import Faker

fake = Faker()


def get_iso_date_string():
    return datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ")


def get_random_name(num_words=3):
    result = ' '
    fakeWords = map(lambda x: x.capitalize(), fake.words(num_words))
    return result.join(fakeWords)
