#!/usr/bin/python3

# main.py

from extract_nums_from_list import extract_odd_nums, extract_even_nums

all_num_list = list(range(1, 21))
random_list = [20, 9, 7, 45, 20, 47, 5,
               48, 1, 5, 6, 74, 5, 6, 14, 5, 0, 9, 1, 64]

extract_odd_nums(all_num_list)
extract_odd_nums(random_list)

extract_even_nums(all_num_list)
extract_even_nums(random_list)
