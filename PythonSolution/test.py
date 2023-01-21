list1 = []
list2 = []

n = int(input())
for i in range(0, n):
    ele1 = int(input())
    list1.append(ele1)

p = int(input())
for j in range(0, p):
    ele2 = int(input())
    list2.append(ele2)

joinTwoArray = list1 + list2
joinTwoArray.sort()

print(joinTwoArray)
