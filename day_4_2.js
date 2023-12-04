let input;

input = `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
`;

input = `
Card   1: 69 24 51 87  9 49 17 16 21 48 |  5 52 86 35 57 18 60 84 50 76 96 47 38 41 34 36 55 20 25 37  6 70 66 45  3
Card   2: 59 63 94  2 95 30 57 69 85  7 | 95 44 84 30 92 21 74  9 99 49 24 23  8 68  7 63 45 28 96  2 69 77 93 59 85
Card   3: 90 28  1 14 41 83 24 59 55  6 | 29 15 72 47 32 96 73 76 52 20 53 26 78 39 85 92  3 67 51 75 64 54 99 65 22
Card   4: 88 86 30  6 50 32 66 89 81 93 | 99 93 68 37 13 56 66 88 78 89 81 69  6 50 53 86 45 34 32 38 36 84 49 30 35
Card   5: 97 23 64 49 50 60 80 55 65 66 | 30 25 93 92 39 91 85 38 80 52 86  6 40 64 89 15 98 81 13 66 68 87 43  2 74
Card   6: 42 58 18 41 39 60 86 91 71 29 | 20 90 83 19 65 13 70 18 46 95 49 56 52 15 21  8 81 93 89 31 87 91 24 86 53
Card   7: 29 51 49 50 83 80 15 45 61  2 | 29 27 50  4 68 51 15 63 12 33 83 64 96 66 97 10 43 39  2 45 94 89 61 49 82
Card   8: 34 55 80 83 94 48 61  6 68 53 | 76 84 54 46 48 41 93 39 61 96 24 53 83  9 92  6 78 23 47  4 95 31  8 28 56
Card   9: 36 17 51 57 85 66 12 60 22 28 | 50 28 21 34 59 85 49 65 43 17 48 38  3 36 52 44 32 35  7 12 51 61 60 57 22
Card  10: 34 82 78 94 18 13 43 73 55 92 | 88 24 25 82 17 39 69 64 66 80 29 31 58 26 84 92 36 96 30 14 32 99 12  1 18
Card  11: 10 26 21 81 52 90 83 53  1 79 | 34 39 43 86 90 20 23 25 21  1 15 66 93 58 17 68 46 84 71 62  8 81 82 10 26
Card  12: 18 64 34  3 60 10 25 74 73 55 |  4 77 69 19 35 39 54 16 58 71 11 49 64 62 59 12 44 25 80  5 90 36 61 43 21
Card  13: 77 41 66 78 53 94 32 82 15 96 | 55 94 60 16 69  6 82 34 42 65  2 37 20 21 40 57 86 17 35 66 18 68 33 78 46
Card  14: 17  1  7 83 36 53 62 10 20 29 |  9 28 82 13 33 83 49 72 19 37 64 96 12 85  5 75 66 73 31 93 15 70 67  4 52
Card  15: 73 78 29 12 50 19 45 59 13 87 | 90 88 93 47 94 35 11 67 87 84 54 17 22 74 25 70 57 21 30 48 55 15  7 68 85
Card  16: 92  4 20 49 62 85 41 91 60 64 | 52 37 12 94 38  2 97 28 68 93 54  8 82 41 75 34 40 65 64 87 74 76  3 89 46
Card  17: 83 58 26 95 70 62  5 27 36 42 | 23 85 45 12 39 33 81  3  8 90 54 30 80 50 41 61 31 14 21 64 78 17 28 47  7
Card  18: 45 59 66 43 84  7 39 67 16 40 | 35 71 12  4 48 82 91 92 37  1 22 50 55  5 47 19 60 78 14 57 11  8 63 76 73
Card  19: 17 28 32 69 68 42 87 84 33 58 | 84  2 46 54  4 28 64  6 24 68 21 87 69 60 33 19 42 58 82 17 32 73 93 59 44
Card  20:  7 64 52 68 17 88 29 82 19 39 | 12 81 51 72 84 83 62 97 13 25  1  5 44 57 40 86 32 30 80  2 58 76 65 38  7
Card  21: 45 10 78 85 47 31 38 16 70 41 | 16 10 55 78 70 41  2  1 38 61 67 45 99 44 76 86 63  7 31 85 58 34  4 47 52
Card  22: 97 76 54 22 46 98 25 84 94 50 |  5 49 21 81 82 20 23 74 48 57 34 87 13 71 27 45  6 35 67 68 44  1 93 14 29
Card  23: 35 68 90 67 56 28 81 73  8 31 | 51 48 53 61 67 95 68 74 56 26 63 55 73 36 57 15 90 81 28 17 16 30  8 86 12
Card  24: 12 73 45 21 41 44 31  9 23 43 | 57 87  3 73 38 58 93 12 91 56 67  6 61  5 41 33 86 24 70 94 13 44 90 39 63
Card  25: 13 51 56 90 63 27 12 74 94  8 | 26 25 92  7  1 90 72 20 40 85  5 35 23 13 77 99 27 54  3 34 19 65 57 80 52
Card  26: 39 21 92 54 28 86 62 77 13 57 |  4 38 95 41 26  2 27 48 46 55 74 78 61 40 22 45 36 50 14 24 42 97 68 83 85
Card  27: 75 29 12 42 59 41  9 32 81 47 | 87 29 44 26 71 16 32 99 75 58 43 52 56 25  5 28 47  3 30  9 37 57 54 92 78
Card  28: 77 60 69 32 44 47 94 52 16 90 | 91 81 28 17 57 20 69 78 32 27 45 79 12  8 90 34 83 76 47 72 94 56 61  4 93
Card  29: 77 17 36 45 48 39 65 40  8 79 |  9 73 68 79 27 45 18 90 74 53 93 36 85 55 63 64 52 40 76 69 28 41 16 46 30
Card  30: 14  1 34 84 79 38 61 81 37 12 |  3 46 83 50 98 40 61 21 44 65 39 63 43 92 69 15  1 87 78 60 91 25 82 70 54
Card  31:  9 46 80 56 92 25 55 40 87 59 |  5 20  8 76 35 67 50 14 58 48 60 45 42 93 37 31 43 21 16 44  2 84 18 66 82
Card  32: 41 98 65 17 29 21 30 74 78 43 | 44 61 15 88 13 87 26  8 37 23 50 31  1 22 16 97 18 91 73 79 81 60 55  2 34
Card  33: 35 89  1 47 69 49 60 68 91 87 | 53  5 66 92 78 77 10 75 72 22 80 23  8 61 16 99 56 24 55 54  9 74 81 41 85
Card  34: 51 45 97 73 12 48 81 99 19 84 | 20 73  6 86 97 99 91 84 29 68 19  2 45 35  5 78 95 81 51 12 34 47 22 48 39
Card  35: 33 95 77 54 71  1 15 13 14 55 | 69 12  4 95 71 90 62 72 11 47 61 77 25  6 50 29 20 97 21 65 37 14 17 85 64
Card  36: 34 39 52 24 10 53 59 56 76 13 | 57 24 95 56 99 10 53 54 46 76 77 97 85  6 58 60 59 40 31 13 61 34 39 52 66
Card  37: 16 52 12 81 88 69 57 40 59 33 | 24 95 74 36 54 59 52 90 18 46 37 61 25 23 11 56 29 60 97 87 96  7  5 44 64
Card  38: 39 24 14 41 95 89 86 32 35 62 | 17 54 47 51 12 70  8 40 24 56 10 38 75 18 59 25 41 53 58 63 14 77 16 19 36
Card  39: 76 97 86 48 13 11 32 60  8 54 | 34 32 43 95 16 51 38 57 81 85 36 41  3 10  9 24 68 37 87 30 71 59 65 53 52
Card  40: 18 37 65  2 60 13 42 76 86 17 | 49 29 77 76 17  1 37 13 57 12 52 48 45 97 65  3 91 79 42 27  2 89 18 60 86
Card  41: 93 42 44 24 64 78 79 51 75 66 | 93 66 73 88 22 64 75 51 12 95 42 69 78 79 45 41 19 44 71 49 10 68 86 83 60
Card  42: 68 99 67 81 50 14 38 61 39 82 | 27 86 33 26 52 47 73  3 78 48 74 28 36 68 58 24 40 15 82 56 69 30  1 71 13
Card  43: 34 14 85  8  2 73 43 76 30 50 | 46 18  9 77 21 49 62 17 38 76 23 44 66 50 43 56 85 97 73 59  2 30 75 63 58
Card  44: 58 18 63 35 67 88 82 69 11 33 | 40 60 16 98 89 77 95 48 11 97 87 36 82 99 65 85 17 12 22 64 80  2 50 32  7
Card  45: 63 65 12 68 11  2 27 22 19  8 | 86 15  2 16 11 34 96 71 75 41 83 68 58 19 63 97 26 22 57 67 69 65 94 49 10
Card  46: 33  1 17 91 87 13 57 65 66 29 | 68 84 38 86 96 20 94 92 72 44 33 49 77 70 40 42 54 35 46 47 10 15 30 48 76
Card  47: 39 63 71 40 65 23 29 33 90 97 | 28 53 85 83 72 25  2 62  6 26 34 18 30 47 82 73 15  8 52 70 20 86  7 11 74
Card  48: 12 92 19 89 72 49 33  9 42 79 | 47 95  1 23 85 21 34  6 10 93 94 77 69  4 88 82 89 45 38 31 99 50 36 11 68
Card  49: 99 41 27 48 22 97 87 11 88 40 | 89 14 54 44 34 93 69 23 48 59 39 21 19 36 15  1 42 74 96 64 25 94  7 53 26
Card  50: 71 58 70 52 49 72 60 75 39  6 | 27 76 69 36 83 67 39 51 30 57 65 15 93 95 32 14 20 23 34 54 25 64 53 88 77
Card  51: 94 89 83 15 61 59 21 31 13 20 | 92 49 26 38 87 84 90 33 27  7 81 98 25 56 91 41 10 48 14  4 30 85 39  1  5
Card  52: 50 34 33  8 61 99 16 38 27 66 | 18 90 32 13 55 83 36 12  2 43 80 85 52 14 69 71 86 24 82 44 23 25 73 31 41
Card  53: 22 20 49 67 94 84 97 68 58 85 | 58 13 90 52 49 67 86 47 22 84 80 89 77 23 68 85 71 43 37 73 20 16 97 79 94
Card  54: 22 54 25 28 39 17  7 99 34 45 | 28 11 54 95 73  5 82 43 15 38 39  8 96 99 61 85 45  7 29 87 17 22 20 25 34
Card  55: 19 59 78 99 50 97 28 16 52 81 | 33 76 99 36 19 34 16 26 59  1 40 78 64 50 24 71 55 81 56 52 28 65  3 93 82
Card  56: 41 53 91 67  6 19 37 81  2 99 | 82 81 96 91 43  6 53 45  7 27 33 99 41 95  1 37 36 11 89  2 19 16 87 67  5
Card  57: 83 43 40 79 19 21 75 35 41 55 | 35 75 65 78 40 56 39 81 29 84 42 28 33 86 54 52 13 24 30 15 70 23 73 98  1
Card  58:  1 40 98 36 99 70 30 11 34 48 | 50 30 41 40 98 87 48 21 34 55 46 24 93 25 99 36 11 70 29  5  4 84 23  1 65
Card  59: 99  2 35 38 46 75 30 18 63 20 | 63 73 78 34 45 99  1 27 30 91 71 18 51  4 82 79 76 72 86 84 50  7 15 23 66
Card  60: 92 32 75 18 29  7 42 33 30 66 | 10 54 84 44 56 30 71 97 31 99 49 91 90 67 83 21 93 98 11 96 95 52 29 38 73
Card  61: 32 39  7 45 99 79 56 82 13 78 | 58 53 15 48 28  1 32 72 33 52  9 29 57 20 68 89 64 27 81  5 38 80 25 22 10
Card  62: 44 66 55 80 41 98 24 13 63 99 | 17 66 13 15 37 61 69 74 16 25 80 45 39 85 98 55 63 42 99 92 41 83 24 44 31
Card  63:  3 90 16 61 30  8 80 92 84 32 | 12 96 80 25  3 39 98 29 30 55 92 37 61 16  5 14 89 68 63 90 10 69 84 70 41
Card  64: 28 38 60 24 68  9 21 18 73 32 | 51 24  3 60 56 22 18 86 94 15 35 38 85 90  6 23 27 76 66 17 87 58 73 99 93
Card  65: 71 38 10 14 72 76 31 46 50 93 | 98 51 38 65 67 54 71  2 12 87 90 50 46 10 76 19 56 33 64  6 11 99 62 89 93
Card  66: 39 75 77 90 88 82 19 22 67 97 | 23 45  5 62 30 75 69 10 61 99 94 79 90 13  3 97 12 74 78 88 77 95 42 76 64
Card  67: 38 95 70 56 66 26 93 57 40 39 | 93 66 68 40 27 48 70  4 95  9  1 26 39 57 56 92 97 89 77 16 47 74 44 80 85
Card  68: 62 70 79 24 96 68 78 86  5 82 | 78 79 46 64  2  3 59 55 39 35 95 86 45 74 82 80 28 20 32 51 70 24 38  8 92
Card  69: 12 34 18 72 83 14 64 25 43 79 | 23 32 28  9 81 90 60 98  8 92 80 61 91 96 76 48 75 78 12 15 89 40 87  7 53
Card  70: 58 42 86 92 41 93 89 78 91  4 | 59 49 26 10  6 13 70 90 19 30 53  7 34 45 38 72 86 93 32 73 54 15 85 46 56
Card  71: 11 71 96 53 65 83 32 63 56 70 | 99 25 39 37 11 49 23 67 94 20 97 69 78 81 22 47  4 90 71 34 35 19 29 64 30
Card  72: 20 16 43 39 59 37 60 92 30 62 | 64 91 14 84 21 78 43 82 65 51 32 46  4 31 90 95 56 92 88  3 41 54 67 79 18
Card  73: 71 76 27 73 52 70  6 65 53  9 | 40 39 15 98 60 80 88 26 12 34 90 21 68 52 30  6 66 96  5  7 62 65 92 11 82
Card  74: 75 95 13 44 34 96 38 87 52 20 | 28 35 22 80 40 82 19  1 34  7  8 56 33 59 25 26  6 43 87 89 37 94 72 11 15
Card  75: 22 17 49 93  7 68 60 55 86 65 | 62 72 87 15 37 45 20 92 43 32 79 39 83 54 50 31 22 64 41 98 61  5 89  2 91
Card  76: 95  7 35  5 36 38 15 82 28 66 | 40 83 50 77 76 63  8 24 33 42 90  9 23 68 79 73 16 72  2 25 32 96 92 69 65
Card  77:  9 38 54 32  7 55 94 77 37 84 | 51 25  7  6 90 24 32 94 82 43 37 70 58 80 14 89 62 54 49 77 17 68 29  9 86
Card  78:  9 29 79 96 53 77 74 89 92  5 | 45 39  5 29 53 55 77 17 18 92 10 19 42  9 89 87 49  4 60 79 33 38 96 74 69
Card  79: 96 80 69 68 84 53  7 64 40 35 | 65  3 92 59 34 73 40 17 37 54 63 42 82 44 64 93 74 27 38 57 85 23 72 48 75
Card  80:  8 80 68 15 20 98 77 36 42 34 | 34 98 57  7 42 94 50 68 99 20 15 36 32 41 80 78 38 90  4 75 30 17 72  8 77
Card  81: 53 28 67 55 57 94 72 10 30 44 | 33 84  6 75 87 70 78  3 38  9 42 39 44 77 92 68 79 82 27  5 18 40 98 34 85
Card  82: 40 42 31 71 87 94 99 84 76  7 | 23 62 95 78 49 47 88 42 61 50 56 76 31  7 87 84 16 34 40 12 99 21 71 24 33
Card  83: 90 70 42  5 19 29 69 93 20 15 | 23 65 15 42 75 97 45 41 86 90  6 69  2 84  3 19 18  5 29 70 39 51 22 20 93
Card  84: 44 98 96 14 33 45 36 59 80 56 | 69 33 20 59 64 96 80 18 46 44 38 95 71 11 97 54 19 92 36 58 56 83 49 76 89
Card  85: 89  5  2 48 95 86 13 77 98 33 |  6 26 60 73 98 51 83 34 30 78  8 52 39 59 75 99 28 49 63  3 96 38  4 57  9
Card  86: 31 72 57 77 34 41 95 70 32 97 | 32 11 31 97 87 26 10 68 27 34 86 83 70 21 41 95 12  5 62 19 18 77 99  7 72
Card  87: 42 55 61 33 16 56  1 91 41 26 | 69 37 72 28 65 22 20 90 79 95 36 25  4  1 82 80 14 76 85  2 68 27 55 21  3
Card  88: 22 24 77 35 38 19 62 70 84 80 | 28 54 62 26 98 22 27 38 33 92 10 53 41 56 48 71 39 20 77 17 49 23 96 87 91
Card  89: 52 58 14 84 66 45  5 81 20 28 | 43 70 18 71 15 73 38 39 32 83 62 11 24 80 72 67 21 77 64 59  1 86 26 45 42
Card  90: 57 90 11 18  8 64 99 85 30 77 | 30 29 91 93 64 67 70  6 97 85 10 77 12 55 14 90 18  4  3  8 60 25 13 87 58
Card  91: 29 41 92 69 78 56 26 39 79  6 | 56 85 79 98 49 26  1 32 80 16 28 91 20 92 39 22 75 69 66 73 83  2 54  4  9
Card  92: 98 86 61 23 25 82 21 94 44 78 | 38 86 90 56 47 11 84 87 61 89 31 45 80 95 41 49 42  7 44 23 14 76 63 29 85
Card  93: 44 45 55 73 69  5 30 36 66 65 | 23 10 89 39 35 58 45 15 51 98 55 83 99 13 57 28 70  6 84 94 79 52 86 27 85
Card  94: 21 64 88 42 38 40 47 75 69 16 | 36 84 99 51 50  1 18 10  6 77 25 54 86 33 98 97 90  9 23 40 41 59 73 39  3
Card  95: 91 45 99 85 36 39 11 96 15 60 |  2 18 27 77 54 10 13 42 29 65  9 14 67 52 62 47 32 97 40 78 61 30 80 50 66
Card  96: 12 51 95 70 17 58 79 76 21 29 | 36 16  9 98 48 84 68  3 73 86 40 85 94 63 26 57 21 95  5 56 90 64 50 18 23
Card  97: 45 13 85 44 93 51 59 30 98 11 | 77 70 78 43  1  4 20 23 80  9 93 90 31 27 53 84 16 41 58 63  5 89 15 28 36
Card  98: 91 48 35 10 11 59 16 86 34  1 | 85 15  2 33 28 37 55 71 24 45 70 78 67 40 31 61 99  8 58 53  7 30 46 60 50
Card  99: 58 52 34 19 75 98 35 18 30 62 | 99 28 82 47 23 27 16 79 92 17 61 83  6  3 68 43 51 21 58 19 57 80 64 42 25
Card 100: 99  9 93 30 29  5 33 42 17 85 | 29 81 71 56 34 14 72 33 93  3 30 98 39 63  9 90 42 11 96 18 57 50 38 58 17
Card 101: 20 10 50  8 88  2 36 98 82 95 | 12 49 64 90 38 11 46  7 89 94 43 63 65 62 19 17 56 67 27 53 93 58 22 66 28
Card 102:  5 87 50 56 53 71  7 34 76 46 | 87 53 34 56  7 88  1 59 64 68 32 44 13 21 23 92 50  5 46 67 71 76 77 85 80
Card 103: 17 24 77 25  1 76 40 35 61 68 | 58 17 77 11 64 80 25  5 53 70  1 76 86  9 24 35 27 68 55 40 79 74 56 61 20
Card 104: 11 99 30 35 84 28 12 50  6 33 | 23 30 79 87 47 84 99  7  8  2 52  5 20 16 15 80 60 78 86 97 33 70 34 32 27
Card 105: 63 60 42 94 59 57 79 78 10 35 |  1 64 84 78 16 46 55 72 35 50 60 44 43 80 52 18 10 66 39 82 54 33 95 63  4
Card 106:  3 97 26 50 77 16 81 84 12 65 |  3 69 12 54  8 92 67 33 20 65 43 10 93 97 51 34 63 58 88 77 84 76 89 32 26
Card 107: 30 14 49 68 73 15 96 77  9  8 | 81 46 49 73 86 89 95 14 30 25  9 68 72 83 15 20 45 53 99 85 65 77 82 96  8
Card 108: 81  8 32 41 86 22  6 36 49 31 | 22 68 80 97 81 73 41 58 90  6 95 23 88 32 49  8 89 24 56 36 31 86 18 37 94
Card 109: 88  5 61 34 84 60 39 81 32 24 | 18 75 65 64 77 85 60 88 32 34 84 62 50  5 91  4 24 48 72 61 93 81 20 39  2
Card 110: 70 67  7 55 81 92 98 62 45 91 | 54 55 53 27 62 77 13  9  7 26 24 70 75 37 45 97 69 68 21 44 83 71 91 72 30
Card 111: 96 53  6 83 31 24 67 46 21 91 | 91 94 89 41 83 22 72 18 96 24 81 47 70  6 51 13 46 53 74 90 66  8 67 57 84
Card 112: 33 90 15 30 10 77 44 54 20 38 | 30 47 64 52 49 79 80 90 78 31 72 33 39 99 74 38 11 54  7 55 97 42 75 29 77
Card 113: 40 12 82 18 61 55 59 56 65  6 | 65 40 49 90 37 82 12 41 27 59 64 55 70 56  6 39 89 87 11 33 73 25 10 61 66
Card 114: 84 90 17 60 31 29 55  2 30 46 | 65 73 13 38 66 22 44 70 79 92  9 29 26 83 71 30 86 52 98 85 45 34 41 75 59
Card 115: 15 71 14 80 13 76 83 78  5 11 | 20 10 94 72 89 47 15 71  1 39 17 77 22 28 90 25 85 54 59 35 23 33 86 34  3
Card 116: 31 51 72 40 68 98 81  4 79 69 |  5 40 22 39 10 54 95 81  8 16 52 79 46 99 57 32 94  1 63 78 59 69 73 30 64
Card 117:  5 78 66 25 95 56 50  1 53 77 | 23 58 26 81  8  4 47  2 46 28 44 59 74 97 90 34 49 91 48 45 12 61 51 93 19
Card 118: 56 51 69 35 40 31 77 78 30  4 | 34 99 95 47 70 25 41 68 86 51 64 65 10 46  9 74 18 28  8 90 23 24 53 80 94
Card 119: 72 61 69  4 16 21 92 36 26 47 | 82 96  1 35 54  4 84 33 34 77 62 65 68 85 53 73  8 14 37 44 55 31 94 59  5
Card 120: 81 86 27 46 28 82 13 90  1 43 | 33 79 44 91 93 88 11 64 52 21 42 56 39 81 82 78 15 73 65 41  7 77 38 66 35
Card 121: 91 39  4 59 49 20 81 86 44 35 | 18 70  5 83 63 80 55 66 84 25 15 16 65 75 38 36 58 92 56 11 78 32 54 24 46
Card 122: 46 44 74 55  9 59 40 47 16 10 | 11 87 16 39 18 27 34 94 99  7 51 64 32 91 92 82  3 72 60 43 89 98 33 12  1
Card 123: 71 34 44 91 92 82 46 50 66 56 | 22 75 31 25 69 57 62 14 85 19 21 41 17 59 48 99 73 58 72 24 33 61  3 97 49
Card 124: 85 12 81 29 95 65 82 42 51 66 | 82  1 81 28 23 38 39 29 42 12 66 91 27 63 95 31 45 85 65 93 74 67 51  9 52
Card 125: 81 70 47 86  1 42 91 36 24 85 | 78 36 77 24 43 38 29 72  4 83  1 21 28 22 48 89 14 86 91 81 47 27 42 70 85
Card 126: 92  2 63 81  9 99 42 95 75 31 | 40  1  3 45 56  2 58 62 47 33 85 49 86 42 98 12 81 22 32 70 78 61 65 18 16
Card 127: 61 78 43 28 99 26 93 65 79 53 | 43 28 78 64 79 53 65 50 70 48 98 35 22 63 93 71 20 26 14 17 31 99 84 61 75
Card 128: 51 14 59 65 84 18  4 86 95 74 | 90 69 21 72 29 95 28 71 20 68 41 40 25 12 85 30 99 22 83 78 16 43 14 47 33
Card 129: 41 36 25 82 22 62 48 58 17 88 | 22 53 55 37 50 49 44 52 48 61 62 38 58 82 41 78 88 17 94 76 68 95 25 13 36
Card 130: 12 34 86 18 82 54 81 32 56 91 | 49 30 62 61 18 66 67 84 45 40 64 26 51 15 57 56 35 80 17 39 53 89 24 34 46
Card 131: 83 29 67 31  6 76 41 52 19 94 | 46 11 78 96 33 55 64 83 29 71 19 52 31 74  6 44 95 28 41 67 76 88 94 90 79
Card 132: 74 71 24  2  7 66 43 54 75 10 | 83 27 94 85 12 52 84  7 92 29  9 93 40 62 53 32 69 48  2 55 86 42 44 95 41
Card 133: 54 16 20 35 22  7 50 55 46 94 | 83 25  4 18 79 90 30 99 51 43 85 12 33 89 22 56 61 57 26 93 64 14 42 39 19
Card 134: 38 26 19 31 48 58 91 65 22 88 |  9 21 75  7 65 10  4 69 44 73 35 89 93 28 83 53 87 91  1 31 86 24 56 37 46
Card 135: 49 93 60 36 30 27 70  5 57 61 | 19 12 36  7 82 38  9 13 54 30  3 56 24 58 21 35 85 59  4 55 90 65 60 80 23
Card 136:  1 96 65 19 99 42 92 34 95 60 | 42 95 35 19 25 33 92 34 94 26 81 98 65 60 86 56 96 99 50 66 15 29  2  1 63
Card 137: 36 33 19 17 72 94 55 35 88 48 | 73 66 41  7 27 12 25 47 62 78 16  9 81 26 82 98 75 32 15 95 89 46 65 54 58
Card 138: 42 59 28 98 20 62 15 50 65 66 | 65 16 20 90 52 62 59 72  9 98 46 99 50 34  1 42 15 47 31 93 66 21  4 23  3
Card 139: 22 76 73 91 94 10 89 40 68 59 | 81 40 26 73 59 22  4 17 71 80 62 88 91 46 43 60 89 76 27 16 28 93 50 52 82
Card 140: 90 79 52 99 16  3  6  4 78 73 | 79 71 38 96 65 20 13 94 74  9 85 83  3 33 23 58 30 99 80 70 39 66 47 60 12
Card 141: 73  9 48 60 53 47 70 46 20 38 |  2  7 96  1 24 13 98 62 58 55 71 73 12 36 32 66 11 15 49 57  3 22 64 93 51
Card 142: 80 79 72 59 20 43 13 49 19 58 | 94 21 86 24 46 53 15  5  7 16 57 36 83 25 34 80 71 32  3 11  8 88 20  2 59
Card 143: 41 27  2 90 16 97 75 99 37 24 | 14 71 89 54  9 85 99 21 88 49 91 97 36 90 41  2  5 81 63 56 13 23 43 26 48
Card 144: 34 22 37 89 31 83 79 70 66  7 | 80  3 31 29 74 12 52 61 15 39 81  6 22 98  7 89 94 47 55 65 28 48 62 16 30
Card 145: 28 88 74 72 87 44 21 61 69 93 | 78 62 64 63 69 67 97 87  9 80 52 41  2 57 98 42 75 11 25 95 38 70 92  8 50
Card 146: 23 73  1 25 11 43  4 89 53 35 | 69 66 51 17 90 70 47  9 40 44 74 19 58 99 84  7 86 38 73 59 52 10  6 21 79
Card 147: 32 27 47 38 37 50  6 11 92 77 | 66 18 62 30 13  2 55 23 57 47 29 40 46 87 71 69 48 19 84 94 45 67 96 15 74
Card 148: 32 87 65  1 85 69 10 36 76 75 |  2 17 94 46  9 63 77 33 68 30 72 82 56 84 14 43 42 12 98 67 55 89 11 48 78
Card 149: 98 30 10  4 52 91 73  8 83 54 | 28 91 12 10 30 53 54  8 52 68 34  2 23 64 11 21  4 14 51 94 98 50 83 73 36
Card 150: 75 70 35 14 51 90 39 25 87 19 | 48 35 14 59 70 39  7 71 40 51 24 50 85 90 22 92 18 68 41 25 87 19 83 61 75
Card 151: 15 25 92 39 49 88 51 60 42 47 | 23 69 94 88 74 80 12 41 29 49 71 47 67 31 89 82 87 92 15 51 60 42  1 25 39
Card 152: 75 40 32 15 90 24 49 46 62 36 | 11 99 44 83 45 80  8 28 70 57  9 18 73 94 55 66 14 19 10 47 95 97 62 67 87
Card 153: 50 23 26 14 83 51 12 13 37 68 | 93 58 56 98 39 55 92 54 36 29 50 85 42 49 66 61 14 70  7 75 51 87 37 30 96
Card 154: 46 24 76  2 11 32 61 73 86 49 | 86 63 35 32 98 78 73 92  3 24 49 79 37 97 53 80  4 29 61 46  2 83 76 11 23
Card 155: 92 59 74 11 35 33 52 71 67 91 | 24 35 38 33 64 58 97 52 71 51 49 59 74  1 91 45 84 99 56 67 11 92 73 23 48
Card 156: 90 44  4 88 50 45  2 68 27  1 |  4 74 36 10 14 95 16 87 44  2 33 63 45 81 38 27  3 11 29 58 90 55 30 64 98
Card 157: 96 97 16 21 61 89 70 46 75 80 | 80 97 22 69 82 61 50 65 70 16 21 84 89 96 83 46 71 59 75 79 98 23 15 30  3
Card 158: 31 33 66 80 14 61 94 84 56 42 | 94 35 14 80 27 42 31 56 52 48 97 92 74 84  3 72 15 61 95 33 57  9 28 34 66
Card 159: 47 58 72 36 89 15 29 56  4  5 | 47 82 77  4 58 73 51 30 72 86 36 66 29 96  5 31 56 83 24 55 89 15 54 90 32
Card 160: 22 27 25 16  7 34 60 65 36 82 |  8 67 22  5 84 13 21 10  6 27 77 43 23 57 36 65 71 12  7 80 19 81  3 85 25
Card 161: 11 82 72 20 88 53 86 31 44 92 | 30 72 80  6 52 93 48 98 18 22 44 81 46 84 86 14 36 92 53 88 82 66 95 38 59
Card 162:  4 71 73  9 72 76 20 55 37 30 | 24 48 97 31 33 55 46 81 79 15 51 30 11 49 25 18 77 67 73 26 10 69 42 98 41
Card 163: 49 31 41 19 61 21 32 40 95 42 | 31  2 41 53  4 12 81 88 36 69 90 50 95 75 48  5 16 82 23 42 91 13  6  9 97
Card 164: 25 48 96 99 60 63 94 84 56 32 |  5  3 99 25 60  2 84 78 89 52 66  8 22 97 19 21 93 26 87 10 72 71 15 58 91
Card 165: 11 37 82 74 31 10 97 13 59 66 | 82  3 75 35 10 37 33 34 77 41 59 74 70 57 86 13 87 84 11  6 72 66 88 25  5
Card 166: 31 51 74 33 48  8 14 97 21  2 | 67 45 81 11 78 40 52 72 34 12 58 14 92 53 77 49 47 44 64 79 95 10 16 65 27
Card 167: 60 22 10 31 14 71  3 21 73 85 | 92 34 70 37 16 91 87 15 21 63 86  6 19 58 85 57 68 47 42 39 27 74 89 28 20
Card 168: 56 27 76 73 50 91 35 20 29  4 | 93 76 58 87 45 12  6 84 34 55  1  8  2  4 31 21  9 44 35 33  3 82 83 94 91
Card 169: 95 44  9 64 20 59 17 61 81 58 | 39 18  1 21 90 44 53 69 43 94 85 50 62 27 63 96  9 81 60  5 67 80 79 75 17
Card 170: 83 33 31 18 99 96 98 39 12 81 | 42 37 51 15 60  4 94 49 26 88 27 83 10 62 92 58 76 54 38 72  7 30  8 46 22
Card 171: 36 18 98 39 63 75 53 28  2 76 | 78 83 76  8 30 12 41 64 96 19 40 80 92 42 67 11 86 50 14 17 51 98 46 27 65
Card 172: 62  3 96 45 26 33 11 53 44 19 | 18 83 15 97 49 76 95 10 96 22 77 28 51 82 32 81 59  5 73 38 29 98  9 74 80
Card 173: 53 96 78 27 83 80 42 48 15 90 | 51 26 35 13 16 44 88 10 75  8 29 39 28  1 33 79 19 81 56 11 89 60  6 47 46
Card 174: 14 35 82 23 88 98 51 71 95 17 | 93 66 56 83 77 36 87 99 15 90 18 74  1 57 91 29 25 34 65 52 54 88 23 14 96
Card 175: 18 52 49 74 39 28 55 25 42 79 | 66 35 99 24 68 32 45 25 43 18 20  9 98  4 73 39 23 42 37 49 75 33 94 50 63
Card 176: 20 82 72 86 56  3 12 84 92 61 |  3 57 38 63 26 77 54 96 39 71 48 41 21 97 15 22 33 24 65 51  4 43 74 27 59
Card 177: 42 20 63  4 55 12 50 37 96 79 | 30 46 57 63 65 43 41 35  9 25 33 92 79  4 60 42 73 96 72 61 23 89 99 20 10
Card 178: 27 47 39 92 53 89 94 48 83 80 | 48 75 49 47 67 53 56 88 19  5 31 28 46 40 14 83 27 39 92  6 43 94 33 89 97
Card 179: 97 31 80 73  8 79 88 89 36 20 | 11  4  2 76 26 17 22 35  8 83 60 62 64 13 52  1 79 84 94 92 68 30 56 40 80
Card 180: 86 22 35 51 84 48 53 75 31 63 | 46 25 35 58 89 13 59 93 48 75 92 90  1 41 86 22 88 53 19 69 28 63 64 81 71
Card 181: 86 31 74 83 85 55 91 34 75 12 | 68 19 86 26 85 40 37 77 17 56 34  6 21 83 75 88 27 52 31 76 74 92 32  1 55
Card 182: 94 95 38 48 52  6 14 35 69  2 | 31 54 90 94 61 83 92 40 98 77  1 18 41 42 81  7 87 34 80 47 23 66 21 63 37
Card 183: 12 24 88 81 17 79 74 39 92 85 | 69  2 74 17  8 28 19 24 15  1 84 35 10 43 48 88 52 82 39 62 96 86 11 87 22
Card 184: 83  9 86 81 47 69 65 41 98 34 | 74 82 72  5 57 29 38 45  1 21 18 84 91 65 87  6 30 11 35 13 48 97 66 46 70
Card 185: 64 91 37 62 88 49 74 23 61  2 | 90 25 96 69 92 54 43 27 16 65 97 63 20 44 70  2 37 51 80 68 59 81 91 41 12
Card 186: 45 77 32 92 39 18 62 44 19 53 | 88 11 70  5 97 46 65 89 35 38 87 78 63 28 19 37 79 99 27 55 80 72 26 15 51
Card 187: 69 55 15  8 38 94 47 41 87 35 | 65 70 51 63 56  2 88  3 34 79 44 76 37 53 24 97 78 35  1 11 49  9 18 16  5
Card 188: 59  6 46 62 43 98 56 21 10 70 | 27 96 83 78 20  2 84 45 94 41  7 82 15  8 53 38 87 73 36 66 24 34  9 67 51
Card 189: 40 85 84 28 11 89 93 64  1 14 | 82 13 65 83 16 51 56 71 41 23 94 10 67 70 44 98 32 34 63 69 79 37 78 95 35
Card 190: 44 99 94 98 68 23  5 96 29 90 | 99 42 14 95 45 19 82 67 27 87 90 10 70 12 33 79 81  1 31 86 35 47 84 11 72
Card 191: 38 20 92 57 74 24 27 17 22 39 | 66 36 59 50 46 22 20 11 25 62 96 15 80 68 24 39 23  3 60 74 92 57 38 17 27
Card 192: 34 35 12  1 30 22 17 55 14 15 | 14 13 15 33 95  6 55 12 79  2  5  7 22 53 34 10 35 84 19 30 17 26 43 47  1
Card 193: 91 17 30 53 61 97 10 66 31 84 | 61 53 82 29 30 31 99 22 66 91 21 36 15 88 33 10 57 84 75 17 97 80 69 45 93
Card 194: 90 72 71 86 87 46 24 41  1 54 | 72 19 36 98 99 83  6 86 43 57 96 47 67 79 81 50 33 46 25 90 17 15 70 97 56
Card 195: 48 26 97 36 79 35 62 65 42 81 |  2  3 48 97 71 89 57 76 26 36 69 99 52 35 60 42 22  6 37 51 62 84 21 95 46
Card 196: 47 30 78 70 87 36 92 28 86 27 | 92 87 88 57 40 91 75 30 65 28  4 27 43 86 70 49 64 47 34 22 36 80  7 50 78
Card 197:  6  7 56 65 43 73 15 17 54 80 | 72 22 44 82 36 55 94 71 74 87 77 38 32 45 78 92 20 84 16 51 91 11 59 68  9
Card 198:  6 87 55 16 40 13 29 71 58 42 | 36 22 85 77 30 25 72 23 96 70  3  7 54 69 82  1 21 18 95  2  5 84 89 41 81
Card 199: 31 66 71  2 54 16 14 18 67 70 | 44  6 10 86 71 21 45 35 49 31  3 64  5 60 34 63 41 85 61 23 33 40 43 94 74
Card 200: 23 40 93 28 11 47 33 37 48 56 | 35  8 23 41 96 85 91 40 93 89 14 37 47 11 98 83 19 48 28  7 36 39 56 62 27
Card 201: 81 48 69 18 49 71 60 95  9 83 | 23 26 37 29  5  6 45 53  8 52 69 63 73 82 15 58 36  3 51 72 97 68 16 89 14
Card 202: 81 60 71 11 34 57 50 49 39  5 | 64 74 36 89 32 29 87 94 34 73 55 20 85 13 49 69 56  4 62  7 84 18 88 97 98
Card 203: 45 93 57 29 63 90 64 47 65 13 | 21 38 68  8 89 71 11 82 24 64 59 85 41 39 36 25 43 20 99 23 67 76 62  9 93
Card 204: 41  6 21 63 53 85 56 92 55 49 | 56 92 27 73 94 82 48 50 24 14 63 90 75 49 84 85 15 54 83 38 55 41 21 23 36
Card 205: 41 91 43 89 56 84 10 76 81 67 | 21 65 20 28  8 54 10 40 12 84  9 86 69 59 90 71 77 52 76 97 66 88 17 56 91
Card 206: 83  1 24 30 50 91  4 47 11 22 | 26 41 44 65 45 78 36 37 30 49  6 75 50 73 47  2 21 53 94 98 64 40 87 10 96
Card 207: 65 85 93 66 38  3 89 76 98 72 | 55 72 80 12 93 50  8 83 84 82 76 17 90  5 65 34 96 45 44 97 57 73 33 92 13
Card 208: 15 99 75  8 52  6 30 82 64 36 | 27 54 28 64 98 24  3 71 63 92 47 55 31 34  6 48 37 99 70  8 30 66 32 52 91
Card 209: 71 75 51 76 70 55 37 34 16  5 | 91  1 79 65 66 24  2 38 47 92 61 71  4 84 57 60 86 19 50 44 67 40 27 32 62
Card 210: 24 92 99 37 74  1 69 98 96 67 | 47 16 33  5  8 62 20 46 50 73 32 71 80 68  7 17 14 96 65 54 76 30 75 98 72
Card 211:  7 47 34 58 54 38 70 93 43 87 | 97 79 37 72 88 27 17 14 78 94 59 63 87 15 53 46 57 98 75 42  1 40 28  3 89
Card 212: 95 63 96 50 55 64 62 11 66  1 | 17 28 19 53 76 38 90 94 31 87 32  6 27 10 63 68 25 70 22 42 79 41  3 47 72
Card 213: 44 62 67 29 17 65 45 35 48 51 | 21 54 20  8  3 49 55 85 91 58 59 27 37 35 28 83 92 90  1 81 47 73 69 33  2
Card 214: 96  3 24 46 13 64 86  8  2 92 | 97 54 53 88 12 17 61 21  7 40 79 16 39 25 69  9 50 56 91 31 32 90 19 37 33
`;


let sum = 0;
let cards = [];
input.split('\n').filter(item => item).forEach((item, index) => {
    cards[index] = (cards[index] ?? 0) + 1;

    const numbers = item.replace(/Card\s+\d+:\s+/, '').split('|').map(item => item.trim().split(' ').filter(item=>item));
    const matches = numbers[1].filter((number) => numbers[0].includes(number));
    console.log(matches);
    matches?.forEach((match, matchIndex) => {
        const nextCard = index + matchIndex + 1;
        cards[nextCard] = (cards[nextCard] ?? 0) + cards[index];
    });
}, {});
console.log(cards);
console.log(`Total: ${cards.reduce((acc, item) => (acc + item), 0)}`);
