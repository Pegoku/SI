# uncompyle6 version 3.9.3
# Python bytecode version base 2.7 (62211)
# Decompiled from: Python 3.14.3 (main, Feb 13 2026, 15:31:44) [GCC 15.2.1 20260209]
# Embedded file name: xor.py
# Compiled at: 2021-02-01 16:35:44
import binascii, itertools, base64, sys

def xor_crypt_string(data, key='estoesunaclaveparacifrar', encode=False, decode=False):
    from itertools import izip, cycle
    import base64
    if decode:
        data = base64.decodestring(data)
    xored = ('').join(chr(ord(x) ^ ord(y)) for x, y in izip(data, cycle(key)))
    if encode:
        return base64.encodestring(xored).strip()
    return xored


secret_data = sys.argv[1]
print 'Cifrado'
print xor_crypt_string(secret_data, encode=True)
print 'Descifrado'
print xor_crypt_string(xor_crypt_string(secret_data, encode=True), decode=True)
return

# okay decompiling xor.pyc
