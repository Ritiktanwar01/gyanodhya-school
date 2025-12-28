from itertools import zip_longest
from .models import *

def chunked(iterable, n):
    args = [iter(iterable)] * n
    return zip_longest(*args)