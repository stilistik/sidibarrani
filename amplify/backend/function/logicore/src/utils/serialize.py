from json import JSONEncoder


def _default(self, obj):
    return getattr(obj.__class__, "to_json", _default.default)(obj)


def patch_default_json_encoder():
    _default.default = JSONEncoder().default
    JSONEncoder.default = _default
