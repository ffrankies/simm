import random

random.seed()
with open('inputs.data', 'w') as inputFile:
    refs = []
    for i in range(200):
        process = random.randint(1, 8)
        num_refs = random.randint(1, 7)
        for j in range(num_refs):
            pagenum = random.randint(0, 10)
            refs.append("P%d: %s" % (process, format(pagenum, '06b')))
    inputFile.write("\n".join(refs))
print('done!')
