#!/usr/bin/python3

# extract odd numbers from list
def extract_odd_nums(input_list):
    sorted_list = sorted(input_list)
    odd_nums_list = []
    remaining_nums_list = []

    for i in sorted_list:
        if i % 2 != 0:
            odd_nums_list.append(i)
        else:
            remaining_nums_list.append(i)

    print("\nInitial list: ", sorted_list)
    print("Odd numbers list: ", odd_nums_list)
    print("Even numbers list: ", remaining_nums_list, "\n")


# Extract even numbers from list
def extract_even_nums(input_list):
    sorted_list = sorted(input_list)
    even_nums_list = []
    remaining_nums_list = []

    for i in sorted_list:
        if i % 2 == 0:
            even_nums_list.append(i)
        else:
            remaining_nums_list.append(i)

    print("\nInitial list: ", sorted_list)
    print("Odd numbers list: ", even_nums_list)
    print("Even numbers list: ", remaining_nums_list, "\n")


namespaces = dir()
filtered_namespaces = [
    names for names in namespaces if not names.startswith('__')]
print(dir(filtered_namespaces))
